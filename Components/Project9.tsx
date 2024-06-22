import { View, Text, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Project9() {
  return (
    <View>
      <Text className='m-3 text-center text-3xl'>Plating with Buttons</Text>
        <Pressable onPress={()=>console.log("red btn pressed")}><Text className='p-3 m-3 text-center bg-red-700'>Click me </Text></Pressable>
        <Pressable onPress={()=>console.log("bue btn pressed")}><Text className='p-3 m-3 text-center bg-blue-700'>Click me </Text></Pressable>
        <Pressable  onPress={()=>console.log("green btn pressed")}><Text className='p-3 m-3 text-center bg-green-700'>Click me </Text></Pressable>
        <Pressable disabled={true}  onPress={()=>console.log("yelow btn pressed")}><Text className='p-3 m-3 text-center bg-yellow-700'>Click me </Text></Pressable>
        <ActivityIndicator animating={true} size={'large'} color={"red"}/>
        <TouchableOpacity><Text className='p-3 m-3 text-center bg-green-700' >opacity</Text></TouchableOpacity>
    </View>
  )
}