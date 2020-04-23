import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedbac, TouchableOpacity, Linking, FlatList } from 'react-native';

function SettingScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity  onPress={() =>navigation.navigate("Drawer")}>
               <Image 
                  source={require('../img/btn_navbar_mobile.png')
                }
                    style={{width:50,height:50,marginLeft:8,marginTop:8,backgroundColor:"black"}}
                    />
                </TouchableOpacity>
      </View>
    );
  }
  export default SettingScreen;