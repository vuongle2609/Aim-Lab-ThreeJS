import { useStore } from "./hooks/useStore";
import CalculateScreen from "./pages/CalculateScreen/CalculateScreen";
import GridShot from "./pages/GridShot/GridShot";
import GunLayer from "./pages/GunLayer/GunLayer";
import StartScreen from "./pages/StartScreen/StartScreen";

function App() {
  const [mode] = useStore((state: any) => [state.mode]);

  return (
    <>
      {!mode && <StartScreen />}
      {mode === "grid" && (
        <>
          <GridShot />
          <GunLayer />
        </>
      )}
      {mode === "calculate" && <CalculateScreen />}
    </>
  );
}

export default App;
