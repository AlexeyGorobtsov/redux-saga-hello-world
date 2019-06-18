export const reducer = (currentState = { milliseconds: 0 }, action) => {
    switch (action.type) {
        case 'reset-clock':
            return { ...currentState, milliseconds: 0 };
        case 'increment-milliseconds':
            return {
              ...currentState,
              milliseconds: currentState.milliseconds + 100
            };
        case 'decrement-milliseconds':
            if (!currentState.milliseconds) { return currentState }
            return {
                ...currentState,
                milliseconds: currentState.milliseconds - 100
            };
        default:
            return currentState
    }
};