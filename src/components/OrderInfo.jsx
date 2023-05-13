import { useNavigate } from "react-router-dom";

import "../assets/css/order-info.scss";

export default function OrderInfo({
  grossPrice,
  totalTickets,
  ticketPrice,
  serviceFee,
  orderProcessingFee,
  deliveryCharges,
}) {
  const navigate = useNavigate();

  function cancelOrder() {
    localStorage.removeItem("checkoutInfo");

    navigate("/");
  }

  return (
    <>
      <h3 className="price__total">
        Total
        <span>
          ${grossPrice + serviceFee + orderProcessingFee + deliveryCharges}
        </span>
      </h3>

      <div className="price__tickets">
        <h4>Tickets</h4>
        <p>
          Resale Tickets: ${ticketPrice} x {totalTickets}{" "}
          <span>${grossPrice}</span>
        </p>
      </div>

      <div className="seller__notes">
        <h5>Notes From Seller</h5>
        <p>
          XFER Proof of at least one dose of COVID-19 vaccination for ahes 5 to
          11 and guests ages 12 and up will be required to show proof of two
          COVID-19 vaccine doses or one dose of the Johnson & Johnson vaccine.
          Masks must be worn
        </p>
      </div>

      <div className="price__other-fee">
        <h4>Fees</h4>
        <p>
          Service Fee: ${ticketPrice * 0.1} x {totalTickets}{" "}
          <span>${serviceFee}</span>
        </p>
        <p>
          Order Processing Fee <span>${orderProcessingFee}</span>
        </p>
      </div>

      <div className="price__delivery">
        <h4>Delivery</h4>
        <p>
          Delivery Charges <span>${deliveryCharges}</span>
        </p>
      </div>

      <button onClick={cancelOrder} className="cancel__btn">
        Cancel Order
      </button>

      <p className="price__note">*All Sales Final - No Refunds</p>

      <div className="price__terms">
        <input type="checkbox" />
        <p>
          I have read and agree to the current <a href="#">Terms of Use</a>
        </p>
      </div>

      <button className="order__btn">Place Order</button>
    </>
  );
}
