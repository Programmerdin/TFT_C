import React, { useState } from "react";
import './Buttons-and-text.css';

const Counter = ({level_count, gold_count, cost_count, setLevelCount, setGoldCount, setCostCount}) => {
  
  const handleIncrementLevel = () => {setLevelCount(level_count + 1);};
  const handleDecrementLevel = () => {setLevelCount(level_count - 1);};
  const handleIncrementGold = () => {setGoldCount(gold_count + 1);};
  const handleDecrementGold = () => {setGoldCount(gold_count - 1);};
  const handleIncrementCost = () => {setCostCount(cost_count + 1);};
  const handleDecrementCost = () => {setCostCount(cost_count - 1);};


  return (
      <div className='splitgrid-into3'>
        <div className="grid-item">
          <div className="button-title">Level</div>
          {level_count<11 ? 
            <button onClick={handleIncrementLevel} className="up-button"></button>
            :
            <button className="up-button-invisible"></button>
          }
          <div className="input-display">{level_count}</div>
          {level_count>1 ? 
            <button onClick={handleDecrementLevel} className="down-button"></button>
            :
            <button className="down-button-invisible"></button>
          }
        </div>
        
        <div className="grid-item">
          <div className="button-title">Gold</div>
          {gold_count<999 ? 
            <button onClick={handleIncrementGold} className="up-button"></button>
            : 
            <button className="up-button-invisible"></button>
          }
          <div className="input-display">{gold_count}</div>
          {gold_count>0 ? 
            <button onClick={handleDecrementGold} className="down-button"></button>
            :
            <button className="down-button-invisible"></button>
          }
        </div>
        
        <div className="grid-item">
          <div className="button-title">Unit Cost</div>
          {cost_count<5 ? 
            <button onClick={handleIncrementCost} className="up-button"></button>
            :
            <button className="up-button-invisible"></button>
          }
          <div className="input-display">{cost_count}</div>
          {cost_count>1 ? 
            <button onClick={handleDecrementCost} className="down-button"></button>
            :
            <button className="down-button-invisible"></button>
          }
          
        </div>
      </div>
  );
};
export default Counter;
