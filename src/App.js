import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import React,{useState} from 'react';
import TextBox from './Components/Textbox';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message: message ,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled','success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode is enabled','success');
    }
  }

  return (
    <>
    <Navbar title = "Text Utils" p1 = "Home" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
        <TextBox/>
    </div>
    </>
  );
}

export default App;