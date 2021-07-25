import React,{useContext} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity,Dimensions,StatusBar } from 'react-native';
import Context from './context/Context';
import {useNavigation} from '@react-navigation/native'

const DATA = require('./nvi.json')
const screenWidth = Dimensions.get('screen').width
const statusHeight = StatusBar.currentHeight 

export default function Books(){
    const {getBook} = useContext(Context)
    const navigation = useNavigation()
    
     function handleClick(index:number){
        getBook(index)
        navigation.navigate('Chapter')
       
    }
    


    return(
        <View style={{flex:1,marginTop: statusHeight,backgroundColor:"#f2f2f2"}}>
            <View style={{justifyContent:'center',alignItems:'flex-start',padding:10}}>
                <Text style={{fontSize:25}}>Biblia NVI</Text>
            </View>
            <FlatList  data={DATA}
                        keyExtractor={(book:any) =>String(book.abbrev)}
                        //onRefresh={refresh}
                        //refreshing={loading}
                        numColumns={2}
                        //onEndReached={getBooks}
                        onEndReachedThreshold={0.2}
                        
                        renderItem={({item:book,index})=>(
                            
                                <TouchableOpacity style={styles.card} onPress={()=>handleClick(index)}>
                                    <View style={{flex:2,justifyContent:'flex-end',alignItems:'center'}}>
                                        <Text style={{fontSize:60,color:'black'}}>{book.abbrev}</Text>
                                    </View>

                                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                        <Text style={styles.text}>{book.name}</Text>
                                    </View>
                                </TouchableOpacity>
                                
                            
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
  card:{
    alignSelf:"flex-start",
        flex:1,    
        margin: 1,
        
        backgroundColor: "white",
        //borderRadius: 15,
        paddingHorizontal:15,
        paddingVertical:10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
        height:(screenWidth/2)-20,
        
        
  },
  text:{
      fontSize:20,
      color:'black'

  }
})