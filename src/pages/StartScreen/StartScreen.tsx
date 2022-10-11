import logo from "../../assets/images/logo.png";
import { useStore } from "../../hooks/useStore";
import "./index.scss";

const StartScreen = () => {
  const [setMode] = useStore((state: any) => [state.setMode]);
  return (
    <div className="StartScreen">
      <div>
        <img src={logo} alt="" />
        <button className="grid_shot" onClick={() => setMode("grid")}>
          GridShot
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
