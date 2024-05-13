import { useEffect } from "react";
import ParticularCard from "./ParticularCard";
// import React, {useState } from 'react'
function Cards(pro) {
  // let [alldata,Setalldata]=useState([])
  let course = pro.course;
  let category = pro.category;
  console.log("other data =",category);
  var array = [];
  console.log(course.Business,"main");
  if (category == "All") {
    // if (course) {
      function getCourse() {
        Object.values(course).forEach((data) => {
          data.forEach((data1) => {
            array.push(data1);
          });
        });
        console.log(array, "wow");
        return array;
      }
      // console.log(array,"ll");
      getCourse();
      // Setalldata(array)
    // }
  }
  else{
    return array.push(course[category])
  
  }

  // console.log(course,"cards inside data reached");
  return (
    <div className="bg-red-800 w-[1000px] flex gap-4 flex-wrap mt-4">
      {array.map((item, index) => {
        return (
          <div>
            <ParticularCard data={item} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
