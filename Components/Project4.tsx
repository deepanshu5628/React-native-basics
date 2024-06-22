import React from 'react';
import {View, Text, ScrollView, FlatList,Button} from 'react-native';
function Project4({navigation}) {
  let names = [
    'Deepa',
    'ansh',
    'abhi',
    'sanjev',
    'aashish',
    'ayush',
    'Vipin',
    'abhi',
    'sanjev',
    'aashish',
    'ayush',
    'Vipin',
    'abhi',
    'sanjev',
    'aashish',
    'ayush',
    'Vipin',
    'abhi',
    'sanjev',
    'aashish',
    'ayush',
    'Vipin',
  ];
  return (
    <ScrollView>
      <View className='my-2'>
        <Text className='text-3xl text-center'>Making A Dynamic Grid</Text>
        <Button title="go to fifth sCreen" onPress={()=>navigation.navigate("fifth")}/>
        <Button title="go to home" onPress={()=>navigation.popToTop()}/>
        {/* Grid */}
        <View className='bg-pink-800 flex-row flex-wrap  '>
        {
          names.map((item,index)=><View key={index} className='h-28 w-28 m-2 flex-row  bg-green-400 '><Text  className='text-center  flex-1  bg-red-500'>{item}</Text></View>)
        }
        </View>
      </View>
    </ScrollView>
  );
}
export default Project4;