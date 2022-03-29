import { delay, put, takeEvery } from "redux-saga/effects";

function* increment() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* decrement() {
  yield delay(1000);
  yield put({ type: "DECREMENT" });
}

function* watchCounterSaga() {
  yield takeEvery("INCREASE", increment);
  yield takeEvery("DECREASE", decrement);
}

export default watchCounterSaga;
