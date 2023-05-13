import { Link } from "react-router-dom";

export default function ShowCard({ id, showImage, showName, ticketPrice }) {
  return (
    <div className="card card-1">
      <figure className="card__img">
        <img src={showImage} alt="Theater Image" loading="lazy" />
      </figure>

      <div className="card__body">
        <h4 className="card__heading">{showName}</h4>
        <p className="card__price">
          Price per ticket <span>$ {ticketPrice}</span>
        </p>

        <Link to={`/show-detail/${id}`}>
          <button className="card__btn">Buy Tickets</button>
        </Link>
      </div>
    </div>
  );
}
