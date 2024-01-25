import styles from "./DoctorsInfo.module.scss";
import useFetch from "../../data/useFetch"; // Import the custom hook
import { doctorDatauUrl, doctorDataApiUrl } from "../../data/url";

const DoctorsInfo = () => {
  const { data, loading, error } = useFetch(doctorDataApiUrl);

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
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Availability</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.dogtor}</td>
            <td>{item.onDuty ? "on duty" : "off duty"}</td>
            <td>
              <img
                src={doctorDatauUrl}
                alt={item.dogtor}
                className={styles.image}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorsInfo;
