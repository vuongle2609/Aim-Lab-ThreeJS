import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "react-dat-gui/build/react-dat-gui.css";
import Balls from "./Components/Balls";
import Box from "./Components/Box";
import FPV from "./Components/FPV";
import Ground from "./Components/Ground";
import SmallWall from "./Components/SmallWall";
import Walls from "./Components/Walls";

function App() {
  // const [boxState, setBoxState] = useState({
  //   sizeX: 1,
  //   sizeY: 1,
  //   sizeZ: 1,
  //   posX: 0,
  //   posY: 1.4,
  //   posZ: 0,
  //   rotateX: 0,
  //   rotateY: 0,
  //   rotateZ: 0,
  // });

  return (
    <>
      <Canvas shadows>
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
      {/* <DatGui data={boxState} onUpdate={setBoxState}>
        <DatFolder title="size" closed={false}>
          <DatNumber path="sizeX" min={-30} max={30} step={0.1} />
          <DatNumber path="sizeY" min={-30} max={30} step={0.1} />
          <DatNumber path="sizeZ" min={-30} max={30} step={0.1} />
        </DatFolder>
        <DatFolder title="position" closed={false}>
          <DatNumber path="posX" min={-30} max={30} step={0.1} />
          <DatNumber path="posY" min={-30} max={30} step={0.1} />
          <DatNumber path="posZ" min={-30} max={30} step={0.1} />
        </DatFolder>
        <DatFolder title="rotate" closed={false}>
          <DatNumber path="rotateX" min={-30} max={30} step={0.1} />
          <DatNumber path="rotateY" min={-30} max={30} step={0.1} />
          <DatNumber path="rotateZ" min={-30} max={30} step={0.1} />
        </DatFolder>
      </DatGui> */}
    </>
  );
}

export default App;
