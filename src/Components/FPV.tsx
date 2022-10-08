import { PointerLockControls, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const FPV = () => {
  const { camera, gl } = useThree();

  // return <OrbitControls args={[camera, gl.domElement]} />;
  return <PointerLockControls args={[camera, gl.domElement]} />;
};

export default FPV;
