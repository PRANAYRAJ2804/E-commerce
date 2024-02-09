import React from "react";
import "./BreadCrum.css";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <ArrowForwardIosIcon style={{ color: 'black' }}/> SHOP <ArrowForwardIosIcon style={{ color: 'black' }}/>
      {product.category} <ArrowForwardIosIcon style={{ color: 'black' }}/> {product.name}
    </div>
  );
};

export default BreadCrum;
