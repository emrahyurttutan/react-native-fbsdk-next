"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = require("./util/validate");

var _reactNative = require("react-native");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
const Settings = _reactNative.NativeModules.FBSettings;
var _default = {
  /**
   * For iOS only, get AdvertiserTrackingEnabled status.
   * @platform ios
   */
  getAdvertiserTrackingEnabled() {
    if (_reactNative.Platform.OS === 'ios') {
      return Settings.getAdvertiserTrackingEnabled();
    } else {
      return Promise.resolve(true);
    }
  },

  /**
   * For iOS only, set AdvertiserTrackingEnabled status, only works in iOS 14 and above.
   * @platform ios
   */
  setAdvertiserTrackingEnabled(ATE) {
    if (_reactNative.Platform.OS === 'ios') {
      return Settings.setAdvertiserTrackingEnabled(ATE);
    } else {
      return Promise.resolve(false);
    }
  },

  /**
   * Set data processing options
   */
  setDataProcessingOptions(options) {
    let country = 0;

    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'number') {
      country = arguments.length <= 1 ? undefined : arguments[1];
    }

    let state = 0;

    if (typeof (arguments.length <= 2 ? undefined : arguments[2]) === 'number') {
      state = arguments.length <= 2 ? undefined : arguments[2];
    }

    Settings.setDataProcessingOptions(options, country, state);
  },

  /**
   * Initialize the sdk
   */
  initializeSDK() {
    Settings.initializeSDK();
  },

  /**
   * Set app id
   */
  setAppID(appID) {
    if (!(0, _validate.isDefined)(appID) || !(0, _validate.isString)(appID) || appID.length === 0) {
      throw new Error("setAppID expected 'appID' to be a non empty string");
    }

    Settings.setAppID(appID);
  },

  /**
   * Set clientToken
   */
  setClientToken(clientToken) {
    if (!(0, _validate.isDefined)(clientToken) || !(0, _validate.isString)(clientToken) || clientToken.length === 0) {
      throw new Error("setClientToken expected 'clientToken' to be a non empty string");
    }

    Settings.setClientToken(clientToken);
  },

  /**
   * Sets the Facebook application name for the current app.
   */
  setAppName(appName) {
    if (!(0, _validate.isDefined)(appName) || !(0, _validate.isString)(appName) || appName.length === 0) {
      throw new Error("setAppName expected 'appName' to be a non empty string");
    }

    Settings.setAppName(appName);
  },

  /**
   * Sets the Graph API version to use when making Graph requests.
   */
  setGraphAPIVersion(version) {
    if (!(0, _validate.isDefined)(version) || !(0, _validate.isString)(version) || version.length === 0 || !(0, _validate.isValidGraphAPIVersion)(version)) {
      throw new Error("setGraphAPIVersion expected 'version' to be a non empty string");
    }

    Settings.setGraphAPIVersion(version);
  },

  /**
   * Sets whether Facebook SDK should log app events. App events involve eg. app installs,
   * app launches etc.
   */
  setAutoLogAppEventsEnabled(enabled) {
    Settings.setAutoLogAppEventsEnabled(enabled);
  },

  /**
   * Whether the Facebook SDK should collect advertiser ID properties, like the Apple IDFA
   * and Android Advertising ID, automatically. Advertiser IDs let you identify and target
   * specific customers.
   */
  setAdvertiserIDCollectionEnabled(enabled) {
    Settings.setAdvertiserIDCollectionEnabled(enabled);
  },

  /**
   * android apk fb debug view added
   */
  setAndroidDebugView(enabled) {
    if (_reactNative.Platform.OS === 'android') {
      Settings.setAndroidDebugView(enabled);
    }
  }

};
exports.default = _default;
//# sourceMappingURL=FBSettings.js.map