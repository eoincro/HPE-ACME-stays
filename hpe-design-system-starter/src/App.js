import React from 'react';
import {Grommet} from 'grommet';
import './App.css';
import StayCardList from './Components/StayCardList';
import NavBar from './Components/NavBar';



const theme = {
    global: {
        colors: {
            brand: '#FFFFFF', // Change this to your desired brand color
        },
    },
};

function App() {
  return (
      <Grommet theme={theme} full>
          <NavBar />
            <h2>Available stays</h2>
              <StayCardList />
      </Grommet>
  );
}

export default App;