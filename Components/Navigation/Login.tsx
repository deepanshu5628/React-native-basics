import {View, Text, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  let [name,setname]=useState("");
  let [pass,setpass]=useState("");
  return (
    <View className="flex-1 justify-center bg-gray-700">
      <View className='flex-col gap-5 my-3'>
        <TextInput
          className="border-2 border-white"
          placeholder="enter  name"
          value={name}
          onChangeText={(text)=>setname(text)}
        />
        <TextInput
          className="border-2 border-white"
          secureTextEntry={true}
          placeholder="enter password"
          value={pass}
          onChangeText={(text)=>setpass(text)}
        />
      </View>
      <Button title="Login"  />
    </View>
  );
}
