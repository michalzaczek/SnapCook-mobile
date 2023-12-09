import { ParamListBase, useFocusEffect } from '@react-navigation/native';
import {
  Camera,
  requestCameraPermissionsAsync,
  PermissionStatus,
} from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import closeIcon from '../../assets/close-icon';
import { useUIState } from '../contexts/ui-state/ui-state.context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';

const CameraElement = styled(Camera)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const PhotoContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Photo = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export function CameraScreen({
  navigation,
}: BottomTabScreenProps<ParamListBase, 'Camera'>) {
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState<string>();
  const { setShowHeader } = useUIState();

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhotoUri(photo.uri);
    }
  };

  useFocusEffect(() => {
    setShowHeader(false);
    return () => setShowHeader(true);
  });

  useEffect(() => {
    (async () => {
      const { status } = await requestCameraPermissionsAsync();
      if (status !== PermissionStatus.GRANTED) {
        navigation.goBack();
      }
    })();
  }, []);

  if (photoUri) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <PhotoContainer>
          <TouchableOpacity
            onPress={() => setPhotoUri(undefined)}
            style={{ position: 'absolute', zIndex: 999, top: 25, left: 25 }}
          >
            <SvgXml xml={closeIcon} />
          </TouchableOpacity>
          <Photo source={{ uri: photoUri }} />
        </PhotoContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CameraElement ref={cameraRef}>
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </CameraElement>
    </SafeAreaView>
  );
}
