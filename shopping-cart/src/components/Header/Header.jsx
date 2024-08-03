/* eslint-disable react/prop-types */
import navLogo from "../../assets/images/logo.png";

const Header = ({ handleToggleCart, setToggleCart }) => {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <div>
          <img width={150} src={navLogo} alt="" />
        </div>

        <div className="flex gap-4">
          <a
            onClick={() => setToggleCart(false)}
            href="#home"
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </a>
          <a onClick={handleToggleCart} className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
