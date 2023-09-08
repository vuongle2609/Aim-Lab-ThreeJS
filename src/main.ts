import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./style.css";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Room from "./components/room";
import Light from "./components/light";

class Three {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  control: OrbitControls;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    document.body.appendChild(this.renderer.domElement);

    window.addEventListener(
      "resize",
      () => {
        this.onWindowResize();
      },
      false
    );

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      16 / 9,
      500
    );

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color("#DEF5E5");

    this.control = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );

    this.camera.position.set(0, 3, 20);
    this.camera.lookAt(0, 0, 0);

    setTimeout(() => {
      const light = new Light();
      const room = new Room();
    }, 200);

    const btnFocus = document.querySelector("#focus");
    const modalFocus = document.querySelector("#modal_focus") as HTMLDivElement;

    // btnFocus?.addEventListener("click", () => {
    //   this.control.lock();
    // });

    // this.control.addEventListener("lock", function () {
    //   if (modalFocus) modalFocus.style.display = "none";
    // });

    // this.control.addEventListener("unlock", function () {
    //   if (modalFocus) modalFocus.style.display = "flex";
    // });

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

    this.renderer.render(this.scene, this.camera);
  }
}

const game = new Three();

export const scene = game.scene;
