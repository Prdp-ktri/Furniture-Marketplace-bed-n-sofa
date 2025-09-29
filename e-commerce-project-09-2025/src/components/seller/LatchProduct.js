import React, { useState } from "react";

function LatchProduct() {
  const [latchedProducts, setLatchedProducts] = useState([]);
  return (
    <div>
      <div
        style={{
          zIndex: "2",
          width: "250px",
          height: "180px",
          borderRadius: "15px",
          position: "absolute",
          top: "50vh",
          left: "50vw",
          border: "2px solid gray",
          backgroundColor: "teal",
          padding: "25px",
        }}
      >
        <form>
          Enter the Quanity: <input type="number" name="" id="" />
          <br />
          Your Selling Price: <input type="number" name="" id="" />
          <br />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              margin: "5px",
              marginLeft: "140px",
            }}
          >
            Latch
          </button>
        </form>
      </div>
    </div>
  );
}

export default LatchProduct;
