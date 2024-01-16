//import Alert from "./components/Alert";
//import Button from "./components/Button/Button";
//import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import { FaHeart } from "react-icons/fa";
import Like from "./components/Like";
import Message from "./components/Message";
import UpdateButton from "./components/UpdateButton";
import "./App.css";

function App() {
  return(
    <>
    <Like onClick={()=>(console.log('klik'))}/>
    <Message/>
    <Message/>
    <Message/>
    <UpdateButton/>
    </>
  );
}

export default App;
