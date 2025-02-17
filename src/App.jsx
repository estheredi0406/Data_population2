import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState();

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productData);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {productData?.map((props, index) => (
        <ProductCard key={index} {...props} />
      ))}
    </>
  );
}

export default App;
