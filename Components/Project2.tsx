import {View, Text, FlatList, ScrollView, Button} from 'react-native';
function Project2({navigation}) {
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
      <View>
        <Text className="text-2xl  p-1">List With FlatList Comonent </Text>
        <Button title="Go to third sCreen" onPress={()=>navigation.navigate("third")} />

        {/* list div */}
        <View className=" p-4 my-2">
          <FlatList
            data={names}
            renderItem={({item,index}) => (
              <Text key={index} className="text-3xl border-2 border-green-500 my-2 text-center ">
                {item}
              </Text>
            )}
          />
        </View>
      </View>
  );
}

export default Project2;
