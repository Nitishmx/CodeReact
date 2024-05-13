import React from "react";
import Cards from "./Cards";

function Cardes({course,category}) {
  // console.log(course,"app data transfer");
  return (
    <div>
      <Cards course={course} category={category}/>
    </div>
  );
}

export default Cardes;
