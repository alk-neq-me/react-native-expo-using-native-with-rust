import { NativeModules } from "react-native"

const { HelloJavaModule: ConverterModule } = NativeModules;

interface IConverterModule {
  convertKrToRoAsync: (kr: string) => Promise<string>,
  sayHello: (name: string) => Promise<string>
}

export default ConverterModule as IConverterModule
