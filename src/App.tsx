import React from "react";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Typography } from "@mui/material";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjAvNE3mI_F4UeA35-iE5laBZup2TOP5s",
  authDomain: "scenario-planner-b872f.firebaseapp.com",
  projectId: "scenario-planner-b872f",
  storageBucket: "scenario-planner-b872f.appspot.com",
  messagingSenderId: "205092984869",
  appId: "1:205092984869:web:6c752e40585b90c58987cc",
  measurementId: "G-XY04XC1D7K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Typography variant="h1">Hello, world!</Typography>
      </div>
    </div>
  );
}

export default App;
