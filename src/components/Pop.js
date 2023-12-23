import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { NotifyError, NotifySuccess } from "./Notify";

function Pop({ openModal, setOpenModal, editProduct, product }) {
  const [newProduct, EditProduct] = useState(product);

  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Body>
        <div className="pop">
          <span>Title</span>
          <input
            value={newProduct.title}
            onChange={(e) =>
              EditProduct({ ...newProduct, title: e.target.value })
            }
          />
          <span>Price</span>
          <input
            value={newProduct.price}
            onChange={(e) =>
              EditProduct({ ...newProduct, price: e.target.value })
            }
          />
          <span>Image Url</span>
          <input
            value={newProduct.image}
            onChange={(e) =>
              EditProduct({ ...newProduct, image: e.target.value })
            }
          />
          <span>Category</span>
          <input
            value={newProduct.category}
            onChange={(e) =>
              EditProduct({ ...newProduct, category: e.target.value })
            }
          />
          <div className="btnBox">
            <Button
              className="btn"
              color="failure"
              onClick={() => {
                NotifySuccess(product.title, newProduct.title);
                editProduct(newProduct);
                setOpenModal(false);
              }}
            >
              {"Yes, I'm sure"}
            </Button>
            <Button
              className="btn"
              color="gray"
              onClick={() => {
                NotifyError(product.title);
                setOpenModal(false);
              }}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Pop;
