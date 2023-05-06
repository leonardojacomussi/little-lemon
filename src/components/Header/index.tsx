import { FC, HTMLAttributes } from "react";
import { Container } from "./styles";
import logoImg from "../../../public/assets/Logo.svg";

const Header: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <nav>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <a href="/">Home</a> </li>
          <li> <a href="#">About</a> </li>
          <li> <a href="#">Menu</a> </li>
          <li> <a href="#">Reservations</a> </li>
          <li> <a href="#">Order Online</a> </li>
          <li> <a href="#">Login</a> </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;