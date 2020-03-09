import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [name, setname] = useState('John');
  const [people, setPeople] = useState([
    { name: 'mario1', key: '1'},
    { name: 'mario2', key: '2' },
    { name: 'mario3', key: '3' },
    { name: 'mario4', key: '4' },
    { name: 'mario5', key: '5' },
    { name: 'mario6', key: '6' },
    { name: 'mario7', key: '7' },
    { name: 'mario8', key: '8' },

    ]);

  return (
    <View style={styles.container}>

{/* expect key value as string */}
      {/* renders few of them and renders new with scroll */}
      <FlatList 
        data={people}
        renderItem={( {item} ) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

          {/* scrollview renders every item */}

    {/* <ScrollView>
      {people.map(item=>(
          <View key={item.key}>
            <Text style = {styles.item}>
              {item.name}
            </Text>
          </View>
        
      ))}
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 30,
  }
});
