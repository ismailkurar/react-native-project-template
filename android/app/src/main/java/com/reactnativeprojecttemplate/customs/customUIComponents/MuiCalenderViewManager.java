package com.reactnativeprojecttemplate.customs.customUIComponents;

import android.graphics.Color;
import android.support.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import com.prolificinteractive.materialcalendarview.CalendarDay;
import com.prolificinteractive.materialcalendarview.CalendarMode;
import com.prolificinteractive.materialcalendarview.MaterialCalendarView;
import com.prolificinteractive.materialcalendarview.OnDateSelectedListener;

import java.util.Date;
import java.util.Calendar;

public class MuiCalenderViewManager extends SimpleViewManager<MaterialCalendarView>{
    public static final String REACT_CLASS = "MaterialCalendarView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public MaterialCalendarView createViewInstance(ThemedReactContext reactContext) {
        MaterialCalendarView materialCalendarView = new MaterialCalendarView(reactContext);
        materialCalendarView.setSelectedDate(new Date());

        onReceiveNativeEvent(reactContext, materialCalendarView);

        return materialCalendarView;
    }

    public void onReceiveNativeEvent(final ThemedReactContext reactContext, final MaterialCalendarView materialCalendarView) {
        materialCalendarView.setOnDateChangedListener(new OnDateSelectedListener() {

            @Override
            public void onDateSelected(@NonNull MaterialCalendarView widget, @NonNull CalendarDay date, boolean selected) {
                WritableMap event = Arguments.createMap();
                event.putString("date", date.getDate().toString());
                event.putInt("day", date.getDay());
                event.putInt("month", date.getMonth());
                event.putInt("year", date.getYear());

                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(materialCalendarView.getId(), "topChange", event);
            }
        });
    }

    @ReactProp(name = "day", defaultInt = 1)
    public void setDay(MaterialCalendarView view, int day) {
        Calendar cal = view.getSelectedDate().getCalendar();
        cal.set(Calendar.DAY_OF_MONTH, day);
        Date dateRepresentation = cal.getTime();

        view.setSelectedDate(dateRepresentation);
    }

    @ReactProp(name = "month", defaultInt = 1)
    public void setMonth(MaterialCalendarView view, int month) {
        Calendar cal = view.getSelectedDate().getCalendar();
        cal.set(Calendar.MONTH, month);
        Date dateRepresentation = cal.getTime();

        view.setSelectedDate(dateRepresentation);
    }

    @ReactProp(name = "year", defaultInt = 2017)
    public void setYear(MaterialCalendarView view, int year) {
        Calendar cal = view.getSelectedDate().getCalendar();
        cal.set(Calendar.YEAR, year);
        Date dateRepresentation = cal.getTime();

        view.setSelectedDate(dateRepresentation);
    }

    @ReactProp(name = "selectionColor")
    public void setSelectionColor(MaterialCalendarView view, String color) {
        view.setSelectionColor(Color.parseColor(color));
        view.setArrowColor(Color.parseColor(color));
        view.state().edit()
                .setCalendarDisplayMode(CalendarMode.WEEKS)
                .setFirstDayOfWeek(Calendar.WEDNESDAY)
                .commit();
    }
}
