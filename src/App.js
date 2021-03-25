import React from "react";
import './App.css';
import Child from './Compenents/Child';
import { TransactionProvider } from './transContext'

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <Child></Child>
      </TransactionProvider>

    </div>
  );
}

export default App;
