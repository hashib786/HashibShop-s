import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import heroImage from "../../../Assests/heroImage.jpg";

const Heros = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: ` url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${styles.section}  `}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Hashib's Shop offers a wide variety of high-quality home decor to
          match any style or budget.
          <br />
          Shop today and see for yourself why Hashib's Shop is the best place to
          buy home decor!
          <br />
          We offer free shipping on orders over $50 and a 100% satisfaction
          guarantee.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heros;
