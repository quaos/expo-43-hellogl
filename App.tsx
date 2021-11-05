import { GLView } from "expo-gl";
import React from 'react';
import { StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';

import Scene from "./Scene";

const STATUS_BAR_H = 24;

export interface AppProps {
  // screenWidth?: number;
  // screenHeight?: number;
}

export default function App({ }: AppProps) {
  const screenDimensions = useWindowDimensions();
  const width = screenDimensions.width;
  const height = screenDimensions.height;

  const glRef = React.useRef<WebGLRenderingContext>();
  const sceneRef = React.useRef<Scene>();

  React.useEffect(() => {
    return () => {
      //cleanup
      sceneRef.current?.cleanup();
    }
  }, []);

  const onGLContextCreated = (gl: WebGLRenderingContext) => {
    glRef.current = gl;
    const scene = new Scene(gl);
    scene.init();
    sceneRef.current = scene;
  };

  return (
    <View>
      <StatusBar translucent={true}>Hello GL</StatusBar>
      <GLView style={{ ...styles.glView, width, height }} 
        onContextCreate={onGLContextCreated} />
    </View>
  );
}

const styles = StyleSheet.create({
  glView: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
