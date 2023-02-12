import React, { useState } from 'react';

const restaurants =[
        [
            
       ],
    
    
            [
         { name: 'Pizza Place', cuisine: 'Italian' },
         { name: 'Sushi Spot', cuisine: 'Japanese' },
         { name: 'Taco Joint', cuisine: 'Mexican' },
        ],
        [
             { name: 'Udupi', cuisine: 'South Indian' },
             { name: 'Mayura Regency', cuisine: 'Japanese' },
             { name: 'The North Cafe', cuisine: 'Mexican' },
        ]];


function RestaurantDropdown() {

  const [selectedRestaurant, setSelectedRestaurant] = useState(1);

  const handleChange = (event) => {
    setSelectedRestaurant(event.target.value);
 let value = 0;
    switch(event.target.value){
        case "Ketanki":
        case "Pizza Place":
            {
            value = "0";
            break;
            }
        case "Sushi Spot":
        case "Mayura Regency":
            {
                value = "1";
                break;
            }
        default:
            {
                value = "2";
                break;
            }
    }
     localStorage.setItem("menuIndex",value);
 





  };

  return (

    <select value={selectedRestaurant} onChange={handleChange}><option value={null}>Choose a restaurant</option>
      {restaurants[localStorage.getItem("station")?Number((localStorage.getItem("station"))):0].map((restaurant, index) => (
        <option key={index} value={restaurant.name}>
          {restaurant.name} ({restaurant.cuisine})
        </option>
      ))}
    </select>
  );
}

export default RestaurantDropdown;