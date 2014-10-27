var Views = Views || {};

Views.Home = React.createClass({
  handleClick: function(e) {
    e.preventDefault();

    Aviator.navigate('/containers');
  },
  render: function() {
    return (
      <div>
        <a href="/containers" onClick={this.handleClick}>Containers</a>
      </div>
    );
  }
});
