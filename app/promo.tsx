import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function promocoes() {


    return (
        <View>
            <View style={styles.caixa}>
                <Text>Promoções com entrega grátis</Text>
                <Text style={styles.verMais}>Ver mais</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.caixa}>
                    <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202302141452_552T_i.jpg' }} style={
                        styles.background}>
                    </Image> 

                <Text>
                    <Text>Tá na Mão - Mini Market - Express</Text>
                {"\n"}
                <Text style={styles.span}> 50-60 min sdfdsf</Text>
                </Text>
                </View>
                <View style={styles.caixa}>
                    <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202302141452_552T_i.jpg' }} style={
                        styles.background}>
                    </Image> 

                <Text>
                    <Text>Tá na Mão - Mini Market - Express</Text>
                {"\n"}
                <Text style={styles.span}> 50-60 min sdfdsf</Text>
                </Text>
                </View>
                <View style={styles.caixa}>
                    <Image source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202302141452_552T_i.jpg' }} style={
                        styles.background}>
                    </Image> 

                <Text>
                    <Text>Tá na Mão - Mini Market - Express</Text>
                {"\n"}
                <Text style={styles.span}> 50-60 min</Text>
                </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        width: 120,
        height: 100
    },
    caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        gap:'20px',
        padding: 10
    },
    span:{
        color:'#3C9363'
    },
    verMais: {
        color: 'red'
    }

});
