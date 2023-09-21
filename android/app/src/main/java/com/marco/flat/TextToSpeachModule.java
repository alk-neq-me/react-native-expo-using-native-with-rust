package com.marco.flat;

import android.content.Context;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Locale;

public class TextToSpeachModule extends ReactContextBaseJavaModule {
  private TextToSpeech textToSpeech;

  public TextToSpeachModule(ReactApplicationContext reactContext) {
    super(reactContext);
    textToSpeech = new TextToSpeech(reactContext, new TextToSpeech.OnInitListener() {
      @Override
      public void onInit(int status) {
        if (status != TextToSpeech.ERROR) {
          textToSpeech.setLanguage(Locale.US);
        }
      }
    });
  }

  @Override
  public String getName() {
    return "TextToSpeachModule";
  }

  @ReactMethod
  public void setLanguage(String lang, Promise promise) {
    Locale locale;
    if (lang.equals("ko-KR")) {
      locale = Locale.KOREAN;
    } else if (lang.equals("US")) {
      locale = Locale.US;
    } else {
      locale = Locale.US;
    }

    int result =textToSpeech.setLanguage(locale);

    if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
      promise.reject("TTS_ERROR", "Language not supported");
    } else {
      promise.resolve("Language set to " + lang);
    }
  }

  @ReactMethod
  public void speak(String text, final Promise promise) {
    if (textToSpeech != null) {
      textToSpeech.speak(text, TextToSpeech.QUEUE_FLUSH, null, "unique_id");
      textToSpeech.setOnUtteranceProgressListener(new UtteranceProgressListener() {
        @Override
        public void onStart(String utteranceId) {
          promise.resolve("TTS started");
        }

        @Override
        public void onDone(String utteranceId) {
          promise.resolve("TTS completed");
        }

        @Override
        public void onError(String utteranceId) {
          promise.reject("TTS_ERROR", "Error while speaking");
        }
      });
    } else {
      promise.reject("TTS_ERROR", "TextToSpeech engine not initialized");
    }
  }
}

