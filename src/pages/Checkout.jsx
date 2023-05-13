import { useState, useEffect } from "react";

//////////////// IMPORTING CUSTOM COMPONENTS //////////////////////
import { UserInfo, PaymentInfo, OrderInfo } from "../components";

//////////////// IMPORTING CUSTOM STYLES //////////////////////
import "../assets/css/checkout.scss";

///////////////// START OF MAIN FUNCTION /////////////////////
export default function Checkout() {
  const [checkoutInfo, setCheckoutInfo] = useState({});
  const {
    address,
    location,
    name,
    telNo,
    grossPrice,
    totalTickets,
    ticketPrice,
    serviceFee,
    orderProcessingFee,
    deliveryCharges,
  } = checkoutInfo;

  /////////////// hook to get data from local storage on initial render
  useEffect(() => {
    const checkoutData = JSON.parse(localStorage.getItem("checkoutInfo")) || {};

    setCheckoutInfo(checkoutData);
  }, []);

  ////////////////////// JSX //////////////////////////
  return (
    <main className="checkout__main">
      <div className="main__container">
        <div className="left__side">
          <UserInfo
            address={address}
            location={location}
            name={name}
            telNo={telNo}
          />

          <PaymentInfo />
        </div>

        <div className="right__side">
          <OrderInfo
            grossPrice={grossPrice}
            totalTickets={totalTickets}
            ticketPrice={ticketPrice}
            serviceFee={serviceFee}
            orderProcessingFee={orderProcessingFee}
            deliveryCharges={deliveryCharges}
          />
        </div>
      </div>
    </main>
  );
}
