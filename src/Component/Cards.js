import { useEffect } from "react";
import ParticularCard from "./ParticularCard";
function Cards(pro) {
  let course = pro.course;
  let category = pro.category;
  // console.log("other data =",category);
  var array = [];
  // console.log(course,"main");
  // console.log("data take up",course.category);
  function getCourse() {
    if (category == "All") {
      Object.values(course).forEach((data) => {
        data.forEach((data1) => {
          array.push(data1);
        });
      });
      // console.log(array, "wow");
      return array;
    } else {
      return course[category];
    }
  }

  return (
    <div className="bg-red-800 w-[1000px] flex gap-4 flex-wrap mt-4">
    {
      course ?(  getCourse().map((item, index) => {
        return (
          <div>
            <ParticularCard data={item} key={index} />
          </div>
        );
      })):(<div>data not found</div>)
    }
    
    </div>
  );
}

export default Cards;
