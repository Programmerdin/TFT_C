import React, {useState} from "react";
import "./AdditionalInput.css";


const AdditionalInput = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount}) => {


  const handleIncrementUnitsGone = () => {setUnitsGoneCount(units_gone_count + 1);};
  const handleDecrementUnitsGone = () => {setUnitsGoneCount(units_gone_count - 1);};
  const handleIncrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count + 1);};
  const handleDecrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count - 1);};


  return(
    <div className="splitgrid-into2">
      <div>
        <p>Units Gone</p>
        <button onClick={handleIncrementUnitsGone} className='triangle_button'>Units_gone_up</button>
        <div className='number_in_button'>{units_gone_count}</div>
        <button onClick={handleDecrementUnitsGone}>Units_gone_down</button>
      </div>
      <div>
        <p>Other Units Gone</p>
        <button onClick={handleIncrementOtherUnitsGone}>Other_units_gone_up</button>
        <p>{other_units_gone_count}</p>
        <button onClick={handleDecrementOtherUnitsGone}>Other_units_gone_down</button>
      </div>
    </div>
  );
};

export default AdditionalInput;
