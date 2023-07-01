import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


 


  



  return (
    <div className="p-2 md:p-4 items 	bg-slate-400 ">
      <div className="md:flex gap-4 py-2 justify-center md:mt-10 md:mt-20">
        <div className="md:w-3/4 items-center content-center ">
          {/*<div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
           <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
  />
          </div>*/}
          <h2 className="text-4xl md:text-6xl font-bold py-3 uppercase text-center	 ">
            Moonlight Precast Products{"\n "}<br/>
            <span className="text-red-600 text-xl md:text-4xl ">Quality Uncompromised</span>
          </h2>
          <p className="py-3 text-lg md:text-xl font-sans font-medium text-center	mt-10">
            Find huge range of tiles , drain covers , pipes all made by highly skilled workers . This makes our product compete even in internantional markets. 
          </p>
          <div className="  text-center mt-10 mb-12">
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md justify-self-center self-center place-items-center ">
            Order Now
            
          </button>
          </div>
        </div>





      {/*  <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>*/}




      </div>
      <div classname="mt-20">
      <AllProduct classname="mt-20"/>
      </div>
    </div>
  );
};

export default Home;