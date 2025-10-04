import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useNetworkStatus from "react-use-network-status";

function App() {
  const isOnline = useNetworkStatus();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Network Status Demo</h1>
      <p>You are currently: 
        <strong style={{ color: isOnline ? "green" : "red" }}>
          {isOnline ? " Online ✅" : " Offline ❌"}
        </strong>
      </p>
    </div>
  );
}

export default App;
