import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { backend_url } from "../../../server";
import Ratings from "../../Products/Ratings";
import { toast } from "react-hot-toast";
import { addCart } from "../../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  deleteWishlist,
} from "../../../redux/slice/whishlistSlice";

const ProductCard = ({ data, isEvent }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist, data._id]);

  if (!data) return;

  const addToCartHandler = () => {
    const isItemExists = cart && cart.find((ele) => ele._id === data._id);
    isItemExists && toast.error("Item already in cart");
    if (!isItemExists) {
      if (data.stock < 1) toast.error("Product stock limited!");
      else {
        const cartData = { ...data, qty: 1 };
        dispatch(addCart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const removeFromWishlistHandler = () => {
    setClick(!click);
    dispatch(deleteWishlist(data._id));
  };

  const addToWishlistHandler = () => {
    setClick(!click);
    dispatch(addWishlist(data));
  };

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <img
            src={`${backend_url}/${data.images && data.images[0]}`}
            alt=""
            className="w-full h-[170px] object-cover"
          />
        </Link>
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data?._id}?isEvent=true`
              : `/product/${data?._id}`
          }`}
        >
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={30}
              className="cursor-pointer absolute right-2 top-5 bg-white font-semibold p-1 box-border rounded-sm"
              onClick={removeFromWishlistHandler}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={30}
              className="cursor-pointer absolute right-2 top-5 bg-white font-semibold p-1 box-border rounded-sm "
              onClick={addToWishlistHandler}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={30}
            className="cursor-pointer absolute right-2 top-14 bg-white font-semibold p-1 box-border rounded-sm"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer absolute right-2 top-24 bg-white font-semibold p-1 box-border rounded-sm"
            onClick={addToCartHandler}
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
