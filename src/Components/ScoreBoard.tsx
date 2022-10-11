import { useStore } from "../hooks/useStore";

const ScoreBoard = () => {
  const [hit, total] = useStore((state: any) => [state.hit, state.total]);

  return (
    <div className="score_board">
      <div className="point">
        <span className="prefix">PTS</span>
        <span className="number">5000</span>
      </div>
      <div className="minute">60:00</div>
      <div className="percent">
        <span className="number">{((hit / total) * 100).toFixed(2)}</span>
        <span className="prefix">%</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
