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
                    <li style="display: none;"><a href="getting-started.html#download">Download <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#whats-included">What's included <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#whats-included-precompiled">Precompiled <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#whats-included-source">Source code <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#grunt">Compiling CSS and JavaScript <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#grunt-installing">Installing Grunt <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#grunt-commands">Available Grunt commands <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#grunt-troubleshooting">Troubleshooting <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#template">Basic template <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#examples">Examples <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#examples-framework">Using the framework <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#examples-navbars">Navbars in action <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#examples-custom">Custom components <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#examples-experiments">Experiments <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#tools">Tools <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#tools-bootlint">Bootlint <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#community">Community <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#disable-responsive">Disabling responsiveness <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#migration">Migrating from 2.x to 3.0 <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support">Browser and device support <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-browsers">Supported browsers <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie8-ie9">Internet Explorer 8-9 <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie8-respondjs">IE8 and Respond.js <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie8-box-sizing">IE8 and box-sizing <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie8-font-face">IE8 and @font-face <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie-compatibility-modes">IE Compatibility modes <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-ie10-width">IE10 and Windows (Phone) 8 <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-safari-percentages">Safari percent rounding <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-fixed-position-keyboards">Modals, navbars, and virtual keyboards <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-browser-zooming">Browser zooming <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-sticky-hover-mobile">Sticky :hover/:focus on mobile <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-printing">Printing <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-android-stock-browser">Android stock browser <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#support-validators">Validators <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#third-parties">Third party support <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#accessibility">Accessibility <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#license-faqs">License FAQs <small>(Getting Started)</small></a></li>
                    <li style="display: none;"><a href="getting-started.html#translations">Translations <small>(Getting Started)</small></a></li>

                    <li style="display: none;"><a href="css.html#overview">Overview <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#overview-doctype">HTML5 doctype <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#overview-mobile">Mobile first <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#overview-type-links">Typography and links <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#overview-normalize">Normalize.css <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#overview-container">Containers <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid">Grid system <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-intro">Introduction <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-media-queries">Media queries <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-options">Grid options <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-example-basic">Ex: Stacked-to-horizontal <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-example-fluid">Ex: Fluid container <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-example-mixed">Ex: Mobile and desktop <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-example-mixed-complete">Ex: Mobile, tablet, desktop <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-example-wrapping">Ex: Column wrapping <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-responsive-resets">Responsive column resets <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-offsetting">Offsetting columns <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-nesting">Nesting columns <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-column-ordering">Column ordering <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#grid-less">Less mixins and variables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type">Typography <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-headings">Headings <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-body-copy">Body copy <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-inline-text">Inline text elements <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-alignment">Alignment classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-transformation">Transformation classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-abbreviations">Abbreviations <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-addresses">Addresses <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-blockquotes">Blockquotes <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#type-lists">Lists <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code">Code <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code-inline">Inline <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code-user-input">User input <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code-block">Basic block <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code-variables">Variables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#code-sample-output">Sample output <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables">Tables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-example">Basic example <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-striped">Striped rows <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-bordered">Bordered table <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-hover-rows">Hover rows <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-condensed">Condensed table <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-contextual-classNamees">Contextual classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#tables-responsive">Responsive tables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms">Forms <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-example">Basic example <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-inline">Inline form <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-horizontal">Horizontal form <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-controls">Supported controls <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-controls-static">Static control <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-control-focus">Focus state <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-control-disabled">Disabled state <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-control-readonly">Readonly state <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-control-validation">Validation states <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-control-sizes">Control sizing <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#forms-help-text">Help text <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons">Buttons <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons-tags">Button tags <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons-options">Options <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons-sizes">Sizes <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons-active">Active state <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#buttons-disabled">Disabled state <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#images">Images <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#images-responsive">Responsive images <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#images-shapes">Image shapes <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees">Helper classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-colors">Contextual colors <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-backgrounds">Contextual backgrounds <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-close">Close icon <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-carets">Carets <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-floats">Quick floats <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-center">Center content blocks <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-clearfix">Clearfix <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-show-hide">Showing and hiding content <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-screen-readers">Screen reader and keyboard navigation content <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#helper-classNamees-image-replacement">Image replacement <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#responsive-utilities">Responsive utilities <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#responsive-utilities-classNamees">Available classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#responsive-utilities-print">Print classNamees <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#responsive-utilities-tests">Test cases <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#less">Using Less <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#less-bootstrap">Compiling Bootstrap <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#less-variables">Variables <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#less-mixins-vendor">Vendor mixins <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#less-mixins-utility">Utility mixins <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#sass">Using Sass <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#sass-contents">What's included <small>(CSS)</small></a></li>
                    <li style="display: none;"><a href="css.html#sass-installation">Installation <small>(CSS)</small></a></li>


                    <li style="display: none;"><a href="components.html#glyphicons">Glyphicons <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#glyphicons-glyphs">Available glyphs <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#glyphicons-how-to-use">How to use <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#glyphicons-examples">Examples <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns">Dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns-example">Example <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns-alignment">Alignment <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns-headers">Headers <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns-divider">Divider <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#dropdowns-disabled">Disabled menu items <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups">Button groups <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-single">Basic example <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-toolbar">Button toolbar <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-sizing">Sizing <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-nested">Nesting <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-vertical">Vertical variation <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-groups-justified">Justified button groups <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-dropdowns">Button dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-dropdowns-single">Single button dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-dropdowns-split">Split button dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-dropdowns-sizing">Sizing <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#btn-dropdowns-dropup">Dropup variation <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups">Input groups <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-basic">Basic example <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-sizing">Sizing <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-checkboxes-radios">Checkbox and radios addons <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-buttons">Button addons <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-buttons-dropdowns">Buttons with dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#input-groups-buttons-segmented">Segmented buttons <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav">Navs <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav-tabs">Tabs <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav-pills">Pills <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav-justified">Justified <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav-disabled-links">Disabled links <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#nav-dropdowns">Using dropdowns <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar">Navbar <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-default">Default navbar <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-brand-image">Brand image <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-forms">Forms <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-buttons">Buttons <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-text">Text <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-links">Non-nav links <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-component-alignment">Component alignment <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-fixed-top">Fixed to top <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-fixed-bottom">Fixed to bottom <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-static-top">Static top <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#navbar-inverted">Inverted navbar <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#breadcrumbs">Breadcrumbs <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#pagination">Pagination <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#pagination-default">Default pagination <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#pagination-pager">Pager <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#labels">Labels <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#badges">Badges <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#jumbotron">Jumbotron <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#page-header">Page header <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#thumbnails">Thumbnails <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#thumbnails-default">Default example <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#thumbnails-custom-content">Custom content <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#alerts">Alerts <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#alerts-examples">Examples <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#alerts-dismissible">Dismissible alerts <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#alerts-links">Links in alerts <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress">Progress bars <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-basic">Basic example <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-label">With label <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-alternatives">Contextual alternatives <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-striped">Striped <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-animated">Animated <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#progress-stacked">Stacked <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#media">Media object <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#media-default">Default media <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#media-list">Media list <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#list-group">List group <small>(Components)</small></a></li>
                    <li style="display: none;"><a href="components.html#list-group-basic">Basic example <small>(Components)</small></a></li>
                  
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