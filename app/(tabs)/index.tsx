import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Directions, ScrollView } from 'react-native-gesture-handler';
import Carrossel from '../carrosel';
import Promo from '../promo';
import Restaurantes from '../restaurantes-indicados';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png' }} style={
            styles.imagem
          }></Image>
          <Text style={styles.titulo}>Restaurantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Mercados_SMx3.png?imwidth=256' }} style={
            styles.imagem}>

          </Image>
          <Text style={styles.titulo}>Mercados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Mercados_SMx3.png?imwidth=256' }} style={
            styles.imagem}>

          </Image>
          <Text style={styles.titulo}>Club Ifood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Farmacia_4vdM.png?imwidth=256' }} style={
            styles.imagem}>
          </Image>
          <Text style={styles.titulo}>Farmacias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>

        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Pet_NsoQ.png?imwidth=256' }} style={
            styles.imagem}>
          </Image>
          <Text style={styles.titulo}>Pet Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Mercados_SMx3.png?imwidth=256' }} style={
            styles.imagem}>
          </Image>
          <Text style={styles.titulo}>Express</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/Bebidas_X9kU.png?imwidth=256' }} style={
            styles.imagem}>
          </Image>
          <Text style={styles.titulo}>Bebidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.caixa}>
          <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/discoveries/floreseperfume_LOhx.png?imwidth=256' }} style={
            styles.imagem}>
          </Image>
          <Text style={styles.titulo}>Shopping</Text>
        </TouchableOpacity>
      </View>
      <Carrossel></Carrossel>
      <Promo></Promo>
      <Restaurantes></Restaurantes>
    </ScrollView>




  );
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:'white'
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 115,
    backgroundColor: 'white',

  },

  imagem: {
    width: '70%',
    height: '50%'
  },
  caixa: {

    backgroundColor: '#F5F5F5',
    width: '25%',
    borderRadius: 8,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'black'
  }
});
