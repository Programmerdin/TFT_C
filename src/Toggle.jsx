import React, {useState} from "react";
import AdditionalInput from "./AdditionalInput";

const Toggle = ({units_gone_count, other_units_gone_count, setUnitsGoneCount, setOtherUnitsGoneCount}) => {
  const [isShow, toggleAdditionalInput] = useState(false);
  const handleToggleAdditionalInput = () => {toggleAdditionalInput(!isShow);};
  
	
  return(
		<React.Fragment>
			<button onClick={handleToggleAdditionalInput}>Additional Input</button>
			{isShow ?
				<AdditionalInput 
					units_gone_count={units_gone_count}
					other_units_gone_count={other_units_gone_count}
					setUnitsGoneCount={setUnitsGoneCount} 
					setOtherUnitsGoneCount={setOtherUnitsGoneCount}
				/>
			:
				<div></div>
			}
		</React.Fragment>
  );
};

export default Toggle