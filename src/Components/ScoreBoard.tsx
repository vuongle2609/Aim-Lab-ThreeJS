import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

const ScoreBoard = () => {
  const [time, setTime] = useState<any>({
    seconds: 0,
    minutes: 0,
  });
  const [hit, total, point] = useStore((state: any) => [
    state.hit,
    state.total,
    state.point,
  ]);

  const percentHitRaw = (hit / total) * 100;
  const percentHit =
    percentHitRaw === 100 ? percentHitRaw : percentHitRaw.toFixed(2);

  useEffect(() => {
    var count = 60;
    var counter = setInterval(timer, 1000);

    function timer() {
      count = count - 1;
      if (count == -1) {
        clearInterval(counter);
        return;
      }

      var seconds = count % 60;
      var minutes = Math.floor(count / 60);
      minutes %= 60;

      setTime({
        seconds,
        minutes,
      });
    }

    return () => {
      clearInterval(counter);
    };
  }, []);

  return (
    <div className="score_board">
      <div className="point">
        <span className="prefix">PTS</span>
        <span className="number">{point}</span>
      </div>
      <div className="minute">
        {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
        {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </div>
      <div className="percent">
        <span className="number">{percentHit === "NaN" ? 0 : percentHit}</span>
        <span className="prefix">%</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
