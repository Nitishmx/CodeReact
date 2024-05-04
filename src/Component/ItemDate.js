import React from "react";

function ItemDate({day,month,year}) {
    // let day=20
    // let month="june"
    // let year=1998
  return (
    <div className="flex gap-4 bg-red-400 mt-4 p-4 items-center justify-center">
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
}

export default ItemDate;
