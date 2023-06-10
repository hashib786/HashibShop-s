import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";
import Loader from "../layout/Loader";

const Events = () => {
  const { events, loading } = useSelector((state) => state.allEvent);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events</h1>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="w-full grid">
            {events.length !== 0 && <EventCard data={events && events[0]} />}
            <h4>{events?.length === 0 && "No Events have!"}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
