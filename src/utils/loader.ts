import {
  GLTF,
  GLTFLoader as threeGLTFLoader,
} from "three/examples/jsm/loaders/GLTFLoader";

export const GLTFLoader = async (path: string) => {
  const loader = new threeGLTFLoader();

  return new Promise<GLTF>((resolve, reject) => {
    loader.load(
      "/assets/" + path,
      (gltf) => {
        resolve(gltf);
      },
      () => {},
      (error) => {
        reject(error);
      }
    );
  });
};
