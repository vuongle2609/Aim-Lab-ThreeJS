import { useStore } from "../hooks/useStore";

const Balls = () => {
  const [balls, clickBall] = useStore((state: any) => [
    state.balls,
    state.clickBall,
  ]);

  return (
    <group position={[-1.06, 1.4, 1.8]}>
      {balls.map((item: any, index: number) => {
        return (
          <mesh
            key={"balls" + index}
            onClick={(e) => {
              e.stopPropagation();

              if (item.visible) {
                clickBall(index);
              }
            }}
            scale={0.23}
            position={[item.x, item.y, 0]}
            castShadow={item.visible}
            receiveShadow
          >
            <sphereGeometry attach="geometry" />
            <meshPhongMaterial
              attach="material"
              color={0x17f4ef}
              transparent
              opacity={item.visible ? 1 : 0}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default Balls;
