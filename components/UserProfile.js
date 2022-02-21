import { useState } from "react";

const userProfile = (props) => {
  return (
    <div className="bg-slate-900 h-screen" id="content">
    <div className="flex flex-col text-white ml-44 divide-y divide-gray-100 w-6/12">
      <div className="text-white text-5xl bold font-sans font-semibold mt-20 pb-10">
        {" "}
        Account{" "}
      </div>

      <div className="flex flex-row border-t-zinc-400 pt-14 pb-10">
        <div className="text-gray-400 pl-20"> Email: </div>
        <div className="text-white pl-48"> {props.user} </div>
      </div>

      <div className="flex flex-row border-t-zinc-400 pt-14 pb-10">
        <div className="text-gray-400 pl-20"> Email: </div>
        <div className="text-white pl-48"> {props.user} </div>
      </div>

    </div>
    </div>
  );
};

export default userProfile;
