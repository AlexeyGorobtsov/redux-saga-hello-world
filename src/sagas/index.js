import {takeLatest, delay} from 'redux-saga/effects';
import {call, put} from 'redux-saga/effects';

import {MINIMUM_MS} from '../config';
import {decrementMilliseconds, incrementMilliseconds} from "../actions";

function* handleClockAction({type}) {
    if (type === 'start-clock') {
        yield call(runClockForwards)
    } else if (type === 'rewind-clock') {
        yield call(runClockBackwards)
    }
}

function* runClockForwards() {
  while (true) {
      yield delay(MINIMUM_MS);
      yield put(incrementMilliseconds())
  }
}

export function* rootSaga() {
    yield takeLatest(
        ["start-clock", "pause-clock", "rewind-clock"],
        handleClockAction
    );
}

function* runClockBackwards() {
    while(true) {
        yield delay(MINIMUM_MS);
        yield put(decrementMilliseconds())
    }
}
