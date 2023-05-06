import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Sections/Hero";
import Highlights from "./Sections/Highlights";

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Hero />
      <Highlights />
      <Footer />
    </Container>
  );
};

export default Home;