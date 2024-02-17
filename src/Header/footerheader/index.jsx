import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoryBox from "../../elements/category";
import NavigationPage from "../../elements/navigation/index";
import { fetchCategories } from "../../redux/slices/categories";

import "../style.css";
import arrow from "../img/footer/arrow.svg";
import hamburger from "../img/footer/hamburger.svg";
import computer from "../img/footer/computer.svg";
import settings from "../img/footer/settings.svg";
const FooterHeader = () => {
  const myArray = useSelector((state) => state.categories.categories.items);
  const dispatch = useDispatch();
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isCategoryListVisibleOnScroll, setIsCategoryListVisibleOnScroll] =
    useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isCategoryListVisible, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // Устанавливаем visible только если isCategoryListVisible === false
    if (!isCategoryListVisible) {
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 1);
    }
    // Если isCategoryListVisibleOnScroll равно true, обновляем isCategoryListVisibleOnScroll
    if (isCategoryListVisibleOnScroll && currentScrollPos > 1) {
      setIsCategoryListVisibleOnScroll(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  const toggleCategoryList = () => {
    setCategoryListVisible(!isCategoryListVisible);
    setIsCategoryListVisibleOnScroll(true);
  };
  return (
    <div className={`${visible ? "visible" : "hiddenFooter"}`}>
      <div className="footerForHeader">
        <div className="mainChildForHeadFooter">
          <img src={hamburger} alt="Hamburger" />
          <Link
            style={{ textDecoration: "none" }}
            to={`/category/Игровые сборки`}
          >
            <p>Каталог</p>
          </Link>
        </div>
        <div
          className={`mainChildForHeadFooter arrow ${
            isCategoryListVisible ? "rotate" : ""
          }`}
        >
          <p>Каталог товаров</p>
          <img
            onClick={toggleCategoryList}
            src={arrow}
            alt="Arrow"
            style={
              isCategoryListVisible
                ? { transform: "rotate(45deg)", transition: "all 0.3s" }
                : { transition: "all 0.3s" }
            }
          />
          <div
            className={`categoryList ${isCategoryListVisible ? "" : "none"}`}
          >
            {myArray.map((item, index) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/category/${item.name}`}
              >
                <div key={index} className="categoryName">
                  <p>{item.name}</p>
                  <hr />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="childForHeadFooter">
          <img src={computer} alt="Computer" />
          <p>Купить компьютер</p>
        </div>
        <div className="childForHeadFooter">
          <img src={settings} alt="Settings" />
          <Link style={{ textDecoration: "none" }} to="/configurator">
            <p>Конфигуратор</p>
          </Link>
        </div>
        <div className="justcategory">
          <Link style={{ textDecoration: "none" }} to="/serves">
            <p>Услуги</p>
          </Link>
        </div>
        <div className="justcategory">
          <Link style={{ textDecoration: "none" }} to="/support">
            <p>Поддержка</p>
          </Link>
        </div>
        <div className="justcategory">
          <Link style={{ textDecoration: "none" }} to="/aboutUs">
            <p>О компании</p>
          </Link>
        </div>
        <div className="justcategory">
          <Link style={{ textDecoration: "none" }} to="/projects">
            <p>Проекты</p>
          </Link>
        </div>
        <div className="justcategory">
          <Link style={{ textDecoration: "none" }} to="/news">
            <p>Новости</p>
          </Link>
        </div>
        <div className="lastCategory">
          <Link style={{ textDecoration: "none" }} to="/best/Скидки">
            <p>Скидки</p>
          </Link>
          <hr />
        </div>
        <div className="lastCategory">
          <Link
            style={{ textDecoration: "none" }}
            to="/best/Лучшие предложения"
          >
            <p>Хит продаж</p>
          </Link>
          <hr />
        </div>
        <div className="lastCategory">
          <Link style={{ textDecoration: "none" }} to="/best/Новинки">
            <p>Новинки</p>
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
