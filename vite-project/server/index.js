
import cors from "cors"; // Permite habilitar el intercambio de recursos entre distintos orígenes (CORS)
import express from "express"; // Framework para crear aplicaciones web y APIs en Node.js
import { pool } from "./conexion_db.js"; // Importa el pool de conexión a MySQL

const app = express();
app.use(cors()); // Permite que la API sea consumida desde un frontend alojado en otro dominio o puerto
app.use(express.json()); // Habilita la lectura automática de cuerpos de peticiones con formato JSON

