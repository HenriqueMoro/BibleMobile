import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Books from './Books';






const Stack = createStackNavigator();

export default function Routes(){
    return(
        
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Books" component={Books}/>
           
            
        </Stack.Navigator>

    
    );}