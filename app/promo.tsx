import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function promocoes() {


    return (
        <View>
            <View style={styles.caixa}>
                <Text>Promoções com entrega grátis</Text>
                <Text style={styles.verMais}>Ver mais</Text>
            </View>
            <ScrollView>
                <View>
                     <Image src='https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png' style={
                               styles.background
                             }></Image> <Text>Tá na Mão - Mini Market - Express</Text>
                    <Text> 50-60 min sdfdsf</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
    width:'100%',
height:100
    },
    caixa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    verMais: {
        color: 'red'
    }

});
