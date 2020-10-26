import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Users" component={Users}/>
                <AppStack.Screen name="User Detail" component={UserDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};