import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Project10() {
  let skills = [
    {
      id: 1,
      name: 'c',
    },
    {
      id: 2,
      name: 'c++',
    },
    {
      id: 3,
      name: 'java',
    },
    {
      id: 4,
      name: 'python',
    },
    {
      id: 5,
      name: 'Java Script',
    },
    {
      id: 7,
      name: 'nOde ',
    },
    {
      id: 6,
      name: 'Mongodb',
    },
  ];
  let [radiobtn, setradiobtn] = useState(1);
  return (
    <View className='flex-col  bg-pink-800 gap-9 justify-evenly'>
      <View className="">
        {/* btn 1 */}
        <TouchableOpacity
          onPress={() => setradiobtn(1)}
          className="flex-row align-middle gap-3">
          <View className="h-10 w-10 bg-pink-600  rounded-full">
            {radiobtn === 1 ? (
              <View className="h-8 w-8 bg-white m-1 rounded-full"></View>
            ) : null}
          </View>
          <Text className="text-3xl">Head</Text>
        </TouchableOpacity>
        {/* btn 2 */}
        <TouchableOpacity
          className="flex-row align-middle gap-3"
          onPress={() => setradiobtn(2)}>
          <View className="h-10 w-10 bg-pink-600  rounded-full">
            {radiobtn === 2 ? (
              <View className="h-8 w-8 bg-white m-1 rounded-full"></View>
            ) : null}
          </View>
          <Text className="text-3xl ">Tail </Text>
        </TouchableOpacity>
      </View>
      {/* dhynamic btns */}
      <View>
        <Text  className='text-center text-4xl my-6'>Dhynmic Buttons</Text>
        {skills.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>setradiobtn(item.id)}>
            <View className='flex-row justify-center gap-6 '>
              <View className='h-12 w-12 bg-white rounded-full'>
               { radiobtn===item.id? <View className='h-8 w-8 bg-black rounded-full m-auto'></View>:null}
              </View>
              <Text className='w-[20%]'>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
