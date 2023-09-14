import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement("div", {id: "child1"},[ 
            React.createElement("h1", {}, "This is namaste react" ),
            React.createElement("h2",{},"Iam an h2 tag")
        ]   
         ),
         React.createElement("div", {id: "child2"},[ 
            React.createElement("h1", {}, "Iam an H1 tag" ),
            React.createElement("h2",{},"Iam an h2 tag")
        ]   
         )   
    ]
    );

        //add a react element div with id root
        

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);  