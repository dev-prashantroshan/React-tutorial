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

  const toggleMode = (colorMode) => {
    if (typeof colorMode === 'string' && colorMode) {
      setMode(colorMode);
      // showAlert(`${colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode has been enabled`, 'success');
    } else {
      // Toggle between light and dark
      const newMode = mode === 'light' ? 'dark' : 'light';
      setMode(newMode);
      // showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode has been enabled`, 'success');
    }
  };

  return (
    <div className={mode}>
      <Navbar theme={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextBox showAlert={showAlert} theme={mode} />
        {/* <About theme={mode} /> */}
      </div>
    </div>
  );
}

export default App;
