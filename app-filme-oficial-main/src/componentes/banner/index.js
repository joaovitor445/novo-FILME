import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';

export default function Banner () {
    return (

        <>

            <Text style = {styles.textBanner}> Em cartaz </Text>

            <Image
                source={require("../../../assets/como-magica.jpg")}
                style = {styles.imageBanner}
            ></Image>

        </>

    );
};