import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let Skiday={
  total:20,
  goal:10
}

const Skidata = (props) =>{
  return (
    <section>
      <div>
        Total : {props.total}
      </div>
      <div>
        Goal : {props.goal}
      </div>
    </section>
  )
}

ReactDOM.render(
  <Skidata total={Skiday.total} goal={Skiday.goal}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
