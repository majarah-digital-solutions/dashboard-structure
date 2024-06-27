import { all } from "redux-saga/effects";
// import { analysisSaga } from "~/app/dashboard/analysis/analysisSaga";
export default function* rootSaga() {
  yield all([
    // analysisSaga(),
  ]);
}
