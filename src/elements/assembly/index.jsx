// assembly.js
import { useState, useEffect } from "react";
import LikeElem from "../likeElem";
import StarBar from "../starBar/indes";
import ProductBar from "../productBar";
import PrimaryBtn from '../btns/primary/index'

import "./style.css";
import img from "./img/img 1.png";
import equalizer from "./img/equalizer.svg";
const Assembly = (props) => {
  const [like, setLike] = useState(false);
  const [discount, setDiscount] = useState(8);
  const { item } = props;
  const [top, setTop] = useState(true);
  const [newProd, setNewProd] = useState(true);
  const [existence, setExistence] = useState(true);
  const [prodTehno, setProdTexno] = useState(true);
  
  useEffect(() => {
    // console.log(`родительский лайк ${like}`);
    setExistence(item?.in_stock)
    setProdTexno(props.prodTehno);
  }, [like, prodTehno, item]);

  const onClickFromChildHandler = (data) => {
    setLike(data);
  };
  return (
    <div className="product">
      <div className="productImg">
        <img className="mainImg" src={img} alt="" />

        {prodTehno ? (
          <>
            <StarBar active={false} sum={item?.avg_rating} />
            <div className="likeElem">
              <LikeElem onClickFromChild={onClickFromChildHandler} />
              <div className="equalaizer">
                <img src={equalizer} alt="" />
              </div>
            </div>
          </>
        ) : null}
        {discount !== null || top || newProd ? (
          <div className="productBarBox">
            <ProductBar
              data={props.data}
              discount={item?.discount}
              top={item?.hot}
              newProd={newProd}
            />
          </div>
        ) : null}
      </div>
      <div className="productInfo">
        <p className="productInfoTile">{item?.title}</p>
        {prodTehno ? (
          <div className="productTehno">
            <div className="cpuInfo">
              <p>{item?.char.titles[0]}:</p>
              <p>{item?.char.values[0]}</p>
            </div>
            <hr />
            <div className="cpuInfo">
              <p>{item?.char.titles[1]}:</p>
              <p>{item?.char.values[1]}</p>
            </div>
            <hr />
            <div className="cpuInfo">
              <p>{item?.char.titles[2]}:</p>
              <p>{item?.char.values[2]}</p>
            </div>
          </div>
        ) : null}
        {prodTehno ? (
          existence ? (
            <div className="existence">• В наличии</div>
          ) : (
            <div className="unExistence">• Нет в наличии</div>
          )
        ) : null}
        <div className="productCost" style={ prodTehno ? {flexWrap: 'wrap-reverse'} : null}>
          <div className="priceWithDiscountBox">
            {discount ? (
              <p className="priceTitle">Цена со скидкой:</p>
            ) : (
              <p className="priceTitle">Цена:</p>
            )}
            <p className="priceWithDiscount">{item?.price_discount}</p>
          </div>
          {discount ? (
            <div>
              <p className="price">{item?.price}</p>
            </div>
          ) : null}
        </div>
        {prodTehno ? (
          <div className="contentBtnForWindowOne">
            <PrimaryBtn text='Купить'/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Assembly;
