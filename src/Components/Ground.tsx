import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { mappingObject } from "../assets/images/images";

const Ground = () => {
  const WIDTH = 100;
  const HEIGHT = 100;

  const objectTexture = new TextureLoader().load(mappingObject);

  objectTexture.magFilter = NearestFilter;
  objectTexture.wrapS = RepeatWrapping;
  objectTexture.wrapT = RepeatWrapping;

  objectTexture.repeat.set(200, 200);

  return (
    <mesh
      castShadow
      receiveShadow
      rotation-x={-Math.PI / 2}
      position={[0, -0.8, 0]}
    >
      <planeGeometry attach="geometry" args={[WIDTH, HEIGHT]} />
      <meshPhongMaterial
        attach="material"
        map={objectTexture}
        color={0xf0f0f0}
      />
    </mesh>
  );
};

export default Ground;
