import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/sass/materialize.scss';


const App = () => <h1>Hello, React</h1>;

const el = document.querySelector(".root");

ReactDOM.render(<App />, el);