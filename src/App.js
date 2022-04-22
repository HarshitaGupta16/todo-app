import './App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import DisplayItem from './components/DisplayItem';
import { useState } from 'react';
import UpdateItem from './components/UpdateItem';

function App() {
  const [isEdit, setIsEdit] = useState(false)
  const [idToBeEdited, setIdToBeEdited] = useState('')
  const [inputValue, setInputValue] = useState('')

  const isEditHandler = (isEditInput, inputEditId) => {
    setIsEdit(isEditInput)
    setIdToBeEdited(inputEditId)
  }
  const addItemInputHandler = (item) => {
    setInputValue(item)
  }
  
  return (
    // <Provider store={store}>
    <>
      <Header />
      <AddItem addItemInputHandler={addItemInputHandler}/>
      <DisplayItem isEditHandler={isEditHandler}/>
      <UpdateItem isEdit={isEdit} isEditHandler={isEditHandler} idToBeEdited={idToBeEdited} inputValue={inputValue}/>
      </>
    // </Provider>
  );
}

export default App;
