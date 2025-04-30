import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

const { width } = Dimensions.get('window');

const imagens = [
  { id: '1', url: 'https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-1.png' },
  { id: '2', url: 'https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-2.png' },
  { id: '3', url: 'https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-3.png' },
];

export default function CarrosselComDots() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndiceAtual(slide);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.imagem} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <View style={styles.dots}>
        {imagens.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              indiceAtual === index && styles.dotAtivo,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop:20,
    height: 220,
  },
  imagem: {
    width: width,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 30
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotAtivo: {
    backgroundColor: '#333',
    width: 10,
    height: 10,
  },
});
