const MAX_RADIUS = 40;

let hands = [
    { ms: 144000, maxTicks: 1 },
    { ms: 36000, maxTicks: 4 },
    { ms: 12000, maxTicks: 3 },
    { ms: 2000, maxTicks: 6 },
    { ms: 400, maxTicks: 5 },
    { ms: 100, maxTicks: 4 },

];

export const STROKE_WIDTH = MAX_RADIUS / hands.length;

hands = hands.map((hand, i) => {
   const radius = STROKE_WIDTH * (hands.length - i);

   return {
       ...hand,
       radius,
       circumference: 2 * Math.PI * radius,
       alpha: 1 - i / hands.length
   }
});

export const CLOCK_HANDS = hands;
export const MINIMUM_MS = 100;