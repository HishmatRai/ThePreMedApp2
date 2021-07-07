import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Login,
    SignUp,
    Home,
    Progress,
    MyMentor,
    Calendar,
    Focus
} from './../Screens/index';
const Stack = createStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Progress" component={Progress} options={{ headerShown: false }} />
                <Stack.Screen name="MyMentor" component={MyMentor} options={{ headerShown: false }} />
                <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
                <Stack.Screen name="Focus" component={Focus} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;