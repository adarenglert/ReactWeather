var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink ActiveClassName="active"  activeStyle={{fontWeight: 'bold'}} to="/">Get Weather</IndexLink>
      <Link to="/about" ActiveClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" ActiveClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports= Nav;
