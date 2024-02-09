import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-descrption">
        <p>
          Welcome to Wardrobe Shop, where shopping becomes an experience worth
          relishing. With an extensive range of products spanning from fashion
          to electronics, home essentials to beauty, our platform caters to
          every need. Embrace convenience and quality as you explore our curated
          selection sourced from top brands and vendors, ensuring satisfaction
          with every purchase.
        </p>
        <p>
          Enjoy a seamless shopping journey with our intuitive interface and
          secure payment options, complemented by enticing discounts and loyalty
          rewards. With swift shipping services, your desired items will reach
          you promptly, while our dedicated customer support team stands ready
          to assist. Join the multitude of satisfied shoppers who trust Wardrobe
          Shop for their online indulgences. Start your adventure today and
          elevate your shopping experience to new heights!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
