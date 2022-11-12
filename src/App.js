import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import React, {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  const [ToggleModeText,setToggleModeText] = useState('Enable');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (meassage,type) => {
    setAlert({
      msg: meassage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setToggleModeText('Disable');
      var btn_color = document.body.getElementsByClassName('btn btn-primary');
      for(var i=0;i<btn_color.length;i++){
        btn_color[i].style.backgroundColor = 'green';
        btn_color[i].style.border = '1px solid green';
      }
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      setToggleModeText('Enable');
      var btn_Color = document.body.getElementsByClassName('btn btn-primary');
      for(var j=0;j<btn_Color.length;j++){
        btn_Color[j].style.backgroundColor = 'blue';
        btn_Color[j].style.border = '1px solid blue';
      }
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
    
  }

  return (
    <>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeText={ToggleModeText}/>
    <Alert alertText={alert} />
    <div className="container my-3">
    <TextForm heading="Enter your text to analyze" showAlert={showAlert}/>
    </div> */}
    <Router>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} toggleModeText={ToggleModeText}/>
    <Alert alertText={alert} />
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm heading="Enter your text to analyze" showAlert={showAlert} />}/>
        
      <Route exact path="/about" element={<About />}/>
        
    </Routes>    
    </div>
    </Router>
    </>
  );
}

export default App;
