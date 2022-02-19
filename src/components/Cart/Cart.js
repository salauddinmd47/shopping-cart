import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCartQuantity, getAllTotal, removeFromCart } from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const {cartTotalAmount} = useSelector((state) => state.cart); 
const dispatch = useDispatch()
const handleRemoveCart = (product)=> {
  dispatch(removeFromCart(product))
}
const handleDecreaseQuantity = (product)=>{
  dispatch(decreaseCartQuantity(product))
}
const handleAddToCart = (product)=>{
  dispatch(addToCart(product))
}
const handleClearCart = ()=>{
  dispatch(clearCart())
}

useEffect(()=>{
  dispatch(getAllTotal())
},[cart, dispatch])

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "40px", margin: "20px 0" }}>
        This is Your Cart
      </h2>
      {!cart.length ? (
        <div className="empty-cart">
          <h2>Your Cart is empty</h2>
          <p> Visit product page for shopping</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-heading">
            <div>
              <h4>Product</h4>{" "}
            </div>
            <div className="heading-title">
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
          </div>
          <hr style={{ width: "80%", margin: "10px auto" }} />
          {cart.map((product) => (
            <div key={product.key} className="cart-container">
              <div className="cart-heading">
                <div style={{ display: "flex", marginLeft: "10px" }}>
                  <img style={{ height: "120px" }} src={product.image} alt="" />
                  <div style={{ marginLeft:"10px",paddingTop:'20px' }}>
                    <h4>{product.name}</h4>
                    <button onClick={ ()=> handleRemoveCart(product)} style={{ marginTop:"10px",padding:'5px 10px' }} >remove</button>
                  </div>
                </div>
                <div className="cart-product-info">
                  <h4>$ {product.price}</h4>
                  <h4>
                    <span
                      style={{ border: "1px solid grey", padding: "5px 10px" }}
                    >
                      <button onClick={()=> handleDecreaseQuantity(product)} style={{ marginRight: "10px" }}>-</button>
                      <span style={{ padding: "0, 20px" }}>
                        {product.cartQuantity}
                      </span>
                      <button onClick={()=> handleAddToCart(product)} style={{ marginLeft: "10px" }}>+</button>
                    </span>
                  </h4>
                  <h4>$ {product.price * product.cartQuantity}</h4>
                </div>
              </div>
              <hr style={{ width: "80%", margin: "10px auto" }} />
            </div>
          ))}
          <div className="total-container">
            <div>
              <button onClick={()=> handleClearCart()} className="clear-cart">Clear cart</button>
            </div>
            <div className="subtotal-container">
              <div className="subtotal">
                <h2>Subtotal</h2>
                <h2>$ {cartTotalAmount}</h2>
              </div>
              <p>shipping and taxes calculate at checkout</p>
              <button className="cart-btn"> check out</button>
              <Link
                style={{ textDecoration: "none", marginTop: "10px" }}
                to="/"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue shopping</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
