import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

// This class is store value for sharing
class ThemeConextProvider extends Component {
  state = {
    // variable to for checking theme
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
    // all value for sharing between difference components
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeConextProvider;
