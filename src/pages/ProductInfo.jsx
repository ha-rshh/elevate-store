import { useLocation, Link } from "react-router-dom";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import useCartContext from "../hooks/useCartContext";
import { useEffect, useState } from "react";

function ProductInfo() {
  const location = useLocation();
  const linkData = location.state;
  const productId = linkData.id;
  const [currentItemQuantity, setCurrentItemQuantity] = useState(null);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();

  useEffect(() => {
    setCurrentItemQuantity(getItemQuantity(productId));
  }, [increaseCartQuantity, decreaseCartQuantity, removeFromCart]);

  return (
    <>
      <Link to=".." className="go-back">
      Go back
      </Link>
      <div className="details">
        <div className="detail-image">
          <img
            src={linkData.image}
            alt={linkData.title}
            className="product-img"
          />
        </div>
        <div className="details-hero">
          <h2 className="detail-title">{linkData.title}</h2>
          <p className="detail-desc">{linkData.description}</p>
          <span className="d-price">${linkData.price}</span>
          <div className="detail-quantity">
            <span className="d-quantity">Quantity</span>
            <button onClick={() => decreaseCartQuantity(productId)}>
              <AiFillMinusCircle size={30}/>
            </button>
            <span className="item-quantity">{currentItemQuantity}</span>
            <button onClick={() => increaseCartQuantity(productId)}>
              <AiFillPlusCircle size={30}/>
            </button>
          </div>
          <button
            onClick={() => increaseCartQuantity(productId)}
            className="add-cart"
          >
            Add to cart
          </button>

          {currentItemQuantity !== 0 && (
            <button
              onClick={() => removeFromCart(productId)}
              className="remove-cart"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
