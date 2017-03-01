var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <h1>Get Weather</h1>
        </div>
        <div>
          <input type="text" ref="location" placeholder="Enter City Name"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
