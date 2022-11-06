import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React, {useState} from 'react'

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
      var btn_color = document.body.getElementsByClassName('btn btn-primary');
      for(var i=0;i<btn_color.length;i++){
        btn_color[i].style.backgroundColor = 'blue';
        btn_color[i].style.border = '1px solid blue';
      }
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
    
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeText={ToggleModeText}/>
    <Alert alertText={alert} />
    <div className="container my-3">
    <TextForm heading="Enter your text to analyze" showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
