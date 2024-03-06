import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/InitiativeForm.module.css";

function EditInitiativeForm({ id, initialName = "", initialInitiative = "" }) {
  const [name, setName] = useState(initialName);
  const [initiative, setInitiative] = useState(initialInitiative);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await axiosReq.put(`/initiatives/${id}/`, {
          name: name,
          initiative: initiative
        });
      } 
      setName("");
      setInitiative("");
      history.push("/initiative");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{id ? "Edit Initiative" : "Create Initiative"}</h2>
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
          <label className={styles.label} htmlFor="initiative">Initiative Roll:</label>
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
          <button className={styles.submitButton} type="submit">
            {id ? "Update Initiative" : "Create Initiative"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInitiativeForm;
