import { useState } from 'react';
import './App.css';
// import About from './components/pages/About';
import Navbar from './components/primary/Navbar';
import TextBox from './components/text/TextBox';
import Alert from './components/primary/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Navbar theme={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextBox showAlert={showAlert} theme={mode} />
        {/* <About theme={mode} /> */}
      </div>
    </>
  );
}

export default App;
