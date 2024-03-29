import React, { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/not_found.png";
import styles from "../../styles/InitiativePage.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";
import InitiativeForm from "../initiative/initiativeCreateForm";
import InfiniteScroll from "react-infinite-scroll-component";

function InitiativePage({ message, filter = "", id }) {
  const [initiatives, setInitiatives] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  // Function to navigate to the edit page of an initiative
  const handleEdit = (id) => {
    history.push(`/initiative/${id}/edit`);
  };

  // Function to delete an initiative
  const handleDelete = async (id) => {
    try {
      await axiosRes.delete(`/initiatives/${id}`);
      setInitiatives(prevInitiatives =>
        prevInitiatives.filter(initiative => initiative.id !== id)
      );
      history.push("/initiative");
    } catch (error) {
      console.error("Error deleting initiative:", error);
    }
  };
  
  // Function to handle fetching initiatives and updating state
  const handleFetchInitiatives = (newInitiative) => {
    setInitiatives((prevInitiatives) => [...prevInitiatives, newInitiative]);
};


  useEffect(() => {
    const fetchInitiatives = async () => {
      setIsLoading(true); 
      try {
        const { data } = await axiosReq.get(
          `/initiatives/?page=${page}`
        );
        //console.log('page', page);
        //console.table(data.results)

        setInitiatives((prevInitiatives) => [
          ...prevInitiatives,
          ...data.results,
        ]);
        setHasLoaded(true);
  
      } catch (err) {
        //console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    //  Needs to checks if hasLoaded is false or if page, have changed!
    if (!hasLoaded || page !== 1)
    {
      fetchInitiatives();
    }
  }, [page, hasLoaded]);


  return (
    <div className={styles.searchbarContainer}>
    <InitiativeForm onFetchInitiatives={handleFetchInitiatives} />
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
          loader={null} 
        >
          <table className={styles.table}>
          <tbody>
             {initiatives.length > 0 ? (
                initiatives.sort((a, b) => b.initiative - a.initiative).map((initiative) => (
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
          ))
        ) : (
            <tr>
                <td colSpan="3" className={styles.noResults}>
                <Asset src={NoResults} message={message} />
            </td>
            </tr>
          )}
    </tbody>
          </table>
        </InfiniteScroll>
        {isLoading && (
          <div className={styles.spinnerContainer}>
            <Asset spinner />
          </div>
        )}
      </div>
    </div>
  );
}

export default InitiativePage;
