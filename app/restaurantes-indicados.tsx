import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Restaurantes() {
    return (
        <View>
            <View style={style.caixa}>
                <Text>Cupom e entrega grátis{'\n'}
                    <Text>Use seu cupom aqui</Text>
                </Text>
                <Text style={style.verMais}>ver mais</Text>

            </View>
            <View style={style.Restaurantes}>
                <Image style={style.imagem} source={{uri:'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/1c20bb80-8d1b-463e-9157-781e893816ef/202407301931_IPDN.png'}}></Image>
                <Image style={style.imagem} source={{uri:'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/87fa4249-9190-4b67-a7a4-0bbd1f6749bf/202009211133_fmJZ_i.jpg'}}></Image>
                <Image style={style.imagem} source={{uri:'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/524c1b6e-cbe7-476b-85d2-53c2cc9f5842/202007141044_Fa8p_.jpeg'}}></Image>
                <Image style={style.imagem} source={{uri:'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/73d77143-3cac-4206-a142-39c5bb1484e2/202408251246_MUR0.png'}}></Image>
                <Image style={style.imagem} source={{uri:'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/a63669c8-b5bf-49cb-9de0-e09c1d19daaf/202304260918_BjnQ_i.jpg'}}></Image>

            </View>
        </View>
    );
}

const style = StyleSheet.create({
    imagem:{
        width:65,
        height:65,
        borderRadius: 60
    },
    verMais: {
        color: 'red'
    },
    Restaurantes:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
        marginTop:20
    },
    caixa: {
        display: 'flex',
        gap:10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})