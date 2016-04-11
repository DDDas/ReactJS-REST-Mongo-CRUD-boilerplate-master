import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <nav>
        <div>
          <ul>
            <li><Link to='/orders/create'>Create</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;