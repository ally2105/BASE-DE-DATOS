## 📚 Gestor de facturacion
El Sistema de Gestión de facturacion es una aplicación diseñada para optimizar la administración de usuarios, libros y préstamos.
Cuenta con un backend robusto desarrollado en Node.js y Express, una base de datos en MySQL, y un frontend ligero y funcional alojado en la carpeta app.

## 🚀 Tecnologías y herramientas
Área Tecnologías
Backend Node.js, Express.js
Base de Datos MySQL
Frontend HTML5, CSS3, JavaScript
Herramientas Vite, csv-parser

## 📂 Estructura del proyecto
bash
Copiar
Editar
biblioteca/
│
├── docs/ # Documentación
├── app/ # Frontend (HTML, CSS, JS)
├── server/ # Backend (Node.js + Express)
├── index.html # Página principal
├── .env # Variables de entorno
├── .gitignore
└── README.md

## ✨ Características principales
📖 Gestión de libros: registro, edición y eliminación.

👥 Administración de usuarios: creación y control de usuarios.

📅 Control de préstamos: seguimiento de libros prestados y devueltos.

📂 Importación de datos desde CSV para carga masiva de información.

🌐 Interfaz web intuitiva y adaptable.

## ⚙️ Instalación y configuración
1.  Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/jcomte23/biblioteca-easy.git
cd biblioteca
2. Instalar dependencias
bash
Copiar
Editar
npm install
3. Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto con la siguiente configuración:
env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=db_name
DB_PORT=3306
4.  Iniciar el backend
bash
Copiar
Editar
node server/index.js
5.  Iniciar el frontend
bash
Copiar
Editar
npm run dev

## 📄 Licencia
Este proyecto está distribuido bajo la licencia MIT, lo que permite su uso, modificación y distribución libre.
