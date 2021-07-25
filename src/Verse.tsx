import React,{useContext,useState,useEffect} from 'react';
import { View,Text, TouchableOpacity,Dimensions,FlatList,StyleSheet,StatusBar } from 'react-native'
import Context from './context/Context';
import {useNavigation} from '@react-navigation/native'
//import DATA from './nvi.json'


const DATA = require('./nvi.json')

export default function Verse(){
    const {chapter,book} = useContext(Context)
    const [chapters,setChapters] = useState(chapter)
    const [verse,setVerse] = useState([])
    const [loading,setLoading] = useState(false)
    const navigation = useNavigation()
    
    
    
    useEffect(()=>{
        setVerse(DATA.[book].chapters[chapters])
        console.log(DATA[book].chapters.length)
        console.log(DATA)
    },[chapters])
    
    const statusHeight = StatusBar.currentHeight
    const screenWidth = Dimensions.get('screen').width
    
    
     async function handleNext(){
        if(chapters+1 < DATA[book].chapters.length ){
            setLoading(true)
            await setChapters(chapters+1)
            setLoading(false)
        }
    }

    async function handleBack(){
        
        if(chapters>0){
            setLoading(true)
            await setChapters(chapters-1)
            setLoading(false)
        }
    }


    
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',marginTop:statusHeight,backgroundColor:'#f2f2f2',justifyContent:'space-between',width:screenWidth,height:40}}>
                <TouchableOpacity style={{flex:1,alignItems:'center',borderRightWidth:1,borderColor:'#5a5a7a',alignSelf:'center'}} onPress={handleBack}><Text style={styles.text}>{'<'}</Text></TouchableOpacity>
                <TouchableOpacity style={{flex:3,alignItems:'center',borderRightWidth:1,borderColor:'#5a5a7a',alignSelf:'center'}} onPress={()=>{navigation.navigate('Books')}}><Text style={styles.text}>{DATA[book].name}</Text></TouchableOpacity>
                <TouchableOpacity style={{flex:1,alignItems:'center',borderRightWidth:1,borderColor:'#5a5a7a',alignSelf:'center'}} onPress={()=>{navigation.navigate('Chapter')}}><Text style={styles.text}>{chapters+1}</Text></TouchableOpacity>
                <TouchableOpacity style={{flex:1,alignItems:'center',alignSelf:'center'}} onPress={handleNext}><Text style={styles.text}>{'>'}</Text></TouchableOpacity>

            </View>
            
            
            <FlatList
                
                data={verse}
                keyExtractor={(chapter:any,index) =>String(index)}
                onEndReachedThreshold={0.2}
                refreshing={loading}
                renderItem={({item:chapter,index})=>(
                    <TouchableOpacity style={{marginVertical:5,padding:10,}} onPress={()=>{}}>
            
                        <Text style={styles.text}>{index+1}. {chapter}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    card:{
        marginVertical:5,
        padding:10,
        
        
    },
    text:{
        fontSize:20
    }
  })