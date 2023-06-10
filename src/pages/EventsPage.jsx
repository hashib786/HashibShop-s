import EventCard from "../components/Events/EventCard";
import { useSelector } from "react-redux";
import Loader from "../components/layout/Loader";

const EventsPage = () => {
  const { events, loading } = useSelector((state) => state.allEvent);

  return loading ? (
    <Loader />
  ) : (
    <div>
      {events &&
        events.map((event) => <EventCard active={true} data={event} />)}
    </div>
  );
};

export default EventsPage;
