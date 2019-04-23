import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
const Abc = () => <div>Sub Component</div>;
class Welcome extends React.Component {
  render() {
    return (
      <Router>
        <div>
          hellll
          <Route path={`${this.props.match.url}/abcd`} component={Abc} />
        </div>
      </Router>
    );
  }
}

export default { Welcome: Welcome };
