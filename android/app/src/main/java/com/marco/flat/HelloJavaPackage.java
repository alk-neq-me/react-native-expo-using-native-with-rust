package com.marco.flat;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;

import java.util.List;
import java.util.Collections;
import java.util.ArrayList;


public class HelloJavaPackage implements ReactPackage {
  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(
    ReactApplicationContext reactContext
  ) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new HelloJavaModule(reactContext));

    return modules;
  }
}
