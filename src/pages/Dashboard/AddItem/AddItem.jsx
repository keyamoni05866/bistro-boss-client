import React from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_image_upload_token;
const AddItem = () => {
  const [axiosSecure ] = useAxiosSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
        if(imgResponse.success){
          const imgURL = imgResponse.data.display_url;
          const {name, price, category, recipe}= data;
          const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
          console.log(newItem)
          axiosSecure.post('/menu', newItem)
          .then(data => {
            console.log('after posting new menu item', data.data)
            if(data.data.insertedId){
              Swal.fire({
                title: 'Successfully Added Item',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }
          })
        }
        })
  };
  console.log(img_hosting_token)
  console.log(errors);


  return (
    <div className="w-full ">
      <SectionTitles
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitles>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-12">
        <div className=" bg-[#F3F3F3] h-[500px] px-12 py-8 rounded-lg">
          <div class="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
            
            {...register("name", {required: true, maxLength: 120})}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex  justify-between  mt-4">
            <div className="form-control  max-w-lg w-1/2">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select {...register("category", { required: true })} className="select ">
                <option defaultValue="pick one">
                  Pick one
                </option>
                <option>Salad</option>
                <option>Desert</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Drink</option>
              </select>
            </div>
            <div class="form-control  max-w-lg w-1/2 ms-8 ">
              <label class="label">
                <span class="label-text font-semibold">Price*</span>
              </label>
              <input
              {...register("price", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>

            <textarea
            {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full   max-w-7xl"
            ></textarea>
          </div>
          <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full  max-w-xs mt-2" />
          <br />
          <input type="submit" value="Add Item"  className="btn bg-[#D1A054] mt-3"/>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
