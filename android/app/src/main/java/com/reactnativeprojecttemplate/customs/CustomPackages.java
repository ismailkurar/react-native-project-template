package com.reactnativeprojecttemplate.customs;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.reactnativeprojecttemplate.customs.customModules.CustomModule;
import com.reactnativeprojecttemplate.customs.customUIComponents.IsoChartManager;
import com.reactnativeprojecttemplate.customs.customUIComponents.MuiCalenderViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CustomPackages implements ReactPackage {
    /*
      # Register the ViewManager #

      The final Java step is to register the ViewManager to the application,
      this happens in a similar way to Native Modules, via the applications package member function createViewManagers.
     */

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new MuiCalenderViewManager(),
                new IsoChartManager()
        );
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new CustomModule(reactContext));

        return modules;
    }
}