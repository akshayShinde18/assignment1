
import { useState } from 'react';
import './App.css';
import Form from './Form'


function App() {

  const [newData,setNewData]=useState("")
  return (
    <div className="App">
      <h3>Login Form</h3>
      <h4>{newData}</h4>
      <Form changeData={(newData)=>setNewData(newData)}/>
    </div>
  );
}

export default App;
