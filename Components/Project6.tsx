import {ScrollView, SectionList, Text, View} from 'react-native';

function Project6() {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    }, {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    }, {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    }, {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    }, {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    }, {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
  ];
  return (
    <ScrollView>
      <View>
        <Text className="text-center text-2xl my-2">Section LIst</Text>
        {/* Section list  */}
        <SectionList
        sections={DATA}
        renderItem={({item})=><Text className='text-2xl'>{item}</Text>}
        renderSectionHeader={({section:{title}})=><Text className='text-4xl text-red-700'>{title}</Text>}
        />
      </View>
     </ScrollView>
  );
}
export default Project6;
