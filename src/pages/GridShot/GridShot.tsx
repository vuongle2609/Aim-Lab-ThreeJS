import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Balls from "../../Components/Balls";
import Box from "../../Components/Box";
import FPV from "../../Components/FPV";
import Ground from "../../Components/Ground";
import ScoreBoard from "../../Components/ScoreBoard";
import SmallWall from "../../Components/SmallWall";
import Walls from "../../Components/Walls";
import "./index.scss";

const GridShot = () => {
  return (
    <>
      <Canvas shadows className="shotlayer">
        <Sky sunPosition={[100, 400, 300]} />
        <ambientLight intensity={0.2} />
        <pointLight
          castShadow
          intensity={0.8}
          position={[7, 6.8, 4]}
          color={0xfffbd4}
        />
        <FPV />
        <Ground />
        <Balls />
        <group position={[0, 0, -0.6]}>
          <Box />
          <SmallWall />
          <Walls />
        </group>
      </Canvas>
      <div className="cross">+</div>
      <ScoreBoard />
    </>
  );
};

export default GridShot;
