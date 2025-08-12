/*se encarga de cargar los clientes a la base de datos*/
import fs from "fs"; // es la que me permite leer archivos
import path from "path"; // esta muestra la ruta actual
import csv from "csv-parser"; // librería para leer archivos CSV y convertirlos en objetos JavaScript
import { pool } from "../conexion_db.js"; // conexión a la base de datos MySQL

// Función asíncrona que carga los clientes desde un archivo CSV y los inserta en la base de datos
export async function cargarclientesAlaBaseDeDatos() {
  // Obtiene la ruta absoluta del archivo CSV que contiene los clientes
  const rutaArchivo = path.resolve("server/data/01_clientes.js");
  const clientes = []; // Arreglo donde se almacenarán los clientes leídos

  // Retorna una promesa para manejar el flujo asíncrono
  return new Promise((resolve, reject) => {
    // Crea un flujo de lectura del archivo CSV
    fs.createReadStream(rutaArchivo)
      .pipe(csv()) // Convierte el contenido CSV a objetos JavaScript fila por fila
      .on("data", (fila) => {
        // Por cada fila leída...
        clientes.push([
          // Se agrega un arreglo con los datos de cada libro
          fila.id_cliente,
          fila.nombre_del_cliente.trim(), // Elimina espacios extra del título
          fila.numero_de_identificacion,
          fila.direccion,
          fila.telefono,
          fila.correo.electronico
        ]);
      })
      .on("end", async () => {
        // Cuando termina de leer todo el archivo
        try {
          // Consulta SQL para insertar múltiples registros en la tabla clientes
          const sql =
            "INSERT INTO clientes (isbn,titulo,anio_de_publicacion,autor) VALUES ?";

          // Ejecuta la consulta usando el pool de conexiones
          const [result] = await pool.query(sql, [clientes]);

          console.log(`✅ Se insertaron ${result.affectedRows} clientes.`);
          resolve(); // Indica que la operación fue exitosa
        } catch (error) {
          console.error("❌ Error al insertar clientes:", error.message);
          reject(error); // Rechaza la promesa si hay error en la inserción
        }
      })
      .on("error", (err) => {
        // Si ocurre un error al leer el archivo CSV
        console.error(
          "❌ Error al leer el archivo CSV de clientes:",
          err.message
        );
        reject(err); // Rechaza la promesa
      });
  });
}
