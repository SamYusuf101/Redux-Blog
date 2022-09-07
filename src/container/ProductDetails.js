import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, price, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="grid">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="justify-end">
          <div className="px-4" style={{ maxWidth: "1600px" }}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-9 ">
              <div className="">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
