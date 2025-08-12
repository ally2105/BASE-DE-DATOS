import dotenv from "dotenv"; // Librería para manejar variables de entorno desde un archivo .env
import mysql from "mysql2/promise"; // Cliente MySQL compatible con promesas

dotenv.config(); // Carga las variables de entorno definidas en el archivo .env

// Crea un pool (grupo) de conexiones para optimizar el acceso a la base de datos
export const pool = mysql.createPool({
  host: "127.0.0.1", // Dirección del servidor de la base de datos
  database: "gestion_pagos", // Nombre de la base de datos
  port: 3306, // Puerto de conexión
  user: "root", // Usuario para la conexión
  password: "Qwe.123*", // Contraseña del usuario
  connectionLimit: 10, // Máximo número de conexiones simultáneas
  waitForConnections: true, // Esperar si se alcanzó el límite de conexiones
  queueLimit: 0, // Número máximo de solicitudes en espera (0 = sin límite)
});

// Función para probar si la conexión a la base de datos funciona correctamente
async function probarConexionConLaBaseDeDatos() {
  try {
    // Obtiene una conexión del pool
    const connection = await pool.getConnection();
    console.log("Conexión a la base de datos exitosa");

    // Libera la conexión para que pueda ser reutilizada
    connection.release();
  } catch (error) {
    // Muestra el error si la conexión falla
    console.error("Error al conectar con la base de datos:", error.message);
  }
}
