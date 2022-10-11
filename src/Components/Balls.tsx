import { useStore } from "../hooks/useStore";
import * as THREE from "three";

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
              // console.clear();
              // const boundingBox = new THREE.Box3().setFromObject(e.object);
              // const ballSize = boundingBox.getSize(new THREE.Vector3());
              // // console.log("size", boundingBox.getSize(new THREE.Vector3()));
              // console.log("ray", e);
              // // console.log("o dire", e.object.position);

              // console.log({
              //   x: ballSize.x + e.object.position.x,
              //   y: ballSize.y + e.object.position.y,
              //   z: ballSize.z + e.object.position.z,
              // });

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
