var Views = Views || {};

Views.App = React.createClass({
  render: function() {
    return (
      <div>
        <Views.Menu />
        <Views.Page />
      </div>
    );
  }
});
