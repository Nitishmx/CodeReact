import React from 'react'

function Item({name}) {
    // let ItemName="Nirma"
    // console.log(name);
  return (
    <div className="text-center text-orange-800 bg-slate-800 p-4 mt-4">{name}</div>
  )
}

export default Item