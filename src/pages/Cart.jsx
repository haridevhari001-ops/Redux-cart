import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity, removeFromCart, checkout } from '../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart);

  return (
    <>
      <div className='container-fluid p-2'>

        <h2>Cart Summary</h2>

        <div className='row'>

          {/* Cart Table */}
          <div className='col-sm-12 col-md-9'>

            {
              cart?.length > 0 ? (

                <table className="table table-bordered w-100">

                  <thead>
                    <tr>
                      <th>SL.NO</th>
                      <th>IMAGE</th>
                      <th>PRICE</th>
                      <th>QTY</th>
                      <th>TOTAL PRICE</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      cart.map((item, index) => (

                        <tr key={item.id}>

                          <td>{index + 1}</td>

                          <td>
                            <img
                              src={item?.thumbnail}
                              alt='product'
                              height='100px'
                              width='100px'
                            />
                          </td>

                          <td>
                            ${item?.price}
                          </td>

                          <td>
                            <div className='d-flex flex-wrap gap-2'>

                              <button className='btn border' onClick={()=>dispatch(increaseQuantity(item?.id))}>
                                +
                              </button>

                              <span className='border p-2 rounded bg-light'>
                                {item?.quantity}
                              </span>

                              <button className='btn border' onClick={()=>dispatch(decreaseQuantity(item?.id))}>
                                -
                              </button>

                            </div>
                          </td>

                          <td>
                            ${item?.price * item?.quantity}
                          </td>

                          <td>

                            <button className='btn'  onClick={()=>dispatch(removeFromCart(item?.id))}>
                              <FaRegTrashAlt
                                size={25}
                                className='text-danger'
                              />
                            </button>

                          </td>

                        </tr>

                      ))
                    }

                  </tbody>

                </table>

              ) : (

                <h3 className='text-center mt-5'>
                  Your cart is empty
                </h3>

              )
            }

          </div>


          {/* Cart Summary */}
          <div className='col-sm-12 col-md-3'>

            <div className='m-2 border border-2 shadow p-3'>

              <h4>
                Total Items :
                <span> {cart?.length}</span>
              </h4>

              <h4>
                Total Amount :
                <span>
                  $
                  {
                    cart?.reduce(
                      (total, item) =>
                        total + item.price * item.quantity,
                      0
                    )
                  }
                </span>
              </h4>

              <div className='d-grid'>
                <button className='btn btn-success' onClick={() => dispatch(checkout())}>
                  CHECKOUT
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Cart