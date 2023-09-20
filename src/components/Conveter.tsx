import { View, Text, StyleSheet, TextInput, Button, ToastAndroid } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard'

import ConverterModule from "../utils/native_module";

export function Conveter() {
  const insets = useSafeAreaInsets()
  const [krText, setKrText] = useState("")
  const [roText, setRoText] = useState("")

  const { convertKrToRoAsync } = ConverterModule

  const handleConvert = () => {
    convertKrToRoAsync(krText)
      .then(setRoText)
      .catch(console.error)
  }

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(roText)
      ToastAndroid.show("Copy text successfully 🦀", ToastAndroid.SHORT)
    } catch (err: any) {
      let msg = err?.message ?? "unknown error"
      ToastAndroid.show(`Copy text failed: ${msg}`, ToastAndroid.SHORT)
    }
  }

  return <View style={[{paddingTop: insets.top + 16}, styles.container]}>
    <View style={{
      display: "flex",
      gap: 10
    }}>
      <Text style={styles.header}>Korean to romaji conveter 🦀</Text>

      <View style={styles.vstack}>
        <TextInput 
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Korean"
          style={styles.input}
          onChangeText={setKrText}
          value={krText}
        />
        <TextInput 
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Romaji"
          style={styles.input}
          onChangeText={setRoText}
          value={roText}
        />
      </View>

      <Button
        title="Convert"
        onPress={handleConvert}
      />

      {roText ? 
        <Button
          title="Copy"
          color="pink"
          onPress={handleCopy}
        /> : null
      }
    </View>

    <Text style={styles.footer}>
      &copy; {(new Date()).getFullYear()} Aung Koko Lwin.
    </Text>
  </View>
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    gap: 10,
    height: "100%"
  },

  header: {
    fontSize: 25,
    textAlign: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#222",
    padding: 10
  },

  vstack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 10
  },

  footer: {
    textAlign: "center",
    color: "#aaa"
  }
})
