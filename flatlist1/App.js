import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const data = Array(50).fill(null).map((_, i) => ({ number: i, }))

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        /*
        numColumns={2}    veriyi yanyana 2-3-4 nasıl istiyorsak öyle sıralar
        horizontal        veriyi yatayda sıralar
        */
        data={data}
        keyExtractor={(item) => item.number}
        renderItem={({ item }) => <Box number={item.number} />}
      />


    </View>
  );
}
const Box = ({ number }) => {
  useEffect(()=>{
    console.log("Rendering....");
  },[])
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: "yellow",
      margin: 5,
      borderRadius: 50,
      justifyContent:"center",
      alignItems:"center",

    }}>
      <Text style={{fontSize:20,fontWeight:"bold"}}> {number}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
