import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
function Project1({navigation}) {
  let [showdetails, setshowdetails] = useState(false);
  let [showpassword,setshowpassword]=useState(false);

  let [username, setusername] = useState('');
  let [password, setpassword] = useState('');
  let [email, setemail] = useState('');
  function cleardetails() {
    setusername('');
    setpassword('');
    setemail('');
    setshowdetails(false);
  }

  return (
    <View>
      <Text className="text-3xl">Simple form in React Native</Text>

      {/* inputs */}
      <TextInput
        className="border-red-300 border-2 bg-gray-500 m-3"
        placeholder="Enter Name"
        value={username}
        onChangeText={text => setusername(text)}
      />
      <View >
        <TextInput
          placeholder="Enter Password"
          className="border-red-300 border-2 bg-gray-500 m-3"
          secureTextEntry={showpassword}
          value={password}
          onChangeText={text => setpassword(text)}
        />
        <Text onPress={()=> setshowpassword(!showpassword)} className='relative bottom-12 left-80'>Show</Text>
        
      </View>
      <TextInput
        placeholder="Enter Mailid @"
        className="border-red-300 border-2 bg-gray-500 m-3"
        value={email}
        onChangeText={text => setemail(text)}
      />

      {/* buttons */}
      <View className="my-1">
        {showdetails ? (
          <Button onPress={() => setshowdetails(false)} title="Hide Details" />
        ) : (
          <Button onPress={() => setshowdetails(true)} title="Print Details" />
        )}
      </View>
      <View className="my-1">
        <Button onPress={cleardetails} title="Clear Details" />
      </View>
      <Button title='Go to second screen ' onPress={()=>navigation.navigate("second")}/>

      {/* print details */}
      {showdetails ? (
        <View className="bg-green-300 text-black">
          <Text>{username}</Text>
          <Text>{password}</Text>
          <Text>{email}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default Project1;
