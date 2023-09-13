import { GUI } from "dat.gui";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Gun from "./classes/gun";
import Light from "./classes/light";
import { RenderPage } from "./classes/renderPage";
import Room from "./classes/room";

export default class GameScene extends RenderPage {
  renderer: THREE.WebGLRenderer;

  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  sceneGun: THREE.Scene;
  cameraGun: THREE.PerspectiveCamera;

  control: PointerLockControls;
  gui: GUI;

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

    const btnFocus = document.querySelector("#focus");
    const modalFocus = document.querySelector("#modal_focus") as HTMLDivElement;

    btnFocus?.addEventListener("click", () => {
      this.control.lock();
    });

    this.control.addEventListener("lock", function () {
      if (modalFocus) modalFocus.style.display = "none";
    });

    this.control.addEventListener("unlock", function () {
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
