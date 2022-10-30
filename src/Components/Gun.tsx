import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Cylinder006_M4-2_0"]: THREE.Mesh;
    ["Cylinder006_M4-1_0"]: THREE.Mesh;
  };
  materials: {
    ["M4-2"]: THREE.MeshStandardMaterial;
    ["M4-1"]: THREE.MeshStandardMaterial;
  };
};

const Gun = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "./model/gun.gltf"
  ) as unknown as GLTFResult;

  return (
    <group
      {...props}
      dispose={null}
      scale={0.09}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0.2, 0.01, 5.24]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[36.5, -180.5, -0.68]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={28.7}
          >
            <mesh
              geometry={nodes["Cylinder006_M4-2_0"].geometry}
              material={materials["M4-2"]}
            ></mesh>
            <mesh
              geometry={nodes["Cylinder006_M4-1_0"].geometry}
              material={materials["M4-1"]}
            ></mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./model/gun.gltf");
export default Gun;
