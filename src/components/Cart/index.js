import React from "react";
import { BsCaretUp, BsCaretDown } from "react-icons/bs";
import { useGlobalContext } from "../../context";

const defaultImage = "https://static.thenounproject.com/png/504708-200.png";

const CartItem = () => {
  const { cart, clearItem, removeItem, increateItem } = useGlobalContext();
  //   console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="flex justify-center">
        <h2>No Data</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-8">
      {cart.map((cartItem, index) => {
        return (
          <div
            key={index}
            className="w-full flex-wrap flex justify-around gap-20 p-6 border-t border-b border-purple-300 border-opacity-50"
          >
            <div className="flex flex-wrap gap-10">
              <div className="sm:w-52 w-48">
                <img src={cartItem.src || defaultImage} alt={cartItem.title} />
              </div>
              <div className="flex justify-center items-center">
                <span className="text-gray-700">{cartItem.title}</span>
              </div>
            </div>
            <div className="">
              {cartItem.colors.map((color, index) => {
                return (
                  <div key={index} className="flex">
                    {/* <span>Phân loại hàng: {color}</span> */}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <span>
                {cartItem.price}
                <sup className="text-base text-red-700">đ</sup>
              </span>
            </div>
            <div className="flex justify-center gap-1 flex-col items-center">
              <button type="button" onClick={() => increateItem(cartItem._id)}>
                <BsCaretUp />
              </button>
              <span>{cartItem.count}</span>
              <button type="button" onClick={() => console.log("descreate")}>
                <BsCaretDown />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-red-400 px-6 py-3 font-semibold text-white hover:bg-red-700 rounded-md"
                onClick={() => removeItem(cartItem._id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <div className="m-auto pt-5">
        <button
          type="button"
          className="bg-red-700 px-6 py-3 font-semibold rounded-md text-white hover:bg-blue-200"
          onClick={clearItem}
        >
          Clear Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
