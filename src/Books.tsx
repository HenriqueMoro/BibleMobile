import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from './context/Context';

const DATA = require('./nvi.json')
export default function Books(){
    const {getChapter} = useContext(Context)

    


    return(
        <FlatList  data={DATA}
                        keyExtractor={(book:any) =>String(book.abbrev)}
                        //onRefresh={refresh}
                        //refreshing={loading}
                        
                        //onEndReached={getBooks}
                        onEndReachedThreshold={0.2}
                        
                        renderItem={({item:book,index})=>(
                            <View style={styles.card}>
                                
                                
                            </View>
            )}/>
    )
}