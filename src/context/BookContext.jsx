// this is used hook for creating context
import React, { createContext, useState } from 'react';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books , setBook] = useState([
        {title: "What's love", id : 1},
        {title: "What's hate", id : 2},
        {title: "Hello", id : 3},
        {title: "Google", id : 4},
    ]);
    console.log("Context " ,books);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;