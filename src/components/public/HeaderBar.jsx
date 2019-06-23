import React, { Component } from 'react'

class HeaderBar extends Component {
  render() {
    return (
      <header className="navbar navbar-fixed-top bs-docs-nav" id="top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="index.html" className="navbar-brand">SCHOLAR</a>
          </div>
          <nav id="bs-navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
               
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown" href="css.html">CSS</a>

                <ul className="dropdown-menu">
                  <li><a href="css.html#overview">Overview</a></li>
                   <li><a href="css.html#sass">Using Sass</a></li>
                </ul>
              </li>
               
            </ul>
           

              <ul className="nav navbar-nav navbar-right visible-sm">
                <li><a href="javascript.html" target="_blank" title="Open New Tab"><span className="glyphicon glyphicon-arrow-up"></span></a></li>
              </ul>
              
        </nav>
      </div>
    </header>
        )
      }
    }
export default    HeaderBar ;