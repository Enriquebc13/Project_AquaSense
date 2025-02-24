import { supabase } from './supabase'; 

export const getWaterQualityData = async () => {
  try {
    const { data, error } = await supabase
      .from('water_quality') 
      .select('*') 
      .order('timestamp', { ascending: false }); 

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
