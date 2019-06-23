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
            <a href="index.html" className="navbar-brand">Bootstrap</a>
          </div>
          <nav id="bs-navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown" href="getting-started.html">Getting started</a>
                <ul className="dropdown-menu">
                  <li><a href="getting-started.html">Overview</a></li>
                  <li><a href="getting-started.html#download">Download</a></li>
                  <li><a href="getting-started.html#whats-included">What's included</a></li>
                  <li><a href="getting-started.html#grunt">Compiling CSS and JavaScript</a></li>
                  <li><a href="getting-started.html#template">Basic template</a></li>
                  <li><a href="getting-started.html#examples">Examples</a></li>
                  <li><a href="getting-started.html#tools">Tools</a></li>
                  <li><a href="getting-started.html#community">Community</a></li>
                  <li><a href="getting-started.html#disable-responsive">Disabling responsiveness</a></li>
                  <li><a href="getting-started.html#migration">Migrating from 2.x to 3.0</a></li>
                  <li><a href="getting-started.html#support">Browser and device support</a></li>
                  <li><a href="getting-started.html#third-parties">Third party support</a></li>
                  <li><a href="getting-started.html#accessibility">Accessibility</a></li>
                  <li><a href="getting-started.html#license-faqs">License FAQs</a></li>
                  <li><a href="getting-started.html#translations">Translations</a></li>
                </ul>
              </li>
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown" href="css.html">CSS</a>

                <ul className="dropdown-menu">
                  <li><a href="css.html#overview">Overview</a></li>
                  <li><a href="css.html#grid">Grid system</a></li>
                  <li><a href="css.html#type">Typography</a></li>
                  <li><a href="css.html#code">Code</a></li>
                  <li><a href="css.html#tables">Tables</a></li>
                  <li><a href="css.html#forms">Forms</a></li>
                  <li><a href="css.html#buttons">Buttons</a></li>
                  <li><a href="css.html#images">Images</a></li>
                  <li><a href="css.html#helper-classNamees">Helper classNamees</a></li>
                  <li><a href="css.html#responsive-utilities">Responsive utilities</a></li>
                  <li><a href="css.html#less">Using Less</a></li>
                  <li><a href="css.html#sass">Using Sass</a></li>
                </ul>
              </li>
              <li className="active">
                <a className="dropdown-toggle" data-toggle="dropdown" href="components.html">Components</a>
                <ul className="dropdown-menu">
                  <li><a href="components.html">Overview</a></li>
                  <li><a href="components.html#glyphicons">Glyphicons</a></li>
                  <li><a href="components.html#dropdowns">Dropdowns</a></li>
                  <li><a href="components.html#btn-groups">Button groups</a></li>
                  <li><a href="components.html#btn-dropdowns">Button dropdowns</a></li>
                  <li><a href="components.html#input-groups">Input groups</a></li>
                  <li><a href="components.html#nav">Navs</a></li>
                  <li><a href="components.html#navbar">Navbar</a></li>
                  <li><a href="components.html#breadcrumbs">Breadcrumbs</a></li>
                  <li><a href="components.html#pagination">Pagination</a></li>
                  <li><a href="components.html#labels">Labels</a></li>
                  <li><a href="components.html#badges">Badges</a></li>
                  <li><a href="components.html#jumbotron">Jumbotron</a></li>
                  <li><a href="components.html#page-header">Page header</a></li>
                  <li><a href="components.html#thumbnails">Thumbnails</a></li>
                  <li><a href="components.html#alerts">Alerts</a></li>
                  <li><a href="components.html#progress">Progress bars</a></li>
                  <li><a href="components.html#media">Media object</a></li>
                  <li><a href="components.html#list-group">List group</a></li>
                  <li><a href="components.html#panels">Panels</a></li>
                  <li><a href="components.html#responsive-embed">Responsive embed</a></li>
                  <li><a href="components.html#wells">Wells</a></li>
                </ul>
              </li>
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown" href="javascript.html">JavaScript</a>
                <ul className="dropdown-menu">
                  <li><a href="javascript.html#js-overview">Overview</a></li>
                  <li><a href="javascript.html#transitions">Transitions</a></li>
                  <li><a href="javascript.html#modals">Modal</a></li>
                  <li><a href="javascript.html#dropdowns">Dropdown</a></li>
                  <li><a href="javascript.html#scrollspy">Scrollspy</a></li>
                  <li><a href="javascript.html#tabs">Tab</a></li>
                  <li><a href="javascript.html#tooltips">Tooltip</a></li>
                  <li><a href="javascript.html#popovers">Popover</a></li>
                  <li><a href="javascript.html#alerts">Alert</a></li>
                  <li><a href="javascript.html#buttons">Button</a></li>
                  <li><a href="javascript.html#collapse">Collapse</a></li>
                  <li><a href="javascript.html#carousel">Carousel</a></li>
                  <li><a href="javascript.html#affix">Affix</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input id="search-input" type="text" className="form-control" placeholder="Search">
                  <ul id="search-list" className="dropdown-menu">
                    <li style="display: none;"><a href="css.html#grid-less">Less mixins and variables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type">Typography <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-headings">Headings <small>(CSS)</small></a></li>
                  
                  </ul>
            </div>
          </form>

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