export const resetClock = () => ({ type: "reset-clock" });
export const incrementMilliseconds = () => ({ type: "increment-milliseconds" });
export const decrementMilliseconds = () => ({ type: "decrement-milliseconds" });

// saga actions
export const startClock = () => ({ type: "start-clock" });
export const pauseClock = () => ({ type: "pause-clock" });
export const rewindClock = () => ({ type: "rewind-clock" });
