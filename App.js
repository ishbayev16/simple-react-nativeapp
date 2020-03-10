import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setname] = useState('John');
  const [people, setPeople] = useState([
    { name: 'mario1', id: '1'},
    { name: 'mario2', id: '2' },
    { name: 'mario3', id: '3' },
    { name: 'mario4', id: '4' },
    { name: 'mario5', id: '5' },
    { name: 'mario6', id: '6' },
    { name: 'mario7', id: '7' },
    { name: 'mario8', id: '8' },
    ]);

    function pressHandler(id){
      console.log(id);
      setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id);
      })
    }

  return (
    <View style={styles.container}>

{/* expect key value as string */}
      {/* renders few of them and renders new with scroll */}
      <FlatList 
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={( {item} ) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
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
