import React from "react";
import styles from "../welcome.module.css";
const Search = () => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Job Title or keyword | Location"
        className={styles.textInp}
      ></input>
      <button type="submit" className={styles.submit}>
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
export default Search;
