var Components = Components || {};

Components.Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li><a href="/" className="navigate">Home</a></li>
          <li><a href="/containers" className="navigate">Containers</a></li>
          <li><a href="/launch_objects" className="navigate">Launch Objects</a></li>
        </ul>
      </div>
    );
  }
});
