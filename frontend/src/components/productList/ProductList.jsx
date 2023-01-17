import React from "react";
import styles from './ProductList.module.css';

export const ProductList = ({data,isLoading,isError}) => {
  return (
      <div className={styles.home_container}>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : isError ? (
          <h1>Error Occured</h1>
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className={styles.products}>
              {data?.map((item) => {
                const { id, name, desc, price, image } = item;
                return (
                  <div key={id} className={styles.product}>
                    <h3>{name}</h3>
                    <img src={image} alt={name} />
                    <div className={styles.details}>
                      <span>{desc}</span>
                      <span className={styles.price}>₹{price}</span>
                    </div>
                    <button className={styles.btn}>Add To Cart</button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
  );
};
