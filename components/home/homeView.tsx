// screens/Home.tsx
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import { getWaterQualityData } from '@/lib/waterQualityDataSource'; // Importa la función
import WaterQualityItem from './water_quality/WaterQualityItem';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Home(){
  const [waterQualityData, setWaterQualityData] = useState<any[]>([]); //El array solo puede contener elementos que cumplan con la estructura definida
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWaterQualityData = async () => {
      try {
        const data = await getWaterQualityData(); // Llamada a la función para obtener los datos desde el item
        setWaterQualityData(data);
      } catch (error) {
        console.error('Error al obtener los datos de calidad del agua:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWaterQualityData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Muestra el cargador mientras se obtienen los datos
  }

  if (waterQualityData.length === 0) {
    return <Text>No se encontraron datos de calidad del agua</Text>;
  }

  return (
    <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor='#1a1a2e' hidden={false} />
       <Text style={styles.title}>CALIDAD DE AGUA</Text>
      {waterQualityData.map((data, index) => (
        <WaterQualityItem
          key={index}
          pond_name={data.pond_name}
          ph_level={data.ph_level}
          oxygen_level={data.oxygen_level}
          temperature={data.temperature}
          timestamp={data.timestamp}
        />
      ))}
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1a1a2e", 
    alignItems:"center"
  },
  title: {
    fontSize:30,
    fontStyle:"italic",
    color:"white",
    fontWeight:"bold",
    margin:10,
  }
})
