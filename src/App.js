import React, { useState } from "react";
import Counter from "./Counter";
import Toggle from "./Toggle";
import "./App.css";
import { findAllByDisplayValue } from "@testing-library/react";
import ProbabilityGraph from "./ProbabilityGraph";

function App() {
  const [level_count, setLevelCount] = useState(8);
  const [gold_count, setGoldCount] = useState(50);
  const [cost_count, setCostCount] = useState(4);
  const [units_gone_count, setUnitsGoneCount] = useState(0);
  const [other_units_gone_count, setOtherUnitsGoneCount] = useState(0);

  //TFT hardcoded data: reroll chances for each level
  const roll_chance_table = [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0.75, 0.25, 0, 0, 0],
    [0.55, 0.3, 0.15, 0, 0],
    [0.45, 0.33, 0.2, 0.02, 0],
    [0.25, 0.4, 0.3, 0.05, 0],
    [0.19, 0.3, 0.35, 0.15, 0.01],
    [0.16, 0.2, 0.35, 0.25, 0.04],
    [0.09, 0.15, 0.3, 0.3, 0.16],
    [0.05, 0.1, 0.2, 0.4, 0.25],
    [0.01, 0.02, 0.12, 0.5, 0.35]
  ];
  const roll_chance = roll_chance_table[level_count - 1][cost_count - 1];
  const champ_pool_per_unit_table = [29, 22, 18, 12, 10];
  const champ_pool_in_unit = champ_pool_per_unit_table[cost_count - 1];

  //const number_of_champs_in_cost_table = [13,13,12,11,8]
  const champ_pool_in_cost_table = [377, 286, 216, 132, 80];
  const champ_pool_in_cost = champ_pool_in_cost_table[cost_count - 1];

  const p_of_success_per_slot =
    ((champ_pool_in_unit - units_gone_count) /
      (champ_pool_in_cost - units_gone_count - other_units_gone_count)) *
    roll_chance;

  //5 slots make 1 reroll
  const number_of_reroll_slots = Math.floor(gold_count / 2) * 5;


  //below 2 function to deal with number too large issue when using factorial
  function product_Range(a, b) {
    let prd = a,i = a;

    while (i++ < b) {
      prd*=i;
    }
    return prd;
  }
  function combinations(n, r) {
    if (n === r || r === 0) {
      return 1;
    } 
    else {
      r = r < n - r ? n - r : r;
      return product_Range(r + 1, n) / product_Range(1, n - r);
    }
  }

  //main calculation: get P of getting exact number of units
  function P_of_getting_exactly_x_number_of_wanted_unit_function(number_of_units_wanted) {
    return (
      combinations(number_of_reroll_slots, number_of_units_wanted) *
      (p_of_success_per_slot ** number_of_units_wanted) *
      ((1 - p_of_success_per_slot) ** (number_of_reroll_slots - number_of_units_wanted))
    );
  }

  //main calculation: sum up P of getting x number of units to get P of getting x or more units
  let p_array = [];
  for (let i = 0; i <= champ_pool_in_unit - units_gone_count; i++) {
    p_array.push(P_of_getting_exactly_x_number_of_wanted_unit_function(i));
  }

  function p_summed_up_function(index) {
    let sum = 0;
    for (let i = index; i < p_array.length; i++) {
      sum = sum + p_array[i];
    }
    return sum*100; /*multiplying by 100 to make it looks like percentage*/
  }
  
  //pushing summed up probabilities into an array and formatting numbers
  let p_summed_array = [
    p_summed_up_function(1).toFixed(1),
    p_summed_up_function(2).toFixed(1),
    p_summed_up_function(3).toFixed(1),
    p_summed_up_function(4).toFixed(1),
    p_summed_up_function(5).toFixed(1),
    p_summed_up_function(6).toFixed(1),
    p_summed_up_function(7).toFixed(1),
    p_summed_up_function(8).toFixed(1),
    p_summed_up_function(9).toFixed(1)
  ];

  return (
    <div className='main_body'>
      <Counter
        level_count={level_count}
        gold_count={gold_count}
        cost_count={cost_count}
        setLevelCount={setLevelCount}
        setGoldCount={setGoldCount}
        setCostCount={setCostCount}
      />
      <Toggle
        units_gone_count={units_gone_count}
        other_units_gone_count={other_units_gone_count}
        setUnitsGoneCount={setUnitsGoneCount}
        setOtherUnitsGoneCount={setOtherUnitsGoneCount}
        champ_pool_in_cost={champ_pool_in_cost}
        champ_pool_in_unit={champ_pool_in_unit}
      />
      <p>Probability of getting X or more units</p>
      <p>1: {p_summed_array[0]}%</p>
      <p>2: {p_summed_array[1]}%</p>
      <p>3: {p_summed_array[2]}%</p>
      <p>4: {p_summed_array[3]}%</p>
      <p>5: {p_summed_array[4]}%</p>
      <p>6: {p_summed_array[5]}%</p>
      <p>7: {p_summed_array[6]}%</p>
      <p>8: {p_summed_array[7]}%</p>
      <p>9: {p_summed_array[8]}%</p>
    </div>
  );
}

export default App;
