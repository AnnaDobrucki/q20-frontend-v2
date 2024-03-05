import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/InitiativeForm.module.css";

function InitiativeForm() {
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/initiatives/", {
        name: name,
        initiative: initiative
      });
      setName("");
      setInitiative("");
      history.push("/initiative");
    } catch (error) {
      console.error("Error creating initiative:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Initiative</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Character Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="initiative">Initiative Value:</label>
          <input
            type="number"
            id="initiative"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit">Create Initiative</button>
        </div>
      </form>
    </div>
  );
}

export default InitiativeForm;
