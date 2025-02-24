// lib/userDataSource.ts
import { supabase } from './supabase';  // Importas la instancia de Supabase

// Otro caso de uso: Validar si la contraseña existe
export const validatePassword = async (password: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('password', password)  //COMPARA LAS CONTRASEÑAS
      .single();

    if (error) {
      throw new Error('No se pudo validar la contraseña'); //ERROR AL HACER LA CONSULTA EN SUPABASE
    }

    return data ? 'Contraseña correcta' : 'Contraseña incorrecta';  // MENSAJE QUE DEVUELVE
  } catch{}
};
