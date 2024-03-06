import React, { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/InitiativeForm.module.css";

function InitiativeForm({onFetchInitiatives}) {
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosReq.post("/initiatives/", {
        name: name,
        initiative: initiative
      });
      setName("");
      setInitiative("");
      onFetchInitiatives(response.data); 
    } catch (error) {
      console.error("Error creating initiative:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Initiative</h2>
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
          <button className={styles.submitButton} type="submit">Create Initiative</button>
        </div>
      </form>
    </div>
  );
}

export default InitiativeForm;