import { useReducer } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import { fetchAPI } from "../../utils/temp";

export const updateTimes = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  };
};

export const initializeTimes = () => {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
};

const Bookingpage = (): JSX.Element => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Container>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Container>
  );
};

export default Bookingpage;