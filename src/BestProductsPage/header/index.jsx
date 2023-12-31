import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../FilterPage/style.css";

import FilterList from "../../elements/filterList";

const BestHeader = () => {
  const { productName } = useParams();
  const [pageNum, setPageNum] = useState(24);
  const pageArray = [12, 24, 36, 48];
  const categories = [
    "по умолчанию",
    "по цене",
    "новинки",
    "лучшие предложения",
  ];
  return (
    <div className="filterPageHeader">
      <div className="filterPageHeaderLeft best" style={{gap: '20px'}}>
        <div className="FPHLup">
          <Link style={{textDecoration: "none" }} to="/">
            <p style={{ opacity: "0.5"}}>Главная / </p>{" "}
          </Link>
          <p style={{ color: "var(--text)" }}> {productName}</p>
        </div>
        <div className="FPHLdown" style={{marginBottom: '15px'}}>
          <p>{productName}</p>
        </div>
      </div>
    </div>
  );
};

export default BestHeader;
