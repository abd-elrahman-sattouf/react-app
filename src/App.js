import React from 'react';
import './App.css';
import Counter from './hooks/useStat/counter';
import { Counter2, Counter3 }from'./hooks/useStat/counter';
import Toggle from './hooks/useStat/toggle';
import { Toggle2 } from './hooks/useStat/toggle';

function App() {
  return (
    <div className="App">
      <h1>react</h1>
      {/* <Counter />
      <Counter2 />
      <Counter3 /> */}
      <Toggle />
      <Toggle2 />
    </div>
  );
}

export default App;