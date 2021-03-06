import React, {useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../scss/index.scss";
/*
class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <button className="btn-change-theme" onClick={toggleTheme}>
        Change Theme
      </button>
    );
  }
}
*/

const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return ( 
    <button className="btn-change-theme" onClick={toggleTheme}>
        Change Theme
    </button>
   );
}
 


export default ThemeToggle;
