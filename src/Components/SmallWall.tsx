import { wallTexture } from "../assets/images/textures";

const objectTexture = wallTexture(28, 4);

const SmallWall = () => {
  return (
    <mesh position={[0, -0.18, 0.62]} castShadow receiveShadow>
      <planeGeometry args={[14, 2, 1]} />
      <meshPhongMaterial
        attach="material"
        map={objectTexture}
        // color={0xf0f0f0}
      />
    </mesh>
  );
};

export default SmallWall;
