import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";
import { scene } from "@/main";
import { GLTFLoader } from "@/utils/loader";

export default class Room {
  constructor() {
    this.initialize();
  }

  async initialize() {
    const cube = new Mesh(
      new BoxGeometry(4, 4, 4),
      new MeshBasicMaterial({ color: 0x0d4c92 })
    );
    cube.castShadow = true;
    cube.receiveShadow = true;

    const room = await GLTFLoader("untitled.gltf");

    console.log(room);

    const newMaterial = new MeshStandardMaterial({
      color: 0xd1d8e0,
    });

    room.scene.traverse((node) => {
      if (node.type === "Mesh") {
        node.receiveShadow = true;
        node.castShadow = true;
        //@ts-ignore
        node.material = newMaterial;
      }
    });

    room.scene.scale.set(14, 14, 14);

    scene.add(room.scene);
  }
}
