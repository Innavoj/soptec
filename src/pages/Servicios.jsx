import { useState } from "react";
import  data  from "../data/datos.json"

const products = data;

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}


function ProductRow({ product }) {
  const name = product.stocked ? product.title :
    <span style={{ color: 'red' }}>
      {product.title}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.precio} pesos</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.title} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ 
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange }) {
  return (
    <form>
      <input type="text" value={filterText}  
      placeholder="Buscar..." 
      onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" checked={inStockOnly} 
        onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Mostrar solo servicios disponibes
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
  );
}

function Servicios() {
 
    return (
      <div className='App'>
  
        <h1>Servicios Disponibles</h1>
        <FilterableProductTable products={products} />;
       
      </div>
      
    )
  }

  
export default Servicios;