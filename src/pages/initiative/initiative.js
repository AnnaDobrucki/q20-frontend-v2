import { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/not_found.png";
import styles from "../../styles/InitiativePage.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";
import InitiativeForm from "../initiative/initiativeCreateForm"
import btnStyles from "../../styles/Button.module.css";

function InitiativePage({ message, filter = "", id }) {
  const [initiatives, setInitiatives] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/initiatives/${id}/edit`);
  };

const handleDelete = async () => {
    try {
      await axiosRes.delete(`/initiatives/${id}`);
      history.push("/initiative"); 
    } catch (error) {
      console.error("Error deleting initiative:", error);
    }
  };


  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const { data } = await axiosReq.get(`/initiatives/?${filter}&search=${query}`);
        setInitiatives(data.results);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchInitiatives();
    }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, initiatives]);


  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchBar}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search initiative"
          className={styles.searchInput}
        />
      </div>

      < InitiativeForm setInitiatives={setInitiatives} />


      {hasLoaded ? (
        <>
          {initiatives.length ? (
            <div className={styles.initiativesContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Character</th>
                    <th>Initiative </th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tbody>
                  {initiatives.map((initiative) => (
                    <tr key={initiative.id}>
                      <td>{initiative.name}</td>
                      <td>{initiative.initiative}</td>
                      <td>
                        <MoreDropdown
                          handleEdit={() => handleEdit(initiative.id)}
                          handleDelete={() => handleDelete(initiative.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.noResultsContainer}>
              <Asset src={NoResults} message={message} />
            </div>
          )}
        </>
      ) : (
        <div className={styles.spinnerContainer}>
          <Asset spinner />
        </div>
      )}
    </div>
  );
}

export default InitiativePage;

