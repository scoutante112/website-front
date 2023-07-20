import React, { useState } from "react";
import NavBarAccount from "../../NavBarAccount";
import CategoryContainer from "./CategoryContainer";
import NewsContainer from "./NewsContainer";

export default function BlogsContainer() {
  const [category, setCategory] = useState<boolean>(false);
  return (
    <>
      <NavBarAccount tab={'blogs'}/>
      <div className="form-control w-52 mx-auto">
        <label className="cursor-pointer label">
          <span className="label-text">News/Categories</span>
          <input type="checkbox" className="toggle toggle-accent" checked={category} onClick={() => setCategory(!category)} />
        </label>
      </div>
      {category ?
      <CategoryContainer/>
        :
        <NewsContainer/>
      }
      </>
  )
}