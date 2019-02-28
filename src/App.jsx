import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
  constructor(props)
  {
      super(props);
  }
  render()
  {
    return (<span>kek</span> );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
module.hot.accept();