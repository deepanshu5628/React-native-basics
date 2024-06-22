import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
function Project3({navigation}) {
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
      <View className='my-1'>
        <Text className="text-3xl">List with Map function</Text>
        <Button title='Go to fourth Screen ' onPress={()=>navigation.navigate("fourth")} />
        {/* list */}
        <View className='my-1'>
          {
            names.map((item,index)=>(
              <Text key={index} className="text-4xl text-center">{item}</Text>
            ))
          }
        </View>
      </View>
    </ScrollView>
  );
}

export default Project3;
