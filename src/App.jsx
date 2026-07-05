
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert'



function App() {
const [mode,setMode] = useState('light');
const [alert , setAlert] = useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg : message,
    type : type
  });

  setTimeout(()=>{
   setAlert(null);
  },1500)

}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    document.body.style.color = "white";
    document.title="TextUtils - Dark Mode"
    showAlert("Dark mode has been enabled","success");
  }else if(mode === 'green'){
     setMode('')
  }else{
    setMode('light');
    document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title="TextUtils - Light Mode"
       showAlert("Light mode has been enabled","success");
  }
}



  return (
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
    <div className="container">
      <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}></TextForm>
    </div>
    </>
  )
}

export default App
