import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Categories, CatOptions } from './components/Categories'


function App() {
  return (
    <div>
      <Categories />
      <CatOptions />
    </div>
  );
}

export default App;
