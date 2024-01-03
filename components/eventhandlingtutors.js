import React from "react";

function Eventhand() {
  function Handle() {
    alert("button clicked");
  }
  return (
    <div>
      <button onClick={Handle}>click me</button>
    </div>
  );
}

export default Eventhand;
