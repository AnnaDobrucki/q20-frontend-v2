import React from "react";
import NoResults from "../assets/not_found.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`You've entered the Void! 
                  Fraid there's nothing here for you friend...`}
      />
    </div>
  );
};

export default NotFound;