import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Products from "./Products";

function Home() {

const [products, setProducts] = useState(data);

  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter(element => element.searchTerm === searchTerm);
    setProducts(newProducts);
  }

  return(
    <div>
      <Buttons filteredProducts={chosenProducts}/>
      <Products itemsForSale={products}/>
    </div>
  )
}

export default Home;

