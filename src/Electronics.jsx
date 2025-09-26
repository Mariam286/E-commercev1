import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Shanta } from './Context'
import { useContext } from 'react'

import "./elec.css";


function Electronics() {
    let{ productCart }= useContext(Shanta)

  let navigate = useNavigate();

  function handelAddCart(item ) {
    productCart(item)
    navigate('/car')
}
  const [data2, setData2] = useState([]);

  async function getData2() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    );
    setData2(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData2();
  }, []);
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/laptops"
    );
    setData(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  const [data3, setData3] = useState([]);
  async function getData3() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/tablets"
    );
    setData3(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData3();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const [data4, setData4] = useState([]);
  async function getData4() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/mobile-accessories"
    );
    setData4(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData4();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-5 pt-5">
        <span className="badge bg-primary " style={{ fontSize: "40px" }}>
          Electronics
        </span>
      </h1>
      <div className="container d-flex jutisfiy-content-between gap-5 flex-wrap">
        {data2.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"760px",paddingBottom:"10px" }}
            >
                   <Link to={`/details/${item.id}`} className="text-white">
              <img
                src={item.images[0]}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-img-top image2"
                alt="..."
              />
            </Link>
              <div
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-body second"
              >
                   <Link to={`/details/${item.id}`} className="text-white">
                <h3
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  className="card-title"
                >
                  {item.title}
                </h3>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#ccc",
                    margin: "0 30px 0 0",
                    fontSize: "30px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#fd7e14",
                    margin: "0 10px 0 0",
                    fontSize: "30px",
                  }}
                >
                  ${Math.round(item.price)}
                </span>
                </Link>
                <details
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <summary style={{ color: "#8f4cd2ff", fontSize: "30px" }}>
                    Product Info
                  </summary>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="card-text"
                  >
                    {item.description}
                  </p>
                </details>
              </div>
                   <button
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="submit mb-4"
                    onClick={()=> {handelAddCart(item)}}
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "30px",
                  placeSelf: "center",
                  width: "300px",
                  height: "50px",
                  color: "aliceblue",
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
                  
                }}
              >
                Add to cart <i className="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>
            </div>
          </div>
        ))}

        {data.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"760px",paddingBottom:"10px" }}
            >
                   <Link to={`/details/${item.id}`} className="text-white">
              <img
                src={item.images[0]}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-img-top image2"
                alt="..."
              />
            </Link>
              <div
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-body second"
              >
                   <Link to={`/details/${item.id}`} className="text-white">
                <h3
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  className="card-title"
                >
                  {item.title}
                </h3>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#ccc",
                    margin: "0 30px 0 0",
                    fontSize: "30px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#fd7e14",
                    margin: "0 10px 0 0",
                    fontSize: "30px",
                  }}
                >
                  ${Math.round(item.price)}
                </span>
                </Link>
                <details
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <summary style={{ color: "#8f4cd2ff", fontSize: "30px" }}>
                    Product Info
                  </summary>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="card-text"
                  >
                    {item.description}
                  </p>
                </details>
              </div>
              <button
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="submit mb-4"
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "30px",
                  placeSelf: "center",
                 width: "300px",
                  height: "50px",
                  color: "aliceblue",
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
                  
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
        {data3.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"760px",paddingBottom:"10px" }}
            >
                   <Link to={`/details/${item.id}`} className="text-white">
              <img
                src={item.images[0]}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-img-top image2"
                alt="..."
              />
            </Link>
              <div
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-body second"
              >
                   <Link to={`/details/${item.id}`} className="text-white">
                <h3
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  className="card-title"
                >
                  {item.title}
                </h3>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#ccc",
                    margin: "0 30px 0 0",
                    fontSize: "30px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#fd7e14",
                    margin: "0 10px 0 0",
                    fontSize: "30px",
                  }}
                >
                  ${Math.round(item.price)}
                </span>
                </Link>
                <details
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <summary style={{ color: "#8f4cd2ff", fontSize: "30px" }}>
                    Product Info
                  </summary>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="card-text"
                  >
                    {item.description}
                  </p>
                </details>
              </div>
                   <button
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="submit mb-4"
                    onClick={()=> {handelAddCart(item)}}
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "30px",
                  placeSelf: "center",
                  width: "300px",
                  height: "50px",
                  color: "aliceblue",
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
                  
                }}
              >
                Add to cart <i className="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>
            </div>
          </div>
        ))}
        {data4.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"760px",paddingBottom:"10px" }}
            >
                   <Link to={`/details/${item.id}`} className="text-white">
              <img
                src={item.images[0]}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-img-top image2"
                alt="..."
              />
            </Link>
              <div
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="card-body second"
              >
                   <Link to={`/details/${item.id}`} className="text-white">
                <h3
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  className="card-title"
                >
                  {item.title}
                </h3>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#ccc",
                    margin: "0 30px 0 0",
                    fontSize: "30px",
                  }}
                >
                  {item.category}
                </span>
                <span
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  style={{
                    color: "#fd7e14",
                    margin: "0 10px 0 0",
                    fontSize: "30px",
                  }}
                >
                  ${Math.round(item.price)}
                </span>
                </Link>
                <details
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <summary style={{ color: "#8f4cd2ff", fontSize: "30px" }}>
                    Product Info
                  </summary>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="card-text"
                  >
                    {item.description}
                  </p>
                </details>
              </div>
                   <button
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="submit mb-4"
                    onClick={()=> {handelAddCart(item)}}
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "30px",
                  placeSelf: "center",
                  width: "300px",
                  height: "50px",
                  color: "aliceblue",
                  border: "none",
                  borderRadius: "40px",
                  outline: "none",
                  
                }}
              >
                Add to cart <i className="fa-solid fa-cart-shopping fa-bounce"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
