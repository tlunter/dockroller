import React from 'react';
import Menu from 'components/menu.jsx';
import Page from 'page.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <Page />
      </div>
    );
  }
});

export default App;
