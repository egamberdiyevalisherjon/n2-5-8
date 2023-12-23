const Product = ({ product }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card overflow-hidden font-monospace">
        <img
          className="card-image-top"
          height={300}
          src={product.image}
          alt={product.title}
        />
        <div className="card-body">
          <h3 className="text-truncate">{product.title}</h3>
          <p>{product.description.slice(0, 90)}...</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success d-block w-100">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
