import { wallTexture } from "../assets/images/textures";

const objectTexture = wallTexture(28, 14);

const Walls = () => {
  const WALL_HEIGHT = 6;

  return (
    <group position={[0, 0, 7]} castShadow receiveShadow>
      {/* opposite wall */}
      <mesh position={[0, 0, -8]} castShadow receiveShadow>
        <planeGeometry args={[14, WALL_HEIGHT, 1]} />
        <meshPhongMaterial attach="material" map={objectTexture} />
      </mesh>
      {/* left wall */}
      <mesh
        position={[-6, 0, -3]}
        rotation-y={Math.PI / 2}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[10, WALL_HEIGHT, 1]} />
        <meshPhongMaterial attach="material" map={objectTexture} />
      </mesh>
      {/* right wall */}
      <mesh
        position={[6, 0, -3]}
        rotation-y={-Math.PI / 2}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[10, WALL_HEIGHT, 1]} />
        <meshPhongMaterial attach="material" map={objectTexture} />
      </mesh>
      {/* behind wall */}
      <mesh position={[0, 0, 2]} rotation-y={Math.PI} castShadow receiveShadow>
        <planeGeometry args={[14, WALL_HEIGHT, 1]} />
        <meshPhongMaterial attach="material" map={objectTexture} />
      </mesh>
      {/* top wall */}
      <mesh
        position={[0, 3.2, -6.8]}
        rotation-x={Math.PI / 2}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[14, WALL_HEIGHT, 0.3]} />
        <meshPhongMaterial attach="material" map={objectTexture} />
      </mesh>
    </group>
  );
};

export default Walls;
