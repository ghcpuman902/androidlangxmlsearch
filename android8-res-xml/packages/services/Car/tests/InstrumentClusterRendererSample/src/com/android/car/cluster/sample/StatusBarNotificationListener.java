/*
 * Copyright (C) 2016 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.android.car.cluster.sample;

import android.content.Intent;
import android.os.Binder;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.service.notification.NotificationListenerService;
import android.service.notification.StatusBarNotification;
import android.util.Log;

/**
 * Listens to status bar notifications and passes it to the listener.
 */
public class StatusBarNotificationListener extends NotificationListenerService {

    private static final String TAG = DebugUtil.getTag(StatusBarNotificationListener.class);

    static final String ACTION_LOCAL_BINDING = "local_binding";

    private Handler mHandler;

    @Override
    public void onNotificationPosted(StatusBarNotification sbn) {
        if (MessagingConverter.canConvert(sbn) && mHandler != null) {
            Message msg = Message.obtain(mHandler);
            msg.obj = sbn;
            mHandler.sendMessage(msg);
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        Log.d(TAG, "onBind, intent:" + intent);

        return ACTION_LOCAL_BINDING.equals(intent.getAction())
                ? new LocalBinder() : super.onBind(intent);
    }

    public void setHandler(Handler handler) {
        mHandler = handler;
    }

    public class LocalBinder extends Binder {
        public StatusBarNotificationListener getService() {
            return StatusBarNotificationListener.this;
        }
    }
}
