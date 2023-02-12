import React, { useState } from 'react';
import Product from './Product';

export default function Main(props) {


  const { products, onAdd } = props;
  const [filter, setFilter] = useState('all');
  //localStorage.removeItem("menuIndex");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  function filteredProducts() {
    if(filter === 'all')
      return products;
    else
      return products.filter((item) => item.type === filter);
  }

  return (
    <main>
      <h2>MENU</h2>
      <div><label>
      FILTER:
        <select value={filter} onChange={handleFilterChange}><option value="all">All</option><option value="veg">Veg</option><option value="non-veg">Non-Veg</option></select></label><ul>
      </ul>
      </div>
      <div className="productsContainer">
        {filteredProducts().map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}












// import React from 'react';
// import Product from './Product';
// import "./Product.css";
// export default function Main(props) {
//   const { products, onAdd } = props;
//   return (
//     <main>
//       <h2>MENU</h2>
//       <div className='productsContainer'>
//         {products.map((product) => (
//           <Product key={product.id} product={product} onAdd={onAdd}></Product>
//         ))}
//       </div>
//     </main>
//   );
// }