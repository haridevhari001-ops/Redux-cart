import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";

import { removedFromWishlist } from "../redux/slices/wishSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
const wishlist = useSelector(state => state.wishlistReducer.wishlist);  
  const dispatch = useDispatch();


  return (
    <>
      <section className="py-5">

        <div className="container px-4 px-lg-5 mt-5">

          <h2 className="text-center mb-5">
            My Wishlist
          </h2>

          {wishlist?.length > 0 ? (

            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">

              {wishlist.map((item) => (

                <div className="col mb-5" key={item.id}>

                  <div className="card h-100 shadow-sm">

                    {/* Product Image */}
                    <img
                      className="card-img-top"
                      src={item?.thumbnail}
                      alt={item?.title}
                      style={{
                        height: "250px",
                        objectFit: "contain",
                        padding: "15px",
                      }}
                    />

                    {/* Product Details */}
                    <div className="card-body p-4">

                      <div className="text-center">

                        <h5 className="fw-bolder">
                          {item?.title}
                        </h5>

                        <p>
                          ${item?.price}
                        </p>

                      </div>

                    </div>

                    {/* Card Footer */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                      <div className="d-flex justify-content-between align-items-center">

                        {/* Add To Cart */}
                        <button
                          className="btn"
                          onClick={() =>
                            dispatch(addToCart(item))
                          }
                        >
                          <FaCartPlus
                            className="text-success"
                            size={25}
                          />
                        </button>

                        {/* Remove From Wishlist */}
                        <button
                          className="btn"
                          onClick={() =>
                            dispatch(
                              removedFromWishlist(item.id)
                            )
                          }
                        >
                          <FaHeartCircleMinus
                            className="text-danger"
                            size={25}
                          />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <h3 className="text-center mt-5">
              Your wishlist is empty
            </h3>

          )}

        </div>

      </section>
    </>
  );
}

export default Wishlist;