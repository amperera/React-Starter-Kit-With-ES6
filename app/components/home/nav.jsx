import React from 'react';

export default class Nav extends React.Component{

  render(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <ul className="nav navbar-nav">
         <li className="active"><a href="#/">Home <span className="sr-only">(current)</span></a></li>
         <li><a href="#/about">About</a></li>
         </ul>
        </div>
      </nav>
      </div>
    )
  }
}
