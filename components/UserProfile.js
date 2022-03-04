import { useState } from "react";

const userProfile = (props) => {

  return (
    <div className="bg-slate-900 h-screen" id="content">
    <div className="flex flex-col text-white ml-44 w-6/12">
      <div className="text-white text-5xl bold font-sans font-semibold mt-20 pb-10">
        {" "}
        Account{" "}
      </div>

      <div className="flex flex-row pb-10">
        <div className="text-[20px] text-gray-400 pl-10 p-5"> Email: </div>
        <div className="text-[20px] text-white pl-48 p-5"> {props.user} </div>
      </div>

      <div className="flex flex-row pb-10">
        <div className="text-[20px] text-gray-400 pl-10 p-5"> First Name: </div>
        <div className="text-[20px] text-white pl-48 p-5"> { props.first_name ? props.first_name: "N/A" } </div>
      </div>

      <div className="flex flex-row  pb-10">
        <div className="text-[20px] text-gray-400 pl-10 p-5"> Last Name: </div>
        <div className="text-[20px] text-white pl-48 p-5"> { props.last_name ? props.last_name: "N/A" } </div>
      </div>

      <div className="flex flex-row  pb-10">
        <div className="text-[20px] text-gray-400 pl-10 p-5"> Phone Number: </div>
        <div className="text-[20px] text-white pl-[160px] p-5"> { props.phone_number ? props.phone_number : "N/A" } </div>
      </div>

    </div>
    </div>
  );
};

export default userProfile;
