import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

export default function DocumentoScreen(route) {
  return (
    <View style = {{flex: 1, paddingTop: '5%'}}>
      <WebView source={{ uri: 'route.params.link' }}   />
    </View>
  );
}