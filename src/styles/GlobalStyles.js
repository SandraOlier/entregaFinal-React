import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0; padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background: #f2f2f2;
    color: #333;
  }

  header, footer {
    background: #202020;
    color: white;
    padding: 1rem 2rem;
  }

  main {
    padding: 2rem;
}
    .product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 1rem 0;
}


.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.card button {
  margin-top: auto;
  background: #008080;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}



.card img {
  max-width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
}


  .card button {
    margin-top: 0.5rem;
    background: #008080;
    color: white;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  .card button:hover {
    background: #006666;
  }
.carousel-item img {
  max-height: 420px;
  object-fit: cover;
}


`;
