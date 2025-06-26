import { Helmet } from 'react-helmet';

const Seo = ({ title = 'Mi Tienda', description = 'Comprá productos únicos al mejor precio.' }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default Seo;
