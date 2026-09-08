import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Header from './src/componentes/header';
import Search from './src/componentes/search';
import Banner from './src/componentes/banner';
import Movies from './data/movies';
import CardMovies from './src/componentes/CardMovies';

export default function App () {
  return (

    <View style={styles.container}>

      <Header></Header>
      <Search></Search>
      <Banner></Banner>

      <View style={{width:'90%'}}>

        <FlatList 
          showsVerticalScrollIndicator= {false}
          horizontal = {true}
          data = {Movies}
          keyExtractor = {(item)=> item.id}
          
          renderItem = {({item}) => (
            <CardMovies
            titulo={item.nome}
            imagem={item.imagem}
            nota={item.nota}
            
            
            
            />

         

        )}

        />

      </View>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89abfe',
    alignItems: "center",
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }


});

