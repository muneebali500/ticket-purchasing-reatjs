//////////////// IMPORTING CUSTOM COMPONENTS //////////////////////
import { ShowCard } from "../components";

//////////////// IMPORTING CUSTOM STYLES //////////////////////
import "../assets/css/home.scss";

///////////////// START OF MAIN FUNCTION /////////////////////
export default function Home({ showInfo }) {
  return (
    <main>
      <div className="main__container">
        <h1 className="main__heading">Upcoming Shows</h1>

        <div className="cards__container">
          {showInfo.map((show) => {
            const { id, showName, showImage, ticketPrice } = show;

            return (
              <ShowCard
                key={id}
                id={id}
                showName={showName}
                showImage={showImage}
                ticketPrice={ticketPrice}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
