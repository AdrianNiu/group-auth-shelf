import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* addItem(action) {
  try {
    yield axios.post('/api/shelf', action.payload);

 
    // hopefully the type below will go get the shelf items from the database again.
    yield put({ type: 'FETCH_SHELF'});
  } catch (error) {
    console.log('post item to server failed', error);
  }
}

function* addItemSaga() {
  yield takeLatest('ADD_ITEM', addItem);
}

export default addItemSaga;
