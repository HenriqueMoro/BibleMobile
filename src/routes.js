import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Books from './Books';
import Chapter from './Chapter';
import Verse from './Verse';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
           
           <Stack.Screen name="Books" component={Books}/>
           <Stack.Screen name="Chapter" component={Chapter}/>
           <Stack.Screen name="Verse" component={Verse}/>
           
        </Stack.Navigator>

    
    );}