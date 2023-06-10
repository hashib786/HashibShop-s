import { Link, useParams } from "react-router-dom";
import { backend_url, server } from "../../server";
import styles from "../../styles/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { resetSeller } from "../../redux/slice/sellerSlice";
import { reset } from "../../redux/slice/productSlice";
import { reset as eventReset } from "../../redux/slice/eventSlice";
import { resetSellerPro } from "../../redux/slice/sellerAllProductSlice";
import { resetSellerPro as resetEventAllPro } from "../../redux/slice/sellerAllEvents";
import Loader from "../layout/Loader";
import { useEffect, useState } from "react";

const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});

  
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [id])

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/shop/logout`, {
        withCredentials: true,
      });
      dispatch(resetSeller());
      dispatch(reset());
      dispatch(eventReset());
      dispatch(resetSellerPro());
      dispatch(resetEventAllPro());
    } catch (error) {
      console.log(error);
    }
  };

  return (isLoading ? <Loader/>:
  <div>
  <div className="w-full py-5">
    <div className="w-full flex item-center justify-center">
      <img
        src={`${backend_url}/${data.avatar}`}
        alt=""
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
    </div>
    <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
    <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
      {data.description}
    </p>
  </div>
  <div className="p-3">
    <h5 className="font-[600]">Address</h5>
    <h4 className="text-[#000000a6]">{data.address}</h4>
  </div>
  <div className="p-3">
    <h5 className="font-[600]">Phone Number</h5>
    <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
  </div>
  <div className="p-3">
    <h5 className="font-[600]">Total Products</h5>
    <h4 className="text-[#000000a6]">
      {/* {products && products.length} */}
      10
      </h4>
  </div>
  <div className="p-3">
    <h5 className="font-[600]">Shop Ratings</h5>
    <h4 className="text-[#000000b0]">4/5</h4>
  </div>
  <div className="p-3">
    <h5 className="font-[600]">Joined On</h5>
    <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
  </div>
      {isOwner && (
        <div className="py-3 px-4">
          <Link to="/settings">
            <div
              className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
            >
              <span className="text-white">Edit Shop</span>
            </div>
          </Link>
          <div
            onClick={logoutHandler}
            className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
          >
            <span className="text-white">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
