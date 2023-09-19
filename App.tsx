import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native';

const { HelloJava } = NativeModules

export default function App() {
  const [text, setText] = useState("")

  const handle = () => {
    console.log("clicked", HelloJava)

    HelloJava.sayHello("ko", (err: any, msg: string) => {
      if (err) console.log("Error", err)
      setText(msg)
    })
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your java expo app!</Text>
      <Text>{text}</Text>

      <Button title='Click' onPress={handle} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
