import React, {useState} from "react";
import "./Buttons-and-text.css";


const AdditionalInput = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount, champ_pool_in_cost, champ_pool_in_unit}) => {


  const handleIncrementUnitsGone = () => {setUnitsGoneCount(units_gone_count + 1);};
  const handleDecrementUnitsGone = () => {setUnitsGoneCount(units_gone_count - 1);};
  const handleIncrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count + 1);};
  const handleDecrementOtherUnitsGone = () => {setOtherUnitsGoneCount(other_units_gone_count - 1);};


  return(
    <div className="splitgrid-into2">

      <div>
        <div className="button-title">Units Already Sold</div>
        {units_gone_count<champ_pool_in_unit ? 
          <button onClick={handleIncrementUnitsGone} className="up-button"></button>
          : 
          <button className="up-button-invisible"></button>
        }
        <div className="input-display">{units_gone_count}</div>
        {units_gone_count>0 ? 
          <button onClick={handleDecrementUnitsGone} className="down-button"></button>
          :
          <button className="down-button-invisible"></button>
        }
        
      </div>

      <div>
        <div className="button-title">Other Units Sold with Same Cost</div>
        {other_units_gone_count<champ_pool_in_cost ? 
          <button onClick={handleIncrementOtherUnitsGone} className="up-button"></button>
          :
          <button className="up-button-invisible"></button>
        }
        
        <div className="input-display">{other_units_gone_count}</div>
        {other_units_gone_count>0 ?
          <button onClick={handleDecrementOtherUnitsGone} className="down-button"></button>
          :
          <button className="down-button-invisible"></button>
        }
      </div>
    </div>
  );
};

export default AdditionalInput;
