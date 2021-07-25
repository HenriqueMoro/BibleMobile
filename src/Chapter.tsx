import React,{useContext} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity,Dimensions,StatusBar } from 'react-native';
import Context from './context/Context';
import {useNavigation} from '@react-navigation/native'


const DATA = require('./nvi.json')
const screenWidth = Dimensions.get('screen').width
const statusHeight = StatusBar.currentHeight 


export default function Chapter(){
    
    const {book,getChapter} = useContext(Context)
    
    const Chp = DATA[book].chapters

    const navigation = useNavigation()

    async function handleClick(index:number){
        await getChapter(index)
        navigation.navigate('Verse')

    }
    
    return(
        <View style={{flex:1,marginTop: statusHeight}}>
            <View style={{justifyContent:'center',alignItems:'flex-start',padding:10}}>
                <Text style={{fontSize:25}}>{DATA[book].name}</Text>
            </View>
            <FlatList  data={Chp}
                        keyExtractor={(book:any) =>String(book)}
                        //onRefresh={refresh}
                        numColumns={5}
                        //refreshing={loading}
                        
                        //onEndReached={getBooks}
                        onEndReachedThreshold={0.2}
                        
                        renderItem={({item:book,index})=>(
                            
                                <TouchableOpacity style={styles.card} onPress={()=>handleClick(index)}>
                                    <Text style={{fontSize:25}}>{index + 1}</Text>
                                </TouchableOpacity>
                                
                            
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'center',
        margin: 1,
        backgroundColor: "white",
        //borderRadius: 15,
        paddingHorizontal:15,
        paddingVertical:10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxWidth: (screenWidth/5)-2,
        height:screenWidth/5,
        
    }
  })