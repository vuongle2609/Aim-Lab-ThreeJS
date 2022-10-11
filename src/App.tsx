import { useStore } from "./hooks/useStore";
import CalculateScreen from "./pages/CalculateScreen/CalculateScreen";
import GridShot from "./pages/GridShot/GridShot";
import StartScreen from "./pages/StartScreen/StartScreen";

function App() {
  const [mode] = useStore((state: any) => [state.mode]);
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
      {!mode && <StartScreen />}
      {mode === "grid" && <GridShot />}
      {mode === "calculate" && <CalculateScreen />}
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
