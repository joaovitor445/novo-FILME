import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';

export default function Header () {
    return (

        <View style={styles.viewHeader}>
        
            <AntDesign name="menu" size={24} color="white" />
            <Text style={styles.textHeader}>TEC FILMES</Text>
        
        
            <TouchableOpacity>
        
            </TouchableOpacity>
            
        </View>
        
    );
};