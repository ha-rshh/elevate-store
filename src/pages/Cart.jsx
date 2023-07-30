import useProductsContext from "../hooks/useProductsContext";
import useCartContext from "../hooks/useCartContext";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [displayItems, setDisplayItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useCartContext();
  const { products } = useProductsContext();

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      cartItems.some(
        (cartItem) => cartItem.id === product.id && cartItem.quantity !== 0
      )
    );
    setDisplayItems(filteredProducts);

    const total = cartItems.reduce(
      (acc, curr) =>
        acc + curr.quantity * products.find((p) => p.id === curr.id).price,
      0
    );
    const totalPrice = total.toFixed(2);
    setTotalValue(totalPrice);
  }, [cartItems, products]);

  const renderedItems = displayItems.map((item) => {
    const itemQuantity = getItemQuantity(item.id);
    const itemPrice = item.price * itemQuantity;
    const itemTotalPrice = itemPrice.toFixed(2);

    return (
      <div key={item.id} className="details">
        <div className="detail-image">
          <img src={item.image} alt="" className="product-img" />
        </div>
        <div className="details-hero">
          <div className="">
            <span className="detail-title">{item.title}</span>
            <span className="d-price">${itemTotalPrice}</span>
          </div>
          <div>
            <div className="quantity-wrap">
              <div className="detail-quantity">
                <span className="detail-quantity">Quantity</span>
                <button onClick={() => decreaseCartQuantity(item.id)}>
                  <AiFillMinusCircle size={30} />
                </button>
                <span className="item-quantity">{itemQuantity}</span>
                <button onClick={() => increaseCartQuantity(item.id)}>
                  <AiFillPlusCircle size={30} />
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-cart"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Link to=".." className="go-back">
        Go back
      </Link>
      {renderedItems.length !== 0 && (
        <h1 className="total">Your total: ${totalValue}</h1>
      )}
      {renderedItems.length ? (
        renderedItems
      ) : (
        <h1 className="center">No items in your cart ☹️</h1>
      )}
    </div>
  );
}

export default Cart;
