// lib/waterQualityDataSource.ts
import { supabase } from './supabase'; // Asegúrate de importar la conexión a Supabase

export const getWaterQualityData = async () => {
  try {
    const { data, error } = await supabase
      .from('water_quality') // Nombre de la tabla
      .select('*') // Selecciona todos los campos
      .order('timestamp', { ascending: false }); // Ordena por el campo de fecha (timestamp)

    if (error) {
      throw new Error('Error al obtener los datos de calidad del agua');
    }

    // Verifica si se han recibido datos
    return data ? data : []; // Devuelve todos los registros si hay datos
  } catch (error) {
    console.error(error);
    throw new Error('Hubo un problema con la conexión');
  }
};
