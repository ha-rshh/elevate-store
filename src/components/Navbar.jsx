import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillCaretDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSearch, BiSolidUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import useProducts from "../hooks/useProductsContext";
import useCartContext from "../hooks/useCartContext";
import ImageCarousel from "./ImageCarousel";
import Product from "./Product";


  const images = [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    // Add more image URLs as needed
  ];

function Navbar() {
  const { handleFilterChange } = useProducts();
  const { cartQuantity } = useCartContext();
  const location = useLocation();

  return (
    <>
      <nav className="navbar-hero">
        <div className="navbar">
          <ul className="nav-items">
            <li>Best Sellers</li>
            <li>Gift Ideas</li>
            <li>New Releases</li>
            <li>Today's Deals</li>
            <li>Customer Services</li>
          </ul>
        </div>
        <Link to="..">
          <div className="brand-name">Eflyer</div>
        </Link>
 
        <div className="navigation">
          <GiHamburgerMenu size={40} className="hamburger" />
          <button className="all-category-btn">
            All Category <AiFillCaretDown />
          </button>

          <div className="search-container">
            <input
              onChange={(e) => handleFilterChange(e)}
              type="text"
              placeholder="Search"
              className="input-box"
            />
            <div className="search-icon">
              <BiSearch />
            </div>
          </div>
          <button className="language-btn">
            <img
              src="https://cdn.countryflags.com/thumbs/india/flag-400.png"
              alt="india"
              width={20}
            />
            English
            <AiFillCaretDown />
          </button>
          <Link to="/cart" className="cart">
            <AiOutlineShoppingCart size={30} />
            <div className="cart-quantity">{cartQuantity}</div>
            <BiSolidUser size={25} /> Harsh
          </Link>
        </div>
      </nav>
      {
        location.pathname === "/" && (

          <ImageCarousel images={images} />
        )
      }

  </>
  );
}

export default Navbar;
