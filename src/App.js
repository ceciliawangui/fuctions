import React from "react";
//import "../src/App.css"
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import info from "./components/Data";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main Data1 = {Data.Data1} Data2 ={Data.data2} Data3 ={Data.data3}  />
    </div>
  );
  }

export default App;