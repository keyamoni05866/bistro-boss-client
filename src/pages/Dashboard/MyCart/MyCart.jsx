import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = id => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className=" w-[800px] px-8 py-8">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="text-2xl uppercase font-semibold flex justify-between my-8  items-center">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Price: ${total}</h2>
        <button className="btn bg-[#D1A054] btn-sm">Pay</button>
      </div>

      <table className="table  w-full ">
        {/* head */}

        <thead className=" bg-[#D1A054] ">
          <tr>
            <th></th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="item image" />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn bg-red-600 text-white btn-xs  "
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
