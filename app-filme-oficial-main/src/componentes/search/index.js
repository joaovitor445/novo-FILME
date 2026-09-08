import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';

export default function Search () {
    return (

        <View style = {styles.containerSearch}>

            <TextInput 
                placeholder='Digite o filme que deseja buscar'
                style = {styles.inputSearch}
            ></TextInput>

            <TouchableOpacity>
                <AntDesign name="search" size={24} color="black" />
            </TouchableOpacity>

        </View>
    );
};