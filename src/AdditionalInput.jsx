import React, {useState} from "react";
import "./Buttons-and-text.css";


const AdditionalInput = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount}) => {


  const handleIncrementUnitsGone = () => {setUnitsGoneCount(units_gone_count + 1);};
  const handleDecrementUnitsGone = () => {setUnitsGoneCount(units_gone_count - 1);};
  const handleIncrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count + 1);};
  const handleDecrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count - 1);};


  return(
    <div className="splitgrid-into2">
      <div>
        <div className="button-title">Units Already Sold</div>
        <button onClick={handleIncrementUnitsGone} className="up-button"></button>
        <div className="input-display">{units_gone_count}</div>
        <button onClick={handleDecrementUnitsGone} className="down-button"></button>
      </div>
      <div>
        <div className="button-title">Other Units Sold with Same Cost</div>
        <button onClick={handleIncrementOtherUnitsGone} className="up-button"></button>
        <div className="input-display">{other_units_gone_count}</div>
        <button onClick={handleDecrementOtherUnitsGone} className="down-button"></button>
      </div>
    </div>
  );
};

export default AdditionalInput;
