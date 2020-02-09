package org.cocos2dx.javascript;

import android.util.Log;

public class Logger {
    static String tag = "cc.andriod.logger";
    static void v(String message) {
        Log.v(tag, message);
    }
    static void d(String message) {
        Log.d(tag, message);
    }
    static void i(String message) {
        Log.i(tag, message);
    }
    static void w( String message) {
        Log.w(tag, message);
    }
    static void e(String message) {
        Log.e(tag, message);
    }
}
