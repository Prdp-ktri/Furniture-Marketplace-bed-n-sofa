import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditProductDetails() {
  const [brandName, setBrandName] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImgs, setProductImgs] = useState([]);
  const [productSize, setProductSize] = useState("");
  const [mrp, setMrp] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/products/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setBrandName(data.brandName);
        setProductCat(data.productCat);
        setProductName(data.productName);
        setProductDesc(data.productDesc);
        setProductImgs(data.productImgs);
        setProductSize(data.productSize);
        setMrp(data.mrp);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading product...!</h2>;
  }

  const handleUpdatedData = (e) => {
    e.preventDefault();
    let updatedObj = {
      brandName,
      productCat,
      productName,
      productDesc,
      productImgs,
      productSize,
      mrp,
    };
    console.log(updatedObj);

    fetch("http://localhost:9000/products/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedObj),
    }).then((res) => {
      if (res) {
        toast("Updated...!");
        navigate("/viewProducts");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdatedData}>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Brand Name</th>
              <th>Product Category</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Images</th>
              <th>Product Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => {
                    setBrandName(e.target.value);
                  }}
                />
              </td>
              <td>
                <select
                  name=""
                  value={productCat}
                  onChange={(e) => {
                    setProductCat(e.target.value);
                  }}
                  id=""
                >
                  <option value="Bed">Bed</option>
                  <option value="sofa">Sofa</option>
                  <option value="mattress">Mattress</option>
                  <option value="mate">Mate</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  value={productDesc}
                  onChange={(e) => {
                    setProductDesc(e.target.value);
                  }}
                  id=""
                />
              </td>
              <td>
                <input
                  type="text"
                  value={productImgs}
                  onChange={(e) => {
                    setProductImgs(e.target.value);
                  }}
                  alt=""
                />
              </td>
              <td>
                <select
                  name=""
                  value={productSize}
                  onChange={(e) => {
                    setProductSize(e.target.value);
                  }}
                  id=""
                >
                  <option value="">Select Size</option>
                  {productCat === "Bed" ? (
                    <>
                      <option value="king">King Size</option>
                      <option value="queen">Queen Size</option>
                      <option value="single">Single Bed</option>
                      <option value="double">Double Bed</option>
                    </>
                  ) : productCat === "Sofa" ? (
                    <>
                      <option value="single">Single Seater</option>
                      <option value="double">Double Seater</option>
                      <option value="three">Three Seater</option>
                      <option value="four">Four Seater</option>
                      <option value="five">Five Seater</option>
                    </>
                  ) : productCat === "Mattress" ? (
                    <>
                      <option value="king">King Size</option>
                      <option value="queen">Queen Size</option>
                      <option value="double">Double Bed</option>
                      <option value="single">Single Bed</option>
                    </>
                  ) : productCat === "Mates" ? (
                    <>
                      <option value="yoga">Yoga Mates</option>
                      <option value="door">Door Mates</option>
                    </>
                  ) : null}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  value={mrp}
                  onChange={(e) => {
                    setMrp(Number(e.target.value));
                  }}
                  id=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditProductDetails;
