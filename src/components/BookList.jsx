import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
// ! Context API: Clean and easy way to share state between difference components
// ! without pass props down
// ! Hook allow to do with bunch of stuff inside functional component that we normally only do inside class component
// ! Global state for sharing data

// Note: Context is design to share data that can be considered "global" for a tree of React
// Note: components, such as the current authenticated user, theme, preferred languages, => global data
// Note: Answer question: Is data that I want to share global and it is used in several child components => YES => use it
// Note: We have 2 ways for accessing context value : 
// Note: 1- Using context-type (used for only class) 
// Note: 2- Using consumer (both class and function)                                                                                                //  => NO  => use component composition

class BookList extends Component {
  render() {
    //  Another way used
    // Note: Child in Context Consumer should be a function (not a component)
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContext;
              return (
                <div
                  className="book-list"
                  style={{ background: theme.bg, color: theme.syntax }}
                >
                  <div onClick={toggleAuth}>{isAuthenticated ? "Log in" : "Log out"}</div>
                  <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>
                      the name of the wind
                    </li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                  </ul>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}



export default BookList;
