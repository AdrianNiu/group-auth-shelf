import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* shelfSaga() {
    yield takeEvery('FETCH_SHELF', fetchShelfSaga);
}


function* fetchShelfSaga() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data });
        console.log('in fetchShelfSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchMovieSaga', error);
    }
}




export default shelfSaga;