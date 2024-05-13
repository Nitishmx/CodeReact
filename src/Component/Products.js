import React, { useEffect } from "react";
import Card from "./Card";
import ProductItem from "./ProductItem";

function Products({ item,fun }) {
  console.log(item);
  
    function TransferData(){
      fun("hye");
      // console.log(fun);

    }

  return (
    <div className="">
      <Card>
        <ProductItem
          title={item[0].title}
          amount={item[0].amount}
          date={item[0].date}
          second={fun}
        />
         <ProductItem
          title={item[1].title}
          amount={item[1].amount}
          date={item[1].date}
        />
         <ProductItem
          title={item[2].title}
          amount={item[2].amount}
          date={item[2].date}
        />
         <ProductItem
          title={item[3].title}
          amount={item[3].amount}
          date={item[3].date}
        />
      </Card>
      <button onClick={TransferData}>click</button>
    </div>
  );
}

export default Products;
