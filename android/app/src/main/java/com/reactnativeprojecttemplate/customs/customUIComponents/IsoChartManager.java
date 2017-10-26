package com.reactnativeprojecttemplate.customs.customUIComponents;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReadableArray;

import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;
import com.github.mikephil.charting.animation.Easing;

import android.graphics.Color;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

public class IsoChartManager extends SimpleViewManager<PieChart> {
    public static final String REACT_CLASS = "RCTIsoChart";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected PieChart createViewInstance(ThemedReactContext reactContext) {
        PieChart pieChart = new PieChart(reactContext);

        pieChart.getDescription().setEnabled(false);
        pieChart.invalidate(); // refresh
        pieChart.animateY(1400, Easing.EasingOption.EaseInOutQuad);

        return pieChart;
    }

   @ReactProp(name = "data")
    public void setData(PieChart view, ReadableArray data) {
       List<PieEntry> entries = new ArrayList<>();
       ArrayList<Integer> colors = new ArrayList<Integer>();

       for (int i = 0; i < data.size(); i++) {
           ReadableMap  map = data.getMap(i);

           entries.add(new PieEntry(map.getInt("data")));
           colors.add(Color.parseColor(map.getString("color")));
       }

       PieDataSet ds = new PieDataSet(entries, "");
       ds.setColors(colors);

       PieData pieData = new PieData();
       pieData.setDataSet(ds);

       view.setData(pieData);
    }

    @ReactProp(name = "drawValues")
    public void setDrawValues(PieChart view, boolean enabled) {
        view.getData().getDataSet().setDrawValues(enabled);
    }

    @ReactProp(name = "displayLegends")
    public void setDisplayLegends(PieChart view, boolean enabled) {
        view.getLegend().setEnabled(enabled);
    }

    @ReactProp(name = "centerText")
    public void setCenterText(PieChart view, String text) {
        view.setCenterText(text);
    }

    @ReactProp(name = "centerTextColor")
    public void setCenterTextColor(PieChart view, String color) {
        view.setCenterTextColor(Color.parseColor(color));
    }

    @ReactProp(name = "centerTextSize")
    public void setCenterTextSize(PieChart view, float size) {
        view.setCenterTextSize(size);
    }

    @ReactProp(name = "drawCenterText")
    public void setDrawCenterText(PieChart view, boolean enabled) {
        view.setDrawCenterText(enabled);
    }


    @ReactProp(name = "drawEntryLabels")
    public void setDrawEntryLabels(PieChart view, boolean enabled) {
        view.setDrawEntryLabels(enabled);
    }

    @ReactProp(name = "drawHoleEnabled")
    public void setDrawHoleEnabled(PieChart view, boolean enabled) {
        view.setDrawHoleEnabled(enabled);
    }

    @ReactProp(name = "holeColor")
    public void setHoleColor(PieChart view, String color) {
        int mColor;

        if (color.equals("transparent")) {
            mColor = Color.TRANSPARENT;
        } else {
            mColor = Color.parseColor(color);
        }

        view.setHoleColor(mColor);
    }

    @ReactProp(name = "holeRadius")
    public void setHoleRadius(PieChart view, float percent) {
        view.setHoleRadius(percent);
    }

    @ReactProp(name = "usePercentValues")
    public void setUsePercentValues(PieChart view, boolean enabled) {
        view.setUsePercentValues(enabled);
    }

    @ReactProp(name = "transparentCircleRadius")
    public void setTransparentCircleRadius(PieChart view, float percent) {
        view.setTransparentCircleRadius(percent);
    }

    @ReactProp(name = "transparentCircleColor")
    public void setTransparentCircleColor(PieChart view, String color) {
        int mColor;

        if (color.equals("transparent")) {
            mColor = Color.TRANSPARENT;
        } else {
            mColor = Color.parseColor(color);
        }

        view.setTransparentCircleColor(mColor);
    }

    //min 0 : fully transparent, max 255: fully opaque
    @ReactProp(name = "transparentCircleAlpha")
    public void setTransparentCircleAlpha(PieChart view, int alpha) {
        view.setTransparentCircleAlpha(alpha);
    }

    @ReactProp(name = "highlightPerTapEnabled")
    public void setHighlightPerTapEnabled(PieChart view, boolean enabled) {
        view.setHighlightPerTapEnabled(enabled);
    }

    @ReactProp(name = "rotationEnabled")
    public void setRotationEnabled(PieChart view, boolean enabled) {
        view.setRotationEnabled(enabled);
    }
}
