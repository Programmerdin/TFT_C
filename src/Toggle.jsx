import React, {useState} from "react";
import AdditionalInput from "./AdditionalInput";
import "./Toggle.css"

const Toggle = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount, champ_pool_in_cost, champ_pool_in_unit}) => {
  const [isShow, toggleAdditionalInput] = useState(false);
  const handleToggleAdditionalInput = () => {toggleAdditionalInput(!isShow);};
  
	
  return(
		<React.Fragment>
			<button onClick={handleToggleAdditionalInput} className="additional-input-button">Additional Input</button>
			{isShow ?
				<AdditionalInput 
					units_gone_count={units_gone_count}
					other_units_gone_count={other_units_gone_count}
					setUnitsGoneCount={setUnitsGoneCount} 
					setOtherUnitsGoneCount={setOtherUnitsGoneCount}
					champ_pool_in_cost={champ_pool_in_cost}
        			champ_pool_in_unit={champ_pool_in_unit}
				/>
			:
				<div></div>
			}
		</React.Fragment>
  );
};

export default Toggle