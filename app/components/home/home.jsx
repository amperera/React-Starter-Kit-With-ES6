import React from 'react';
import Nav from 'topNav';
import mainContent from 'homeContent';

export default class home extends React.Component {

  render() {
    return (
      <div>
        <Nav></Nav>
        {this.props.children || <mainConten></mainConten>}
      </div>
    );
  }
}
