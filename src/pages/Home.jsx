import { Carousel, Container } from 'react-bootstrap';
import Seo from '../components/Seo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Banner = styled.div`
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
  padding: 4rem 2rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 2rem;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="Inicio | Mi Tienda"
        description="Explorá productos únicos al mejor precio, con las mejores promociones del mes."
      />

      <Banner>
        <h1>Bienvenida a Mi Tienda Online</h1>
        <p>Elegí lo que más te guste y completá tu compra en minutos.</p>
        <button
          className="btn btn-light mt-3"
          onClick={() => navigate('/productos')}
        >
          🛍️ Ver productos
        </button>
      </Banner>

      <Container>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Banner 1"
            />
            <Carousel.Caption>
              <h3>Nuevas colecciones</h3>
              <p>Moda, tecnología y mucho más para vos.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Banner 2"
            />
            <Carousel.Caption>
              <h3>Descuentos por tiempo limitado</h3>
              <p>Ofertas exclusivas esta semana.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Banner 3"
            />
            <Carousel.Caption>
              <h3>Productos destacados</h3>
              <p>¡No te los pierdas!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <section className="my-5 text-center">
        <h2>✨ Descubrí nuestras categorías</h2>
        <p className="text-muted">Tecnología, moda, hogar y más</p>
      </section>
    </>
  );
};

export default Home;




