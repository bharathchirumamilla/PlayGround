import React from 'react';
import '../styles/nav-styles.css';
import {  Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

export const NavContainer = () => {

  const dispatch = useDispatch();
  const { showpageType } = bindActionCreators(actionCreators, dispatch);


  return(
  <> 
<nav id="navbar" className="nav-container">
  <div className="nav-wrapper">
    
    <div className="logo">
      <a href="/basic"><img src="" alt="icon" style={{height: '60px'}}/></a>
    </div>
    <ul id="menu">
      <li><Link to="basic"  onClick={() => showpageType('basic')}>Basic Component</Link></li>
      <li><Link to="advance" onClick={() => showpageType('advance')}>Advanced Components</Link></li>
      <li><Link to="export" onClick={() => showpageType('exportComponent')}>Exported Components</Link></li>
      <li><Link to="exportForms" onClick={() => showpageType('exportForm')}>Export Forms</Link></li>
    </ul>
  </div>
</nav>

<div className="menuIcon">
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>

<div className="overlay-menu">
  <ul id="menu">
  <li><Link to="basic" onClick={() => showpageType('basic')}>Basic Component</Link></li>
      <li><Link to="advance" onClick={() => showpageType('advance')}>Advanced Components</Link></li>
      <li><Link to="export" onClick={() => showpageType('exportComponent')}>Exported Components</Link></li>
      <li><Link to="exportForms" onClick={() => showpageType('exportForm')}>Export Forms</Link></li>
    </ul>
</div>
</>  
  )
}