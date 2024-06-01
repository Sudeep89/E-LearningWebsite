import React from "react";
import { useCart } from "react-use-cart";
function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <>
        <h1 className="text-center">Your Cart is Empty</h1>
      </>
    );
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4">
        <div className=" justify-center justify-items-center">
          <hr />
          <h1 className=" item-center text-center mt-4">
            Cart ({totalUniqueItems}) total items : ({totalItems})
          </h1>
          <table className="md:table table-fixed mt-4 md:text-lg text-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItemQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger hover:scale-110"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="items-center justify-center text-center flex">
            <button
              onClick={() => emptyCart()}
              className="btn btn-danger hover:scale-110 mr-4"
            >
              Empty Cart
            </button>
            <h1 className=" font-bold">Total Price : {cartTotal.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
