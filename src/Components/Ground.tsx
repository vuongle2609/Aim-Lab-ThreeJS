import { wallTexture } from "../assets/images/textures";

const objectTexture = wallTexture(200, 200);

const Ground = () => {
  const WIDTH = 100;
  const HEIGHT = 100;

  return (
    <mesh
      castShadow
      receiveShadow
      rotation-x={-Math.PI / 2}
      position={[0, -0.8, 0]}
      dispose={null}
    >
      <planeGeometry attach="geometry" args={[WIDTH, HEIGHT]} />
      <meshPhongMaterial attach="material" map={objectTexture} />
    </mesh>
  );
};

export default Ground;
