import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [expire, setExpire] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isWrite = async () => {
      try {
        const res = await axios.post(`${server}/user/activation`, {
          activationToken,
        });
        console.log(res);
        if (res.data.success === true) setExpire(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    isWrite();
  }, [activationToken]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {loading && <h1 className="text-2xl">Loading....</h1>}
      {!loading && expire && (
        <h1 className="text-2xl">Your Token is Expired</h1>
      )}
      {!loading && !expire && (
        <h1 className="text-2xl">Your Account is created</h1>
      )}
    </div>
  );
};

export default ActivationPage;
