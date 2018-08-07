import { takeEvery, put/*, call*/ } from 'redux-saga/effects';

export function* toggleModal(value) {
  yield put({ type: 'TOGGLE.MODAL', value: value.value});
}

export function* watchToggleModal() {
  yield takeEvery('WATCH.TOGGLE.MODAL', toggleModal);
}

export default function* rootSaga() {
  yield [
    watchToggleModal()
  ];
}
