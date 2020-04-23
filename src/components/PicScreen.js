import React from "react";
import { View, FlatList } from "react-native";

import albumData from "../json/albums.json";
import AlbumDetail from "./AlbumDetail";

const PicScreen = ({navigation}) => {
  return (
    <View style={{flex: 1,}}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => <AlbumDetail album={item} navigation={navigation} />}
      keyExtractor={item => item.title}
      />
    </View>
      
  );
};
export default PicScreen;