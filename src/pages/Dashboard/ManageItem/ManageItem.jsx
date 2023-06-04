import React from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
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
      // Swal.fire("Deleted!", "Your food has been deleted.", "success");
      if (result.isConfirmed) {
           axiosSecure.delete(`/menu/${item._id}`)
           .then(res =>{
            console.log('deleted res', res.data)
            // refetch();
           })
       
      }
    });
  };
  return (
    <div className="w-full px-8">
      <SectionTitles
        subHeading="Hurry Up"
        heading="Manage All Items"
      ></SectionTitles>

      <div>
        <table className="table  w-full  ">
          {/* head */}

          <thead className=" bg-[#D1A054] ">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {menu.map((item, index) => (
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
                  <button className="btn bg-[#D1A054]  text-lg  text-white btn-sm  ">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-600 text-lg text-white btn-sm  "
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
    </div>
  );
};

export default ManageItem;
