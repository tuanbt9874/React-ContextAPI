import React, { Component } from 'react';
import {ThemeContext} from '../context/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;
  // We will reference to ThemeContext that we create
  // This ThemeContext will figure out a near context provider

  render() { 
    let {isLightTheme, light, dark} = this.context;
    let theme = isLightTheme ? light : dark;
    return ( 
      <nav style={{background: theme.bg, color: theme.syntax}} >
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;