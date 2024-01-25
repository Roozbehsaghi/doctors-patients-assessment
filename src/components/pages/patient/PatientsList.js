import useFetch from "../../data/useFetch";
import { patientDataApiUrl } from "../../data/url";
import Patient from "./Patient";
import styles from "./Patient.module.scss";
import { useNavigate } from "react-router-dom";

// Route to spesific page
const pathToSelectDoctor = "/select-doctor";

const PatientsList = () => {
  const { data, loading, error } = useFetch(patientDataApiUrl);

  const navigate = useNavigate();
  // To dynamically set the navigation path
  const navigateToPage = (path) => {
    navigate(path);
  };

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <div>
      <h2>Patients List: </h2>

      <table className={styles.container}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Date Of Birth</th>
            <th>Show Details</th>
          </tr>
        </thead>
        <Patient data={data} />
      </table>

      <button onClick={() => navigateToPage(pathToSelectDoctor)}>
        Select Doctor
      </button>
    </div>
  );
};

export default PatientsList;
