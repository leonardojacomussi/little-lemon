import { useEffect, FC, HTMLAttributes, Dispatch } from "react";
import { Container, Top, Form, FormMessageError } from "./styles";
import { submitAPI } from "../../utils/temp";
import { useFormik } from "formik";
import * as Yup from "yup";

interface BookingFormProps extends HTMLAttributes<HTMLDivElement> {
  dispatch: Dispatch<{ type: string, date: Date }>;
  availableTimes: {
    times: string[];
  };
};

const BookingForm: FC<BookingFormProps> = ({ availableTimes, dispatch, ...props }): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      date: (new Date()).toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: "1",
      occasion: "birthday",
    },
    onSubmit: (values) => {
      const response: boolean = submitAPI(values);
      if (response) {
        console.log(values);
      };
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Name is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Book Now</h1>
      </Top>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" {...formik.getFieldProps("date")} />
        <FormMessageError>
          {formik.touched.date && formik.errors.date}
        </FormMessageError>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " {...formik.getFieldProps("time")}>
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <FormMessageError>
          {formik.touched.time && formik.errors.time}
        </FormMessageError>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
        <FormMessageError>
          {formik.touched.guests && formik.errors.guests}
        </FormMessageError>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
          <option value="birthday" className="opt">Birthday</option>
          <option value="engagement" className="opt">Engagement</option>
          <option value="anniversary" className="opt">Anniversary</option>
        </select>
        <FormMessageError>
          {formik.touched.occasion && formik.errors.occasion}
        </FormMessageError>
        <input type="submit" value="Make Your reservation" />
      </Form>
    </Container>
  );
};

export default BookingForm;