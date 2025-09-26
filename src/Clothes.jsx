import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Shanta } from './Context'
import { useContext } from 'react'
function Clothes() {
    let{ productCart }= useContext(Shanta)

  let navigate = useNavigate();

  function handelAddCart(item ) {
    productCart(item)
    navigate('/car')
}
  const [data2, setData2] = useState([]);

  async function getData2() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/mens-shirts"
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
      "https://dummyjson.com/products/category/womens-dresses"
    );
    setData(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData();
  }, []);
  const [data3, setData3] = useState([]);

  async function getData3() {
    const response = await axios.get(
      "https://dummyjson.com/products/category/tops"
    );
    setData3(response.data.products); // <-- Fix here
    console.log(response.data.products);
  }

  useEffect(() => {
    getData3();
  }, []);
  return (
    <div className="">
      <h1 className="text-center mb-5 pt-5">
        <span className="badge bg-warning" style={{ fontSize: "40px" }}>
          Clothes
        </span>
      </h1>
      <div className="fone container flex-wrap">
        {data2.map((item, index) => (
          <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"738px",paddingBottom:"5px" }}
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
              style={{  maxHeight: "auto", height:"738px",paddingBottom:"5px" }}
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
        {data3.map((item, index) => (
            <div key={index} className="col">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="card bg-dark text-white mb-3 first"
              style={{  maxHeight: "auto", height:"738px",paddingBottom:"5px" }}
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
export default Clothes;
