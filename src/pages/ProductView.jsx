import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const detail = products?.find((product) => product.id == id);

  return (
    <>
      <div className="container-fluid">
        <h2>Product Details</h2>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={detail?.thumbnail} alt={detail?.title} width={"50%"} />
            </div>

            <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
              <h2>{detail?.title}</h2>

              <h4 className="text-end">
                Category:
                <p>{detail?.category}</p>
              </h4>

              <p style={{ textAlign: "justify" }}>{detail?.description}</p>

              <h6>
                Rating:
                <span>
                  <FaStar className="text-warning" />
                  {detail?.rating}
                </span>
              </h6>

              <h4>${detail?.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;