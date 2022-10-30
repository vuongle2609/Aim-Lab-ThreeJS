import { Canvas } from "@react-three/fiber";
import Gun from "../../Components/Gun";

const GunLayer = () => {
  return (
    <>
      <Canvas shadows className="gunlayer">
        <Gun />
        <pointLight intensity={4} position={[-2, 6, 2]} color={0xfffbd4} />
        <ambientLight intensity={0.2} />
      </Canvas>
    </>
  );
};

export default GunLayer;
