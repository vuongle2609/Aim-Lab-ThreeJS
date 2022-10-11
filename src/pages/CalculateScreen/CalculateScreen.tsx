import { useStore } from "../../hooks/useStore";
import "./index.scss";

const CalculateScreen = () => {
  const [hit, total, point, resetGame, setMode] = useStore((state: any) => [
    state.hit,
    state.total,
    state.point,
    state.resetGame,
    state.setMode,
  ]);

  const percentHitRaw = (hit / total) * 100;
  const percentHit = percentHitRaw.toFixed(0);

  return (
    <div className="CalculateScreen">
      <div>
        <h1>Score</h1>

        <h3>Point</h3>
        <div>{point}</div>

        <h3>Accuracy</h3>
        <div>{percentHit}%</div>

        <button onClick={() => resetGame()}>Home</button>
      </div>
    </div>
  );
};

export default CalculateScreen;
