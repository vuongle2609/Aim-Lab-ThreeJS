import { wallTexture } from "../assets/images/textures";

const objectTexture = wallTexture(2, 2);

const Box = () => {
  return (
    <mesh position={[3.4, 1.2, -0.2]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" map={objectTexture} />
    </mesh>
  );
};

export default Box;
