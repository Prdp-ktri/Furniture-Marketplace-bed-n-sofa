import React, { useEffect, useState } from "react";

function ViewProducts() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  console.log(details);

  return (
    <div>
      {/* <div>
        <Link to={"/view"}>Displaying Product JSON</Link>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Product Name:</th>
            <th>Brand Name:</th>
            <th>Product Category:</th>
            <th>Product Description:</th>
            <th>Product Images:</th>
            <th>Product Size:</th>
            <th>MRP:</th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map((v, k) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.productName}</td>
                <td>{v.brandName}</td>
                <td>{v.productCat}</td>
                <td>{v.productDesc}</td>
                <td>{v.productImgs}</td>
                <td>{v.productSize}</td>
                <td>{v.mrp}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewProducts;
