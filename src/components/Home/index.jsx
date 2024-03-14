import { useState, useEffect } from 'react';
import { fetchData } from '../../api/fetchData';
import { prepareData } from '../../helpers/prepareData';
import Card from './Card';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getProducts = async () => {
    try {
      const data = await fetchData();
      setProducts(prepareData(data));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="px-2 md:px-20 py-6 bg-gray-200">
      {loading && (
        <div className="min-h-screen text-3xl flex justify-center items-center">
          Loading...
        </div>
      )}
      {error && (
        <div className="min-h-screen  text-3xl flex justify-center items-center">
          {error.message}
        </div>
      )}
      {!loading && !error && (
        <div className="flex flex-col items-center md:block">
          <p className="font-bold text-center md:text-right mb-4">
            Total Results:{' '}
            <span className="font-normal">{products[0]?.variants?.length}</span>
          </p>
          <div>
            {products[0].variants.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
