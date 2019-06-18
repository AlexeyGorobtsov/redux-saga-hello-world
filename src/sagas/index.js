import { takeLatest } from "redux-saga/effects";

function* handleClockAction({ type }) {
  console.log("Pushed this action to handleClockAction: ", type);
}

export function* rootSaga() {
  yield takeLatest(
    ["start-clock", "pause-clock", "rewind-clock"],
    handleClockAction
  );
}
