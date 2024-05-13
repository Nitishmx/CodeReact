import React, {useState } from "react";
import Data from "./DataInformation";
function CardPlane() {
  let [carData, SetcardData] = useState(Data);
  console.log(carData);
  function RemveCard(id){
    let a= carData.filter((item,index)=>{
     return(
       id!=index
     )
 
     })
     SetcardData(a)
  }

  return (
    <div className="bg-emerald-200">
      <h1 className="text-center text-white text-4xl">PLANE WITH LOVE</h1>
      <div className="flex flex-wrap min-w-[600px] gap-4 ">
        {carData.map((item, index) => {
          return (
            <div className="border-double border-4 border-sky-500">
              <div className="w-[280px] h-[280px]m-2 flex">
                <img
                  src="https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D"
                  className="w-full h-full object-cover "
                ></img>
              </div>
              <div className="m-2">
                <p>{item.price}</p>
                <h1>{item.place}</h1>
                <p>{item.discription}</p>
                <button className="text-white bg-red-500 hover:bg-blue-700  font-bold py-2 px-4 rounded  mt-6" onClick={()=>{RemveCard(index)}}>
                  Not Interested
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardPlane;
