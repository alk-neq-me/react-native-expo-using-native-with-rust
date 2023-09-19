package com.marco.flat;

// import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class HelloJavaModule extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("crab");
  }

  public static native String rusty_crab();

  public HelloJavaModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  // public static native void rusty_print();

  @Override
  public String getName() {
    return "HelloJava";
  }

  @ReactMethod
  public void sayHello(String name, Callback callback) {
    // Log.d("HelloJava", "Hello");
    try {
      // String msg = "Hello " + name + " " + "from java";
      // rusty_crab();
      callback.invoke(null, "gg");
    } catch (Exception e) {
      callback.invoke(e, null);
    }
  }
}
