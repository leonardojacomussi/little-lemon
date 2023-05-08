import { FC } from "react";
import Button from "../Button";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../../public/assets/restaurantfood.jpg";

const CallToAction: FC = ():  JSX.Element => {
  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button>Reserve a Table</Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;