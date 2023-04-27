
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enable or not
  const [ alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message, 
      // 2:30 to 5:30
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' +cls)

    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#062442';
    showAlert("Dark Mode has been Enabled", "Success");
    document.title = "TextUtils - Dark Mode";
    // setInterval(() => {
    //   document.title = "TextUtils is amazing Mode";
    // }, 2500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been Enabled", "Success");
      document.title = "TextUtils - Light Mode";
        }
  }

  return (
    <>
    <Router> 
      <navabr title="TextUtils" aboutText="About Us"></navabr>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}></Navbar> 
      <Alert alert={alert}/>
      {/* togglemode is a function for navbar */}
        <div className="container my-3">
        <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}></TextForm>
            </Route>
        </Switch>
        </div>
     </Router>
    </>
  );
}

export default App;
