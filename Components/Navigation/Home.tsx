import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  // let {name,pass}=route.params;
  return (
    <View>
      <Text className='text-4xl text-black'>Heelo g  </Text>
      <Button title='Go to login again '  onPress={()=>navigation.navigate("sett")} />
    </View>
  )
}