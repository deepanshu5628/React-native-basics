import {FlatList, ScrollView, Text, View} from 'react-native';

function Project5() {
  let info = [
    {
      id: 1,
      name: 'Deepanshu',
      email: 'fsdf@gmail.com',
    },
    {
      id: 2,
      name: 'ashi',
      email: 'ashf@gmail.com',
    },
    {
      id: 3,
      name: 'Sanj',
      email: 'Sanj@gmail.com',
    },
    {
      id: 4,
      name: 'abhi',
      email: 'mota@gmail.com',
    },
  ];
  return (
      <View>
        <Text className="flex-1 text-2xl text-center">
          Components in Loop with flatlist
        </Text>

        {/* list's */}
        <FlatList
          data={info}
          className='border-pink-400 border-2 my-2'
          renderItem={({item,index}) => (
            <View key={index} className=' my-1 border-2 border-green-300 flex-row justify-evenly '>
              <Text className='text-xl'>{item.name}</Text>
              <Text className='text-xl'>{item.email}</Text>
            </View>
          )}
        />
      </View>
  );
}
export default Project5;
