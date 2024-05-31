import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { estilos } from '../Utilities/Estilos'
import CustomText from '../Utilities/CustomText'
import Header from '../Utilities/Header'
import SystemProfile from '../Contexts/SystemContext'
import { useNavigation } from '@react-navigation/native'
import UserProfile from '../Contexts/UserContext'
import { windowWidth } from '../Utilities/Dimensions'
import moment from 'moment'
import meusMomentosIco from '../assets/meusMomentos.png'
import novoRegistroIco from '../assets/novoRegistro.png'
import AutoHeightImage from 'react-native-auto-height-image'

const Dashboard = () => {
    const [userData, setUserData] = useContext(UserProfile)
    const [systemData, setSystemData] = useContext(SystemProfile)
    const navigation = useNavigation()

    const myMoments = userData.moments
    const registers = userData?.register
    const reg = (registers?.length)-1

  return (
    <View style={estilos.container}>
        
        <Header />
    {registers ?
    <>
        <View style={[styles.ultimaMedicao]}>
            <CustomText style={[styles.meusMomentosTit, {marginTop: -15, marginHorizontal: 70}]}>última medição</CustomText>
        </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={styles.lastValue}>
                <CustomText style={{color: '#6d0000', fontSize: 70, fontFamily: 'Quicksand_700Bold'}}>{registers[reg].value}</CustomText>
                <CustomText style={{fontFamily: 'Quicksand_700Bold', textAlign: 'right'}}>mg/dL</CustomText>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <CustomText style={{fontFamily: 'Quicksand_700Bold', fontSize:40}}>{moment(registers[reg].date).format('HH:mm')}</CustomText>
                <CustomText style={{fontFamily: 'Quicksand_700Bold'}}>{moment(registers[reg].date).format('DD/MM/YYYY')}</CustomText>
                <CustomText style={{fontFamily: 'Quicksand_700Bold', fontSize: 14}}>{registers[reg].moment}</CustomText>
            </View>
        </View>
    </>
    : 
        <View style={[styles.meusMomentos, {marginTop: 30}]}>
            <CustomText style={{textAlign: 'center', color: '#44444491'}}>
                Nenhum registro de glicemia encontrado.
            </CustomText>
        </View>
    }

      <TouchableOpacity onPress={()=>{navigation.navigate('CreateMoments')}} style={[estilos.botao, styles.meusMomentosBt]}>
        <AutoHeightImage source={meusMomentosIco} width={30} />
        <CustomText style={{color: '#ffffff'}}>definir momentos diários</CustomText>
      </TouchableOpacity>

      <View style={styles.meusMomentos}>
        <View>
            <CustomText style={styles.meusMomentosTit}>momentos diários</CustomText>
        </View>
        {myMoments ? myMoments.map((mom, index)=>(
            <View key={index}>
                <CustomText style={estilos.texto}>{mom.moment}</CustomText>
            </View>
        )) : <CustomText style={estilos.texto}>
                Não há momentos específicos definidos.{'\n'}
                Você pode criar um registro livre ou{'\n'}determinar os seus momentos diários{'\n'}de registro.
            </CustomText>}
      </View>

      <TouchableOpacity onPress={()=>{navigation.navigate('Register')}} style={[estilos.botao, styles.novoRegistroBt]}>
        <AutoHeightImage source={novoRegistroIco} width={30} />
        <CustomText style={{color: '#ffffff', fontSize: 20}}>criar um novo registro</CustomText>
      </TouchableOpacity>

    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    ultimaMedicao: {
        borderTopWidth: 2,
        borderTopColor: '#44444430',
        width: windowWidth-80,
        marginTop: 40,
        marginBottom: 15
    },
    meusMomentos: {
        borderWidth: 2,
        borderColor: '#44444430',
        borderRadius: 15,
        padding: 20,
        width: windowWidth-80
    },
    meusMomentosTit: {
        color: '#a70a00',
        fontSize: 20,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        marginHorizontal: 40,
        marginTop: -35,
    },
    meusMomentosBt: {
        backgroundColor: '#3f3f3f', 
        borderColor: '#000000',
        marginVertical: 30,
        borderRadius: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    novoRegistroBt: {
        backgroundColor: '#006808', 
        borderColor: '#005106',
        paddingTop: 15,
        paddingBottom: 20,
        marginTop: 30, 
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    lastValue: {
        backgroundColor: '#e9e9e9',
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingBottom: 15,
    }
})