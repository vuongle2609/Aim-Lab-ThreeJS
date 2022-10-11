import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

const ScoreBoard = () => {
  const [time, setTime] = useState<any>({
    seconds: 60,
    minutes: 0,
  });
  const [hit, total, point, countDown, setCountDown, setMode] = useStore(
    (state: any) => [
      state.hit,
      state.total,
      state.point,
      state.countDown,
      state.setCountDown,
      state.setMode,
    ]
  );

  const percentHitRaw = (hit / total) * 100;
  const percentHit =
    percentHitRaw === 100 ? percentHitRaw : percentHitRaw.toFixed(2);

  useEffect(() => {
    let count = 3;
    let counter = setInterval(timer, 1000);

    function timer() {
      count = count - 1;
      if (count == -1) {
        clearInterval(counter);
        return;
      }
      let seconds = count % 60;

      setCountDown(seconds);
    }

    return () => {
      clearInterval(counter);
    };
  }, []);

  useEffect(() => {
    if (!countDown) {
      let count = 60;
      let counter = setInterval(timer, 1000);

      function timer() {
        count = count - 1;
        if (count == -1) {
          clearInterval(counter);
          return;
        }

        let seconds = count % 60;
        let minutes = Math.floor(count / 60);
        minutes %= 60;

        setTime({
          seconds,
          minutes,
        });
      }

      return () => {
        clearInterval(counter);
      };
    }
  }, [countDown]);

  useEffect(() => {
    if (!time.seconds) {
      setMode("calculate");
    }
  }, [time.seconds]);

  return (
    <>
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
          <span className="number">
            {percentHit === "NaN" ? 0 : percentHit}
          </span>
          <span className="prefix">%</span>
        </div>
      </div>
      {countDown && <div className="count_down">{countDown}</div>}
    </>
  );
};

export default ScoreBoard;
