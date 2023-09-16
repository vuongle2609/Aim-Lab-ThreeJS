import { GUI } from "dat.gui";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Gun from "./classes/gun";
import Light from "./classes/light";
import { RenderPage } from "./classes/renderPage";
import Room from "./classes/room";
import { $ } from "./utils/selector";

export default class GameScene extends RenderPage {
  renderer: THREE.WebGLRenderer;

  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  sceneGun: THREE.Scene;
  cameraGun: THREE.PerspectiveCamera;

  control: PointerLockControls;
  gui: GUI;

  afterRender = () => {
    this.control.lock();

    const app = document.querySelector("#app");

    // focus section -->

    // planing: make custom cursor -->
    // cursor section -->

    app?.insertAdjacentHTML(
      "beforeend",
      `
      <div id="modal_focus" class="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-slate-300 hidden">
        <button class="bg-red-600 p-9" id="focus">Focus</button>
      </div>

      <div id="modal_game" class="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <div class="w-[20px] h-[20px] relative">
          <div class="w-full h-[3px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white"></div>
          <div class="h-full w-[3px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white"></div>
        </div>
      </div>
    `
    );

    const btnFocus = $("#focus");

    btnFocus.onclick = () => {
      this.control.lock();
    };
  };

  constructor() {
    super();
    this.initialize();
  }

  initialize() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    window.addEventListener(
      "resize",
      () => {
        this.onWindowResize();
      },
      false
    );

    this.element = this.renderer.domElement;

    this.gui = new GUI({});

    // create 2 separate scene for gun and game
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#87CEEB");

    this.sceneGun = new THREE.Scene();

    // handle camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    this.cameraGun = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    this.camera.position.set(0, 3, 20);
    this.camera.lookAt(0, 4, 0);

    this.cameraGun.position.set(0, 3, 20);
    this.cameraGun.lookAt(0, 4, 0);

    this.control = new PointerLockControls(
      this.camera,
      this.renderer.domElement
    );

    setTimeout(() => {
      const light = new Light();
      const room = new Room();
      const gun = new Gun();
    }, 200);

    this.control.addEventListener("lock", function () {
      const modalFocus = $("#modal_focus");
      if (modalFocus) modalFocus.style.display = "none";
    });

    this.control.addEventListener("unlock", function () {
      const modalFocus = $("#modal_focus");
      if (modalFocus) modalFocus.style.display = "flex";
    });

    this.RAF(0);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  RAF(t: number) {
    requestAnimationFrame((t) => {
      this.RAF(t);
    });

    this.renderer.autoClear = true;

    this.renderer.render(this.scene, this.camera);

    this.renderer.autoClear = false;

    this.renderer.render(this.sceneGun, this.cameraGun);
  }
}

// const gameScene = new GameScene();

// export const scene = gameScene.scene;
// export const gui = gameScene.gui;
// export const sceneGun = gameScene.sceneGun;
