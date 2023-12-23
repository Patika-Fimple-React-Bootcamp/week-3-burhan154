import Product from "./Product";

function ProductList({ products, loading, setProducts }) {
  const deleteProduct = (product) => {
    console.log(product);
    const newProduct = products.filter((t) => {
      return t.id !== product.id;
    });
    setProducts(newProduct);
  };

  const editProduct = (product) => {
    console.log(product);
    const newProduct = products.map((t) => (t.id === product.id ? product : t));
    setProducts(newProduct);
  };

  return (
    <div className="">
      <section className="products">
        {loading ? (
          <p>Loading</p>
        ) : (
          products.map((product, i) => (
            <Product
              key={i}
              product={product}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
              onClick
            />
          ))
        )}
      </section>
    </div>
  );
}

export default ProductList;
