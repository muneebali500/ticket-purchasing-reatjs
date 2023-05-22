import "../assets/css/payment-info.scss";

export default function PaymentInfo() {
  return (
    <div className="payment__info">
      <h3 className="payment__info-heading">Payment Info.</h3>

      <ul className="payment__info-details">
        <li className="payment__info-details--method">
          <input type="radio" name="Payment Method" defaultChecked />
          <span>
            <i className="fa-regular fa-credit-card"></i>
          </span>
          <span>Credit Card</span>
        </li>

        <li className="payment__info-details--method">
          <input type="radio" name="Payment Method" />
          <span>
            <i className="fa-brands fa-paypal"></i>
          </span>
          <span>PayPal</span>
        </li>

        <li className="payment__info-details--cardName">
          <input type="text" placeholder="Card Name" />
        </li>

        <li className="payment__info-details--cardNumber">
          <input type="number" placeholder="Card Number" />
        </li>

        <li className="payment__info-details--expiration">
          <input type="date" placeholder="Expiration Date" />
        </li>
      </ul>

      <hr />

      <div className="payment__info-alternative">
        <h3>Or Pay With</h3>
        <p>
          By using a digital wallet and continuing past this page, you have read
          and are accepting the <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
  );
}
