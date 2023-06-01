import React from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";

const AddItem = () => {
  return (
    <div className="w-full ">
      <SectionTitles
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitles>
      <form className="mx-12">
        <div className=" bg-[#F3F3F3] h-[500px] px-12 py-12">
          <div class="form-control  max-w-7xl   ">
            <label class="label">
              <span class="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              className=" px-3 py-3 rounded"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex  justify-between  mt-7">
            <div class="form-control  max-w-lg w-1/2">
              <label class="label">
                <span class="label-text">Category*</span>
              </label>
              <select class="select ">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div class="form-control  max-w-lg w-1/2 ms-8 ">
              <label class="label">
                <span class="label-text font-semibold">Price*</span>
              </label>
              <input
                className=" px-3 py-3 rounded"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mt-4">
            <label class="label">
              <span class="label-text font-semibold">Recipe Details*</span>
            </label>

            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full   max-w-7xl"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
