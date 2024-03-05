import { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/not_found.png";
import styles from "../../styles/InitiativePage.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";
import InitiativeForm from "../initiative/initiativeCreateForm"
import InfiniteScroll from "react-infinite-scroll-component";
import btnStyles from "../../styles/Button.module.css";

function InitiativePage({ message, filter = "", id }) {
  const [initiatives, setInitiatives] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
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
        const { data } = await axiosReq.get(`/initiatives/?${filter}&search=${query}&page=${page}`);
        setInitiatives(prevInitiatives => [...prevInitiatives, ...data.results]);
        setHasLoaded(true);
        
      } catch (err) {
        console.log(err);
      }
    };
  
    setHasLoaded(false);
    fetchInitiatives();
  
  }, [filter, query, page]);


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

      <InitiativeForm setInitiatives={setInitiatives} />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Initiative</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <InfiniteScroll
          dataLength={initiatives.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={
            <div className={styles.spinnerContainer}>
              <Asset spinner />
            </div>
          }
        >
          <table className={styles.table}>
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
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default InitiativePage;