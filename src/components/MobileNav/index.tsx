import { useState, FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Menu } from "./styles";
import logoImg from "../../../public/assets/Logo.svg";
import menuImg from "../../../public/assets/icon _hamburger_menu.svg";
import basketImg from "../../../public/assets/basket.svg";
import closeImg from "../../../public/assets/close.svg";

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <Container {...props}>
      <ul>
        <li>
          <button onClick={handleMenu}>
            <img src={menuImg} alt="Open menu" />
          </button>
        </li>
        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button onClick={handleMenu}>
          <img src={closeImg} alt="Close menu" />
        </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="#about">About</HashLink> </li>
          <li> <HashLink to="#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default MobileNav;