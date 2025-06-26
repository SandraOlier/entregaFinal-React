# 🛍️ Mi Tienda Online

Tienda web profesional desarrollada con React, que permite explorar productos, agregarlos al carrito, iniciar sesión y completar una compra simulada. Diseñada para brindar una experiencia fluida y atractiva, utilizando herramientas modernas del ecosistema frontend.

---

## 🚀 Demo

**Versión desplegada:** [https://mi-tienda.vercel.app](https://mi-tienda.vercel.app)

---

## 🛠️ Tecnologías utilizadas

- **React + Vite**
- **React Router DOM** para navegación
- **Bootstrap + styled-components** para el diseño
- **React Toastify** para notificaciones
- **React Helmet / Helmet Async** para SEO dinámico
- **MockAPI** como base de datos simulada
- **React Icons** para iconografía
- **React Context** para carrito y autenticación global

---

## 📦 Funcionalidades principales

- 🔍 **Catálogo** de productos con imágenes reales desde MockAPI o Pexels
- 🛒 **Carrito de compras** con botón para eliminar y vaciar
- ✅ **Login simulado** para controlar acceso al checkout
- 💳 **Checkout profesional** con barra de progreso, toast y redirección automática
- 🧰 **Panel Admin** para crear, editar y eliminar productos
- 💅 **Diseño responsive**, limpio y funcional
- 🧠 **Comportamiento UX intuitivo**: botón “volver”, redirecciones, toasts y scroll automático

---

## 📁 Estructura del proyecto

---src/ │ 
├── components/ # Reutilizables (Layout, Cart, ProductCard, Seo, etc.) 
├── context/ # AuthContext y CartContext 
├── pages/ # Home, Productos, DetalleProducto, Checkout, Login, AdminProductos
├── services/ # mockApiService.js y productsService.js
└── main.jsx # Entrada principal con providers y rutas

## ⚙️ Instalación y uso local
1. Clonar este repositorio:
```bash
git clone https://github.com/tu-usuario/mi-tienda-online.git
cd mi-tienda-online
1. Clonar este repositorio:
```bash
git clone https://github.com/tu-usuario/mi-tienda-online.git
cd mi-tienda-online
2.Instalar dependencias:
npm install
3.Iniciar servidor de desarrollo:
npm run dev
4.Configurá tu base de datos en mockApiService.js:
const API_BASE = 'https://tu-url.mockapi.io';
📸 Vista previa
Incluí capturas de pantalla si lo vas a mostrar en GitHub o portafolio.
📬 Contacto
> Hecho con 💚 por Sandra > ¡Gracias por visitar mi proyecto!



