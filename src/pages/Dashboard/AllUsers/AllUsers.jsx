import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //  handle delete for user
  const handleDelete = (user) => {
    console.log(user);
  };
//   handle make admin
const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

  return (
    <div className="w-full  px-10">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold mb-5">
        Total Users: {users.length}
      </h3>

      <table className="table  w-full ">
        {/* head */}

        <thead className=" bg-[#D1A054] ">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white btn-xs  ">
                    <FaUsers></FaUsers>
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user)}
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

export default AllUsers;
