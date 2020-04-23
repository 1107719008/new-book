import React from "react";
import Header from "./src/components/Header";
import AlbumDetail from "./src/components/AlbumDetail";
import albumData from "./src/json/albums.json";
import CustomDrawerContent from "./src/components/CustomDrawerContent";
import MeScreen from "./src/components/MeScreen";
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { createStackNavigator,DrawerActions } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedbac, TouchableOpacity, Linking, FlatList } from 'react-native';
import NewDrScreen from "./src/components/NewDrScreen";
import SettingScreen from "./src/components/SettingScreen";
import PicScreen from "./src/components/PicScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}
const Tab = createBottomTabNavigator();
function Page() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FirstStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/icon_bottomnav_home_seleced.png?raw=true" }} style={{ height: 24, width: 24 }} />
              : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_home.png?raw=true" }} style={{ height: 24, width: 24 }} />
          )
        }}
      />
      <Tab.Screen name="My Book" component={PicScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_mybook_selected.png?raw=true" }} style={{ height: 24, width: 24 }} />
              : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/icon_bottomnav_mybook.png?raw=true" }} style={{ height: 24, width: 24 }} />
          )
        }}
      />
      <Tab.Screen name="Me" component={MeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/icon_bottomnav_favorites_seleced.png?raw=true" }} style={{ height: 24, width: 24 }} />
              : <Image source={{ uri: "https://github.com/1107719008/material-icon/blob/master/img/icon_bottomnav_favorites.png?raw=true" }} style={{ height: 24, width: 24 }} />
          )
        }}
      />
    </Tab.Navigator>

  )
}

const Stack = createStackNavigator();
const FirstStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PicScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require('./src/img/btn_navbar_mobile.png')}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              style={{ width: 40, height: 40, margin: 10 }}
              source={require('./src/img/btn_search.png')}
            />
          ),
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#00b49f",

          },
        }}
      />
      {/* <Stack.Screen name="Drawer" component={NewDrScreen}
        options={{ title: null }}
      /> */}
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
          drawerContentOptions={{
            activeBackgroundColor: '#00b49f',
            activeTintColor: '#fff',
            inactiveTintColor: '#5c5c5c',
            itemStyle: { marginLeft: 0, marginRight: 0},
            labelStyle: { fontSize: 20 },
          }}
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={Page}
         options = {{
          drawerIcon : ({focused})=>(
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_home_pressed.png?raw=true" }} style={styles.bh}  />
            : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_home.png?raw=true"}} style={styles.bh}  /> 
          )
        }}
        />




      </Drawer.Navigator>
    </NavigationContainer>

  );

};

export default App;
