import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="justify-end" key={id}>
        <div className="px-4" style={{ maxWidth: "1600px" }}>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-9 ">
            <div className="">
              <Link to={`/product/${id}`}>
                <div className="flex flex-col">
                  <img src={image} alt={title} />
                </div>
                <div className="flex flex-col text-red-500">
                  <p>{title}</p>
                </div>
                <div>
                  <p className="flex flex-col text-red-500">{price}</p>
                </div>
                <div>
                  <p className="flex flex-col text-red-500">{category}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
