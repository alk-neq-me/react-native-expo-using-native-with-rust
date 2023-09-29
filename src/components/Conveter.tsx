import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard'

import { ConverterModule, TextToSpeach } from "../utils/native_module";

const { convertKrToRoAsync, showToast } = ConverterModule
const { speak, setLanguage } = TextToSpeach

export function Conveter() {
  const insets = useSafeAreaInsets()
  const [krText, setKrText] = useState("")
  const [roText, setRoText] = useState("")

  const handleConvert = () => {
    convertKrToRoAsync(krText)
      .then(setRoText)
      .catch(console.error)
  }

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(roText)
      showToast("Copy text successfully 🦀")
    } catch (err: any) {
      let msg = err?.message ?? "unknown error"
      showToast(`Copy text failed: ${msg}`)
    }
  }

  const handleSound = async () => {
    try {
      await setLanguage("ko-KR").then(console.log).catch(console.error)
      await speak(krText).then(console.log).catch(console.error)
    } catch (err: any) {
      let msg = err?.message ?? "unknown error"
      showToast(`sound text failed: ${msg}`)
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
          placeholder="Korean"
          style={styles.input}
          onChangeText={setKrText}
          value={krText}
        />
        <TextInput 
          editable
          multiline
          numberOfLines={4}
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

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          gap: 5
        }}
      >
        <Button
          title="Sound"
          onPress={handleSound}
        />
        {roText ? 
          <Button
            title="Copy"
            color="pink"
            onPress={handleCopy}
          /> : null
        }
      </View>
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
