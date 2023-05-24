import Multiselect from "multiselect-react-dropdown";
import styles from "./drop.module.css";

import React, { useState, Fragment } from "react";
import { cites } from "../../../../../static";
const DropLoc = ({ label, id, multiple, selectedId }) => {
  const [options] = useState(cites);

  return (
    <Fragment>
      <div className={styles.select}>
        <select
          name="cities"
          id={id}
          className={styles.droper}
          label={label}
          multiple={multiple}
        >
          <option selected>{label}</option>
          {}
          <Multiselect options={options} />
          {cites.map((city) => {
            return (
              <option value={city.code} selected={city.code === selectedId}>
                {" "}
                {city.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </Fragment>
  );

  //===============================================================================================================================
};
export default DropLoc;
