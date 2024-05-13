import React, { useState } from "react";
import Card from "./Card";
import ProductDate from "./ProductDate";

function ProductItem(pro) {
  console.log(pro.title);
  let [val, Setval] = useState(pro.title);
  let[togal,Settogal]=useState(false)


  function handler() {
    Settogal(!togal)
   
    if (togal) {
        
        Setval("popcon");
    }
    else{
        Setval("")
    }
    

  }

  return (
    <div className="">
      <Card>
        <div className="flex justify-between items-center">
          <ProductDate date={pro.date} />
          <div className="product-item_description">
            <h2 className="mr-4">{val}</h2>
          </div>
          <button className="bg-orange-600 mt-4 p-2 mr-4" onClick={handler}>
            Add to card
          </button>
        </div>
      </Card>
    </div>
  );
}

export default ProductItem;
