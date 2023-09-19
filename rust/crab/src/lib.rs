#![allow(unused_variables)]
#![allow(unused_imports)]

use jni::JNIEnv;
use jni::objects::{JString, JClass};
use jni::sys::jstring;

#[no_mangle]
pub unsafe extern fn Java_com_marco_flat_HelloJavaModule_rusty_crab(
    env: JNIEnv,
    _class: JClass,
    // name: JString
) -> jstring {
    // let name: String = env.get_string(&name).expect("Couldnt get java sting!").into();
    let output = env.new_string(format!("Hello from rust 🦀")).expect("Couldnt create java string!");

    output.into_raw()
}


// #[no_mangle]
// pub extern "system" fn Java_com_marco_flat_HelloJavaModule_rusty_print<'local>(
//     _env: JNIEnv<'local>,
//     _class: JClass<'local>,
// ) -> () {
//     println!("Hello java! 🦀");
// }
