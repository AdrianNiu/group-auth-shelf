import React from 'react';
import InputForm from '../InputForm/InputForm';

import ShelfPage from '../ShelfPage/ShelfPage'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'




const InfoPage = () => (
  <div>
    <p>
      Shelf Page
      <ShelfPage />
    </p>




    <p>to delete: please send the item_id and user_id in the action payload object</p>

    <InputForm />

  </div>

);




export default InfoPage;
