import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useGetAllProductsQuery } from "../../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const history = useHistory()
  const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
        // history.push('/cart')
    }
  return (
    <div>
      <h2 style={{ textAlign:'center', margin:'20px 0', fontSize:'30px', fontWeight:"bold" }}>New Arrivals</h2>
      {isLoading ? (
        <span>Loading ....</span>
      ) : error ? (
        <span>an error ocured</span>
      ) : (
        <div className="products">
          {data?.map((product) => (
            <div className="product" key={product.key}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <span>Price: $ {product.price}</span>
                <span>Color: {product.color}</span>
              </div>
              <button onClick={()=> handleAddToCart(product)} className="cart-btn">add to cart</button>
               
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
