import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { mappingObject } from "../assets/images/images";

const Box = () => {
  const objectTexture = new TextureLoader().load(mappingObject);

  objectTexture.magFilter = NearestFilter;

  objectTexture.wrapS = RepeatWrapping;
  objectTexture.wrapT = RepeatWrapping;

  objectTexture.repeat.set(2, 2);

  return (
    <mesh position={[3.4, 1.2, -0.2]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" map={objectTexture} />
    </mesh>
  );
};

export default Box;
