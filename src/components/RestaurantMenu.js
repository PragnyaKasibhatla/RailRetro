import React, { useState } from 'react';
import data from './data';
//const menu = data;
const menu = [
    
[
  { name: 'Vegetable Pizza Rs. 300', type: 'veg'},
  { name: 'Chicken Tikka Masala Rs. 275', type: 'non-veg' },
  { name: 'Tofu Stir-Fry Rs. 690', type: 'veg' },
  { name: 'Lamb Chops Rs. 555', type: 'non-veg' },
],
[
    { name: 'Masala Dosa Rs. 75', type: 'veg' },
    { name: 'Non Veg Meal Rs. 160', type: 'non-veg' },
    { name: 'Chappathi Kuruma Rs. 110', type: 'veg' },
    { name: 'Meals with Fish Fry Rs. 150', type: 'non-veg' },
    { name: 'Meals with Chicken Fry Rs. 439', type: 'non-veg' },
  ],
  [
    { name: 'Vegitable Biriyani Rs. 175', type: 'veg' },
    { name: 'Chicken Biriyani Rs. 220', type: 'non-veg' },

  ]

];

function RestaurantMenu({showMenu}) {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  function filteredMenu() {
    if(filter === 'all')
      return menu[localStorage.getItem("menuIndex") ? Number(localStorage.getItem("menuIndex")):0];
    else
      return menu[localStorage.getItem("menuIndex") ? Number(localStorage.getItem("menuIndex")):0].filter((item) => item.type === filter);
  }
  return (
    <div> {showMenu ?    <div><label>
        Filter:
        <select value={filter} onChange={handleFilterChange}><option value="all">All</option><option value="veg">Veg</option><option value="non-veg">Non-Veg</option></select></label><ul>
        {filteredMenu().map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul></div> : null}

    </div>

  );
}

export default RestaurantMenu;