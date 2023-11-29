import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IngredientsScreen } from '../screens/ingredients-screen';
import { SvgXml } from 'react-native-svg';
import { FavoritesScreen } from '../screens/favorites-screen';
import { HomeScreen } from '../screens/home-screen';
import { RecipesScreen } from '../screens/recipes-screen';
import heart from '../../assets/heart';
import list from '../../assets/list';
import camera from '../../assets/camera';
import theme from '../theme/theme';
import styled from 'styled-components/native';
import { PixelRatio, Platform, View } from 'react-native';

export function AppNavigator() {
  const Tab = createBottomTabNavigator();
  const isIos = Platform.OS === 'ios';

  const backgroundColor = '#677D73';

  const CameraOuterContainer = styled(View)`
    position: absolute;
    top: ${isIos ? '-35px' : '-20px'};
    background-color: ${backgroundColor};
    width: 82px;
    height: 82px;
    border-radius: 41px;
    align-items: center;
    justify-content: center;
  `;

  const CameraInnerContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.primaryDark};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor,
          paddingVertical: isIos ? PixelRatio.getPixelSizeForLayoutSize(7) : 0,
          height: isIos ? 90 : 70,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={heart}
              color={focused ? theme.colors.primaryDark : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CameraOuterContainer>
              <CameraInnerContainer>
                <SvgXml xml={camera} />
              </CameraInnerContainer>
            </CameraOuterContainer>
          ),
        }}
      />
      <Tab.Screen
        name='Recipes'
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={list}
              color={focused ? theme.colors.primaryDark : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
