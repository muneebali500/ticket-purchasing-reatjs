import "../assets/css/user-info.scss";

export default function UserInfo({ name, telNo, address, location }) {
  return (
    <div className="billing__info">
      <h3 className="billing__info-heading">User Info.</h3>
      <ul className="billing__info-details">
        <li>{name}</li>
        <li>{telNo}</li>
        <li>{address}</li>
        <li>{location}</li>
      </ul>
    </div>
  );
}
