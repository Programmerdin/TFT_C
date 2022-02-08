import React, {useState} from "react";
import styles from "./AdditionalInput.module.css";


const AdditionalInput = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount}) => {


  const handleIncrementUnitsGone = () => {setUnitsGoneCount(units_gone_count + 1);};
  const handleDecrementUnitsGone = () => {setUnitsGoneCount(units_gone_count - 1);};
  const handleIncrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count + 1);};
  const handleDecrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count - 1);};


  return(
    <div>
      <div>
        <p>Units Gone</p>
        <button onClick={handleIncrementUnitsGone} className={`${styles.triangle_button} ${styles.up}`}></button>
        <div className={styles.number_in_button}>{units_gone_count}</div>
        <button onClick={handleDecrementUnitsGone}>Units_gone_down</button>
      </div>
      <div>
        <button onClick={handleIncrementOtherUnitsGone}>Other_units_gone_up</button>
        <p>{other_units_gone_count}</p>
        <button onClick={handleDecrementOtherUnitsGone}>Other_units_gone_down</button>
      </div>
    </div>
  );
};

export default AdditionalInput;
