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

    // ball color 4F709C
    const newMaterial = new MeshStandardMaterial({
      color: 0xF0F0F0,
    });

    const room = await GLTFLoader("room.gltf", {
      material: newMaterial,
    });

    room.scene.scale.set(14, 14, 14);

    scene.add(room.scene);
  }
}
