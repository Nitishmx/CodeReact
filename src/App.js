// import Item from './Component/Item';
// import ItemDate from './Component/ItemDate';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-4xl text-green-600 text-center bg-slate-400">Welcome to react</h1>
//       <Item name="nirma"/>
//       <ItemDate day="20" month="june" year="1998"/>
//       <Item name="SurfExcel"/>
//       <ItemDate  day="22" month="july" year="1999"/>
//       <Item name="Wheel"/>
//       <ItemDate  day="23" month="August" year="2000"/>
//     </div>
//   );
// }

// export default App;

//*****************************************************************************
//Second lecture

// import React from "react";
// import Products from "./Component/Products";

// function App() {
//   const product = [
//     {
//       id: "p1",
//       title: "Nirma",
//       amount: 100,
//       date: new Date(2021, 8, 10),
//     },
//     {
//       id: "p2",
//       title: "Sirf Excel",
//       amount: 120,
//       date: new Date(2021, 3, 2),
//     },
//     {
//       id: "p3",
//       title: "Wheel",
//       amount: 110,
//       date: new Date(2021, 1, 28),
//     },
//     {
//       id: "p4",
//       title: "Tide",
//       amount: 140,
//       date: new Date(2021, 6, 5),
//     },
//   ];
//   function DataChildParent(data){
//     console.log("app",data);
//   }
//   return <div className="flex items-end justify-center">
//        <Products item={product} fun={DataChildParent}/>
//   </div>;
// }

// export default App;

//***************************LECTURE THIRD**************************************************
// INCREMENT AND DECREMENT PROJECT

// import React, { useState } from 'react'

// function App() {
//   let [count,Setcount]=useState(0)
//   function Increment(){
//     Setcount(++count)
//   }
//   function Decrement(){
//     Setcount(count-1);
//   }
//   function ResetButton(){
//     Setcount("0")
//   }
//   return (
//     <div className="bg-slate-800 w-[100vw] h-[100vh] flex flex-col items-center justify-center">
//        <h1 className="text-4xl text-white">Increment and Decrement</h1>
//        <div className="bg-white flex w-[200px] p-4 justify-between items-center text-4xl cursor-pointer mt-8 rounded-md">
//          <p onClick={Decrement}>-</p>
//          <p>{count}</p>
//          <p onClick={Increment}>+</p>
//        </div>
//        <button className="text-white bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded w-[140px] mt-6" onClick={ResetButton}>Reset</button>
//     </div>
//   )
// }

// export default App

//***************************LECTURE THIRD**************************************************
// PLANE WITH LOVE
// import React from 'react'
// import CardPlane from './Component/CardPlane'

// function App() {
//   return (
//     <div className="flex justify-center ">
//       <CardPlane/>
//     </div>
//   )
// }

// export default App

//***************************LECTURE FOURTH**************************************************

// import React, {useEffect, useState } from 'react'

// function App() {
//   let [data,Setdata]=useState("")

// // ye every render par chalega because dependenic pass nahi kiye hai
//   // useEffect(()=>{
//   //   console.log("useeffect call");
//   // })

//   // empty dependenic wala only first time hi chalega jb page open hoga
//   // useEffect(()=>{
//   //   console.log("useeffect call");
//   // },[])

//   // first render+whenever dependency changes
//   useEffect(()=>{
//     console.log("useeffect call");
//   },[data])

//   let handler=(event)=>{
//     Setdata(event.target.value)
//     console.log(event.target.value);
//   }
//   return (
//     <div>
//       <input type='text' placeholder='enter the text' onChange={handler} value={data}></input>
//     </div>
//   )
// }

// export default App

//***************************LECTURE FOURTH and five new project create**************************************************

import React, { useEffect, useState } from "react";
import NavBar from "./Component/NavBar";
import Cardes from "./Component/Cardes";
import Filter from "./Component/Filter";
import { apUrl, filterdata } from "./Component/DataFilter";
import Spinner from "./Component/Spinner";
// import { toast } from "react-toastify";
function App() {
  let [course, Setcourse] = useState([]);
  let [loading,Setloading]=useState(false)
  let [category,Setcategory]=useState(filterdata[0].title)
    async function fetchApi() {
      Setloading(true)
      try {
        let response = await fetch(apUrl);
        let output = await response.json();
        // console.log(output);
        Setcourse(output.data);
      } catch (error) {
        console.log("some error create in api data fetching");
      }
      Setloading(false)
    }

  useEffect(()=>{
    fetchApi()
  },[])
  // console.log(course,"api data");
  return (
    <div className="bg-slate-600 w-[100vw] ">
      <NavBar />
      <div className="flex items-center justify-center">
        <Filter category={category} Setcategory={Setcategory}/>
      </div>
      <div className="flex items-center justify-center">
      {
        loading? (<Spinner/>):(  <Cardes course={course} category={category}/>)
      }
      </div>
    </div>
  );
}

export default App;
