
import './App.css';
import React from 'react'; // Import React
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; // Import BrowserRouter
import Posts from './components/Posts/Posts';
import Update from './components/update';
import Form from './components/form';
import axios from 'axios';

function App() 
  
{
  const onChangeHandler = (event) => {
    console.log(event);
  };

  return (
    <Router> {/* Wrap  components with Router */}
      <div style={{ marginTop: '30px' }}>
        {/* Render  components */}
        {/* <Form /> */}
        {/* <Posts /> */}
        {/* <Update /> */}

        <Routes>
          <Route path ='/' element={<Form/>} />
          <Route path='/update/:formId' element={<Update/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
