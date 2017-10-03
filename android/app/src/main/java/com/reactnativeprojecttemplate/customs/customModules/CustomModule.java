package com.reactnativeprojecttemplate.customs.customModules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.Arguments;


public class CustomModule extends ReactContextBaseJavaModule {
    public CustomModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void getModuleList(final Callback callback) {
        WritableArray listArr = Arguments.createArray();

        listArr.pushString("Module A");
        listArr.pushString("Module B");

        callback.invoke(listArr);
    }
}
