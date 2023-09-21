import { NativeModules } from "react-native"

const { HelloJavaModule, TextToSpeachModule } = NativeModules;

interface IConverterModule {
  convertKrToRoAsync: (kr: string) => Promise<string>
  sayHello: (name: string) => Promise<string>
  showToast: (message: string) => void
}

interface ITextToSpeach {
  setLanguage: (lang: string) => Promise<string>
  speak: (text: string) => Promise<string>
}

export const ConverterModule = HelloJavaModule as IConverterModule
export const TextToSpeach = TextToSpeachModule as ITextToSpeach
