import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setname] = useState('John');
  const [person, setPerson] = useState({ name: 'mario', age: 50});
  const clickHandler = () => {
    setname('not John');
    setPerson({name:'john-li', age:67});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.boldText}> my name is {name} </Text>
      </View>
      <View style={styles.body}>
        <Text>person's name is {person.name} and age is {person.age}</Text>
      </View>
      <View style={styles.containerButton}>
        <Button title='Update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton:{
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 40,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
});
