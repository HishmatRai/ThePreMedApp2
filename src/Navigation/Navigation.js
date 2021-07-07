import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
    Login,
    SignUp,
    Home,
    Progress,
    MyMentor,
    Calendar,
    Focus,
    Onboarding,
    DrawerContent
} from './../Screens/index';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// DRAWER NAVIGATOR
function HomeDrawer() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}  
            >
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Drawer.Screen name="Onboarding" component={Onboarding} />
      </Drawer.Navigator>
    );
  }
function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Progress" component={Progress} options={{ headerShown: false }} />
                <Stack.Screen name="MyMentor" component={MyMentor} options={{ headerShown: false }} />
                <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
                <Stack.Screen name="Focus" component={Focus} options={{ headerShown: false }} />
            
                <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;