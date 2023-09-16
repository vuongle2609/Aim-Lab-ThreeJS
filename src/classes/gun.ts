import { gameScene } from "@/app";
import { GLTFLoader } from "@/utils/loader";

export default class Gun {
  constructor() {
    this.initialize();
  }

  async initialize() {
    const gun = await GLTFLoader("handGun.glb");
    gun.scene.scale.set(0.2, 0.2, 0.2);

    gun.scene.position.set(0.2, 2.1, 19);
    gun.scene.rotation.set(0, 9.5, 0);

    // gui.add(gun.scene.rotation, "y", 0, 10, 0.1);
    // gui.add(gun.scene.position, "z", 15, 20, 0.1);

    gameScene.sceneGun.add(gun.scene);
  }
}
