package com.marco.flat;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class HelloJavaModule extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("flat");
  }

  public static native String rusty_fn(String name);

  public static native String counvertKrToRo(String kr);

  public HelloJavaModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "HelloJavaModule";
  }

  @ReactMethod
  public void sayHello(String name, Promise promise) {
    try {
      promise.resolve(rusty_fn(name));
    } catch (Exception e) {
      promise.reject("Error: failed proise", e);
    }
  }

  @ReactMethod
  public void convertKrToRoAsync(String kr, Promise promise) {
    try {
      promise.resolve(counvertKrToRo(kr));
    } catch (Exception e) {
      promise.reject("Error: failed proise", e);
    }
  }

  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}
