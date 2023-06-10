import TrackOrder from "../components/Profile/TrackOrder";
import ProtectedRoute from "../routes/ProtectedRoute";

const TrackOrderPage = () => {
  return (
    <ProtectedRoute>
      {" "}
      <TrackOrder />{" "}
    </ProtectedRoute>
  );
};

export default TrackOrderPage;
