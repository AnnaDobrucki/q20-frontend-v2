import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/InitiativeForm.module.css";

function InitiativeEditForm() {
  const { id } = useParams();
  const history = useHistory();
  
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");

  useEffect(() => {
    const fetchInitiative = async () => {
    // Fetch initiative data from the API
      try {
        const response = await axiosReq.get(`/initiatives/${id}/`);
        const { data } = response;
        if (data && data.name && data.initiative) {
          setName(data.name);
          setInitiative(data.initiative);
        } else {
          console.error("Invalid initiative data:", data);
        }
      } catch (error) {
        console.error("Error fetching initiative:", error);
      }
    };
    fetchInitiative();
  }, [id]);
  

  // Handle form submission to update the initiative
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.put(`/initiatives/${id}/`, {
        name: name,
        initiative: initiative
      });
      setName("");
      setInitiative("");
      history.push("/initiative");
    } catch (error) {
      console.error("Error updating initiative:", error);
    }
  };
  

  return (
    <div className={styles.container}>
      <h2>Edit Initiative</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Character:</label>
          <input
            className={styles.inputText}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="initiative">Initiative Roll!:</label>
          <input
            className={styles.inputNumber}
            type="number"
            id="initiative"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton} type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default InitiativeEditForm;
