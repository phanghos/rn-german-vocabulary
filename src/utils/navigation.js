import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeScreen, NewWordScreen} from '../screens';
import {useDispatch} from 'react-redux';
import {RESET_VOCABULARY} from '../actions/vocabulary';

const AppStack = createStackNavigator();
export const AppNavigator = () => {
  const dispatch = useDispatch();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => {
          return {
            title: 'Vocabulary',
            headerRight: () => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({type: RESET_VOCABULARY});
                    }}
                    style={{alignSelf: 'center', marginRight: 16, top: 1}}>
                    <Icon name="trash" size={24} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('NewWord');
                    }}>
                    <View style={{marginRight: 16}}>
                      <Text style={{fontSize: 28}}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            },
          };
        }}
      />
      <AppStack.Screen
        name="NewWord"
        component={NewWordScreen}
        options={{title: 'New Word'}}
      />
    </AppStack.Navigator>
  );
};
