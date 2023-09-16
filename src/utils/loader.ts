import { Material, MeshStandardMaterial } from "three";
import {
  GLTF,
  GLTFLoader as threeGLTFLoader,
} from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader as threeFBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export const GLTFLoader = async (
  path: string,
  options?: {
    castShadow?: boolean;
    receiveShadow?: boolean;
    material?: Material;
  }
) => {
  const { castShadow = true, receiveShadow = true, material } = options || {};

  const loader = new threeGLTFLoader();

  return new Promise<GLTF>((resolve, reject) => {
    loader.load(
      "/assets/" + path,
      (gltf) => {
        gltf.scene.traverse((node) => {
          if (node.type === "Mesh") {
            node.receiveShadow = receiveShadow;
            node.castShadow = castShadow;

            if (material)
              //@ts-ignore
              node.material = material;
          }
        });

        resolve(gltf);
      },
      () => {},
      (error) => {
        reject(error);
      }
    );
  });
};

export const FBXLoader = async () => {};
