import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} 
                  firstName={"Jane"} 
                  currentAge={45} 
                  hair={"Black"}/>
      <PersonCard lastName={"Smith"} 
                  firstName={"John"} 
                  currentAge={88} 
                  hair={"Brown"}/>
      <PersonCard lastName={"Fillmore"} 
                  firstName={"Millard"} 
                  currentAge={50} 
                  hair={"Brown"}/>
      <PersonCard lastName={"Smith"} 
                  firstName={"Maria"} 
                  currentAge={62} 
                  hair={"Brown"}/>
    </div>
  );
}

export default App;
