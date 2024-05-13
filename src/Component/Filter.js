import React, { useState } from "react";
import { filterdata } from "./DataFilter";
function Filter({ category,Setcategory}) {
  let [data, Setdata] = useState(filterdata);
  function filterhandler(title){
    Setcategory(title)
    // console.log(category);

  }
  return (
    <div className="min-w-[640px] bg-stone-600 p-2 flex justify-between items-center rounded-md cursor-pointer gap-4">
      {data.map((item, index) => {
        return (
          <button
            className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            key={index} onClick={()=>filterhandler(item.title)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
