import React from "react";
import styles from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CartItem = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartData);
  return (
    <div className={styles.cart_container}>
      <h1>Shopping Cart</h1>
      {cartData.length === 0 ? (
        <div className={styles.cart_empty}>
          <p>Your Cart Is empty</p>
          <div className={styles.start_shopping}>
            <button onClick={() => navigate("/")}>Start Shoping</button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.titles}>
            <h3 className={styles.product_title}>Product</h3>
            <h3 className={styles.price}>price</h3>
            <h3 className={styles.qty}>Quantity</h3>
            <h3 className={styles.total}>Total</h3>
          </div>
          <div className={styles.cart_items}>
            {cartData?.map((item) => {
              const { id, name, desc, image, price, cartquantity } = item;
              return (
                <div className={styles.cart_item} key={id}>
                  <div className={styles.cart_product}>
                    <img src={image} alt={name} />
                    <div>
                      <h3>{name}</h3>
                      <p>{desc}</p>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div className={styles.product_price}>{`₹ ${price}`}</div>
                  <div className={styles.product_qty}>
                    <button>-</button>
                    <div className={styles.count}>{cartquantity}</div>
                    <button>+</button>
                  </div>
                  <div className={styles.product_total}>
                    ₹{cartquantity * price}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.cart_summary}>
            <button className={styles.clear_cart}>Clear Cart</button>
            <div className={styles.cart_checkout}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span className={styles.amount}>₹{cartTotal || 0}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <div className={styles.navi}>
                <button className={styles.checkout}>Checkout</button>
                <button className={styles.navigation} onClick={() => navigate("/")}>Start Shoping</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
