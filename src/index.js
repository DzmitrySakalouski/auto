import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWyylcLEZVGd5D9u835NTq4HZhdJAElQ4",
  authDomain: "autostudio-fdfd0.firebaseapp.com",
  databaseURL: "https://autostudio-fdfd0-default-rtdb.firebaseio.com",
  projectId: "autostudio-fdfd0",
  storageBucket: "autostudio-fdfd0.appspot.com",
  messagingSenderId: "201480036622",
  appId: "1:201480036622:web:dd43f43da302b128ecb75f",
  measurementId: "G-8GS6L5HNE4",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
