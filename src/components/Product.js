import Pop from "./Pop";
import { Button, Modal } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { NotifyDelete } from "./Notify";
function Product({ product, deleteProduct, editProduct }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="product">
      <img src={product.image} />
      <div className="middle">
        <div className="title">
          <label property="text">{product.title} </label>
        </div>
        <div className="price">
          <label property="text">{product.price} TL</label>
        </div>
      </div>
      <Button className="popupBtn" onClick={() => setOpenModal(true)}>
        Edit
      </Button>

      <button
        className="deleteBtn"
        onClick={() => {
          NotifyDelete(product.title);
          deleteProduct(product);
        }}
      >
        Delete
      </button>
      <Pop
        openModal={openModal}
        setOpenModal={setOpenModal}
        product={product}
        editProduct={editProduct}
      />
    </div>
  );
}

export default Product;
