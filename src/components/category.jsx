import React from "react";
import "./category.style.css";
const Category = ({ category, onClick }) => {
  const style = {
    backgroundImage: `url(${category.displayImg})`,
    backgroundSize: "auto",
  };
  //   console.log(category);
  return (
    <div
      className="categoryDiv"
      style={style}
      onClickCapture={() => {
        onClick(category.categoryId);
      }}
    >
      <h3> {category.categoryName} </h3>
    </div>
  );
};

export default Category;
