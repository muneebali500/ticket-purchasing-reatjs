import { useState } from "react";

///////// IMPORTING THIRD PARTY LIBRARIES ///////////////////
import { useNavigate, useParams } from "react-router-dom";

//////////////// IMPORTING CUSTOM STYLES //////////////////////
import "../assets/css/billing-info.scss";

///////////////// START OF MAIN FUNCTION /////////////////////
export default function BillingInfo({ showInfo }) {
  const navigate = useNavigate();
  const { id } = useParams();

  ///////// finding the selected show data dynamically
  const showDetail = showInfo.find((show) => show.id === parseInt(id));
  const { date, genre, showName, ticketPrice, time, venue, showImage } =
    showDetail;

  /////////// userInfo and Total Cost object initialization using useState hook
  const [userInfo, setUserInfo] = useState({
    name: "",
    telNo: "",
    address: "",
    location: "",
  });

  const [totalPrice, setTotalPrice] = useState({
    grossPrice: ticketPrice,
    serviceFee: ticketPrice * 0.1 * 1,
    orderProcessingFee: ticketPrice * 0.02,
    deliveryCharges: 20,
    totalTickets: 1,
  });

  //////// function takes user input data and stores it into userInfo object
  function handleUser(e) {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  ////////// function calculates Total Cost for Buying tickets
  function calculateTicketPrice(e) {
    const totalTickets = parseInt(e.target.value.split(" ")[1]);
    const grossPrice = totalTickets * ticketPrice;
    const serviceFee = ticketPrice * 0.1 * totalTickets;

    setTotalPrice({
      ...totalPrice,
      grossPrice,
      serviceFee,
      totalTickets,
    });
  }

  ////////// function to store data into local storage and navigates user to checkout page when billing form is submitted
  function handleSubmit(e) {
    e.preventDefault();

    const checkoutData = { ...userInfo, ...totalPrice, ticketPrice };
    localStorage.setItem("checkoutInfo", JSON.stringify(checkoutData));

    navigate("/checkout");
  }

  ////////////////////////// JSX /////////////////////////////
  return (
    <main>
      <div className="main__container">
        <div className="showDetail__container">
          <figure className="show__img">
            <img src={showImage} alt={showName} loading="lazy" />
          </figure>

          <ul className="showInfo">
            <li className="showInfo__name">{showName}</li>
            <li className="showInfo__time">
              <span>{date}</span> --- <span>{time}</span>
            </li>
            <li className="showInfo__genre">Genre: {genre}</li>
            <li className="showInfo__venue">Venue: {venue}</li>
          </ul>

          <h3 className="show__price">
            per ticket <span>${ticketPrice}</span>
          </h3>
        </div>

        <form className="show__form" onSubmit={handleSubmit}>
          <h3 className="show__form-heading">
            Please Fill in the Below Details
          </h3>

          <select
            className="show__form-tickets"
            onChange={calculateTicketPrice}
            required
          >
            <option value="Ticket 1">Ticket 1</option>
            <option value="Ticket 2">Ticket 2</option>
            <option value="Ticket 3">Ticket 3</option>
            <option value="Ticket 4">Ticket 4</option>
            <option value="Ticket 5">Ticket 5</option>
            <option value="Ticket 6">Ticket 6</option>
            <option value="Ticket 7">Ticket 7</option>
            <option value="Ticket 8">Ticket 8</option>
            <option value="Ticket 9">Ticket 9</option>
          </select>

          <input
            onChange={handleUser}
            type="text"
            name="name"
            value={userInfo.name}
            placeholder="Full Name"
            required
          />

          <input
            onChange={handleUser}
            type="tel"
            name="telNo"
            value={userInfo.value}
            placeholder="Telephone Number"
            required
          />

          <input
            onChange={handleUser}
            type="text"
            name="address"
            value={userInfo.address}
            placeholder="Address Line"
            required
          />

          <input
            onChange={handleUser}
            type="text"
            name="location"
            value={userInfo.location}
            placeholder="City/Country"
            required
          />

          <button className="show__form-btn">Checkout</button>
        </form>
      </div>
    </main>
  );
}
