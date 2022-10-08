import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { mappingObject } from "../assets/images/images";

const SmallWall = () => {
  const objectTexture = new TextureLoader().load(mappingObject);

  objectTexture.magFilter = NearestFilter;

  objectTexture.wrapS = RepeatWrapping;
  objectTexture.wrapT = RepeatWrapping;

  objectTexture.repeat.set(28, 4);

  return (
    <mesh position={[0, -0.18, 0.62]} castShadow receiveShadow>
      <planeGeometry args={[14, 2, 1]} />
      <meshPhongMaterial attach="material" map={objectTexture} />
    </mesh>
  );
};

export default SmallWall;
