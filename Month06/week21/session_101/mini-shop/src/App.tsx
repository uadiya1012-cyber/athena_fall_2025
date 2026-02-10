import './App.css'
import Header from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';



type Product = {
  id: number;
  name: string;
  price: number;
}

function App() {
  const name = 'React';
  const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

  const products: Product[] = [
    { id: 1, name: 'Mouse', price: 1000 },
    { id: 2, name: 'Keyboard', price: 2000 },
    { id: 3, name: 'Monitor', price: 3000 },
  ];

  function handleAdd(productId: number) {
    console.log('Added product with id: ', productId);
  }

  return (
    <>
      <h1>Mini Shop {name}</h1>
      <Header title='Shop Header' />
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>
        })
        }
      </ul>
      <ProductList products={products} onAdd={handleAdd} />
    </>
  )
}

export default App
