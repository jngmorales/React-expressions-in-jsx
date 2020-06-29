import React from "react";
import ReactDOM from "react-dom";

const fName = "Jose";
const lName = "Gonzalez";
const luckyNumber = 27;
ReactDOM.render(
  <div>
    {/* There are different ways to concatenate strings */}
    {/* Example # 1 */}
    <h1>Hello {fName + " " + lName}</h1>

    {/* Example # 2 */}
    <h1>
      Hello {fName} {lName}
    </h1>

    {/* Example # 3 */}
    <h1>Hello {`${fName}  ${lName}`}</h1>

    {/* We can put between the {} a value, */}
    {/* a variable or a js expression, but not a js statement */}
    {/* Expression example */}
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}</p>

    {/* Variable example */}
    <p>Your lucky number is: {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
