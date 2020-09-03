import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function City(props) {
  return <h1>{props.name}</h1>
}

function App() {
  return (
    <div>
      <City name="City sydney" />
      <City name="City Melbourne" />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


