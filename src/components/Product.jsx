function Product({ info: { title, image, price } }) {
  return (
    <>
    <div className="prod-wrapper">
      <div className="prod">
        <h2 className="prod-name">{title.slice(0, 20)}...</h2>
        <span className="prod-price">${price}</span>
        <img src={image} alt={title} className="prod-image" />
      </div>
    </div>
    </>
  );
}

export default Product;
