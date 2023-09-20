#![allow(non_snake_case)]

mod convert;

use convert::Conveter;
use jni::JNIEnv;
use jni::objects::{JClass, JString};
use jni::sys::jstring;

#[no_mangle]
pub extern "system" fn Java_com_marco_flat_HelloJavaModule_rusty_1fn(
  mut env: JNIEnv, 
  _class: JClass, 
  name: JString
) -> jstring {
  let name: String = env.get_string(&name).unwrap().into();
  let response = format!("Hello {} from rust 🦀!", name);
  env.new_string(response).unwrap().into_raw()
}

#[no_mangle]
pub extern "system" fn Java_com_marco_flat_HelloJavaModule_counvertKrToRo(
  mut env: JNIEnv, 
  _class: JClass, 
  kr: JString
) -> jstring {
  let kr: String = env.get_string(&kr).unwrap().into();
  let mut romaji = Conveter::new();

  env.new_string(&romaji.convert(&kr).expect("couldnt convert romaji!").romaji).unwrap().into_raw()
}
