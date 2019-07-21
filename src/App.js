import React from 'react';
import data from './data';




// App components
import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';




function App() {
  return (
    <div className="App">
      <Header />
      <Gallery data={ data }/>
    </div>
  );
}

export default App;
