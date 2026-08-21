import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { GiHeartPlus } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentPage, fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { addtoWishlist } from "../redux/slices/wishSlice";
import Wishlist from "./Wishlist";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { nextPage,prevPage } from "../redux/slices/productSlice";
import { current } from "@reduxjs/toolkit";




function Home() {
  const dispatch = useDispatch();


  const { products, error, Pending } = useSelector(state => state.productReducer)
  // console.log(products)



  const productsPerPage = 10
  const totalPages = Math.ceil((products.length) / productsPerPage)
  const endIndex=currentPage*10
  const startIndex=currentPage-10

  const handleNext = () => {
    if (currentPage <totalPages) {
      dispatch(nextPage())
    }
  }

  const handlePrev = () =>{
    if( currentPage>1){
      dispatch(prevPage())
    }
  }



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  return (
    <>

      {/* <!-- Header--> */}
      <header className="py-5" style={{ backgroundColor: "black" }}>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder text-light">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">by your style</p>
          </div>
        </div>
      </header>

      {/* <!-- Section--> */}

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">

          {Pending ? (
            <div className="text-center">
              <h3>Loading...</h3>
            </div>
          ) : error?.length > 0 ? (
            <div className="text-center text-danger">
              <h3>{error}</h3>
            </div>
          ) : (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              {products?.map((item) => (
                <div className="col mb-5" key={item.id}>
                  <div className="card h-100">

                    <Link to={`/item/${item.id}`}>
                      <img
                        className="card-img-top"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </Link>

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">
                          {item.title}
                        </h5>

                        ${item.price}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-around">

                      <button
                        className="btn" onClick={() => (dispatch(addToCart(item)) )}>
                        <FaCartPlus className="text-success" />
                      </button>


                      <button

                        className="btn" onClick={()=>(dispatch(addtoWishlist(item)))}>
                        <GiHeartPlus className="text-danger" />
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>
      <div className="">
        <div className="my-3 d-flex gap-3 justify-content-center align-items-center">
          <button className="btn"><GiPreviousButton onClick={handleNext}/></button>
          <span>1/3</span>
          <button className="btn"><GiNextButton onClick={handlePrev}/></button>
        </div>
      </div>
    </>

  )
}

export default Home