// src/services/productsService.js
const API_KEY = 'qksH94OKKy9D9hPXoGH6d7VHu8vLYLUU2es6pIJeYJGTvJEhLE0O9l4j';

export const getProductsFromPexelsByQuery = async (query = 'technology') => {
  const ENDPOINT = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=50`;

  const response = await fetch(ENDPOINT, {
    headers: {
      Authorization: API_KEY
    }
  });

  if (!response.ok) {
    throw new Error('Error al cargar productos desde Pexels');
  }

  const data = await response.json();

  return data.photos.map((photo, i) => ({
    id: photo.id,
    name: `Producto ${i + 1}`,
    price: Math.floor(Math.random() * 400 + 100),
    image: photo.src.medium,
    category: query
  }));
};

