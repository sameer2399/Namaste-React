import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 id="heading">
    React Element 1
</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}  
        <h1>Namaste React functional component !</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
 
