import ReactDOM from 'react-dom';

const App = () => <h1>Hello, React</h1>;

const el = document.querySelector(".root");

ReactDOM.render(<App />, el);