import React, { useEffect, useState } from "react";
import categoryData from '../api/categories.json'
import Category from "./UI/Category";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
setCategories(categoryData);
  },[])
  return (
    <div className="bg-whitesmoke py-4 px-44">
      <div className="container mx-auto ">
        <h3 className="text-base font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
          </div>
        </div>
    </div>
  );
};

export default Categories;
