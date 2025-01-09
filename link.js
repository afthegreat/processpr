import React from "react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* Create a link to another page/component */}
      <Link to="/sales">Go to About Page</Link>
    </div>
  );
};

export default MyComponent;
