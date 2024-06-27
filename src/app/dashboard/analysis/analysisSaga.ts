import { put, select, takeLatest, call } from 'redux-saga/effects';
import { setData, fetchDataFailed, setDataEmpty, nextPage } from './analysisSlice';
import { fetchData } from '~/service/fetchData';
import { Queries } from '~/graphql';


function* fetchDataSaga() {
    const { page, limit, filter: { startDate, endDate } } = yield select((state: any) => state.analysisSlice);
let variables:any={}
if (startDate) {
  variables.date = {
    startDate: startDate,
    endDate: endDate
  }
}

    try {
        const { users , views ,reports,vehicles,actualViews} = yield call(fetchData, {
            variables
            , query: Queries
        });

        yield put(setData({users ,views ,reports,vehicles,actualViews}));
    } catch (error: any) {
        console.log("🚀 ~ function*fetchDataSaga ~ error:33", error)
        yield put(fetchDataFailed(error.message));
    }
}

export const analysisSaga = function* Saga() {
    yield takeLatest('analysisSlice/fetchData', fetchDataSaga);
    yield takeLatest('analysisSlice/setFilter', fetchDataSaga);
};