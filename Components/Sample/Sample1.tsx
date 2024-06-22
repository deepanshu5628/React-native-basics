import { useEffect } from "react";
import { Text, View } from "react-native";

function Sample1(){
  useEffect(()=>{
    return ()=>{
       console.log("entery hogi g "); 
    }
  },)
  return (
    <View>
      <Text  className="text-4xl my-8">Helo g</Text>
    </View>
  )
}

export default Sample1;