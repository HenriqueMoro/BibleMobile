import React,{useContext} from 'react';
import { View,Text, TouchableOpacity,Dimensions,FlatList,StyleSheet,StatusBar } from 'react-native'
import Context from './context/Context';


const DATA = require('./nvi.json')

export default function Verse(){
    const {chapter,book} = useContext(Context)
    const verse = DATA[book].chapters[chapter]
    
    return(
        <View style={{flex:1}}>
            <View style={{justifyContent:'center',alignItems:'flex-start',padding:10}}>
                <Text style={{fontSize:25}}>Biblia NVI</Text>
            </View>
            <FlatList
                data={verse}
                keyExtractor={(chapter:any) =>String(chapter)}
                onEndReachedThreshold={0.2}
                renderItem={({item:chapter,index})=>(
                    <View style={styles.card}>
                        <Text style={styles.text}>{index+1}. {chapter}</Text>
                    </View>
                )}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    card:{
        marginVertical:5,
        padding:10
        
    },
    text:{
        fontSize:20
    }
  })