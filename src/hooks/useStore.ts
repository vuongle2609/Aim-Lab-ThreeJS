import create from "zustand";

const TOTAL_BALLS = 16;
const initalBalls = (() => {
  let visibleCount = 4;
  let ballRow = 0;
  let ballCol = 0;

  return [...Array(TOTAL_BALLS).keys()].map((item, index) => {
    if (index) ballCol += 0.7;
    if (index && index % 4 === 0) {
      ballRow -= 0.6;
      ballCol = 0;
    }
    let visible = false;

    if (visibleCount) {
      if (Math.ceil(Math.random() * 2) === 1) {
        visible = true;
        visibleCount -= 1;
      }

      if (visibleCount && index >= TOTAL_BALLS - 5) {
        visible = true;
        visibleCount -= 1;
      }
    }

    return {
      index,
      x: ballCol,
      y: ballRow,
      visible: visible,
    };
  });
})();

export const useStore = create((set) => ({
  balls: initalBalls,
  clickBall: (indexClicked: number) => {
    set((prev: any) => {
      let hasVisibleReplace = false;

      return {
        balls: prev.balls.map((item: any, index: number) => {
          let visible = item.visible;

          if (!hasVisibleReplace && !item.visible && index !== indexClicked) {
            if (Math.ceil(Math.random() * 5) === 1) {
              hasVisibleReplace = true;
              visible = true;
            }

            if (!hasVisibleReplace && index >= TOTAL_BALLS - 5) {
              hasVisibleReplace = true;
              visible = true;
            }
          }

          return index === indexClicked
            ? {
                ...item,
                visible: false,
              }
            : {
                ...item,
                visible,
              };
        }),
      };
    });
  },
}));