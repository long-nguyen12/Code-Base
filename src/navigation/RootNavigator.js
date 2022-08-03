import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import {
    FORGOTPASSWORD_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    MAIN,
    REGISTER_PAGE,
    SETTING_PAGE,
} from "../constants/routes";
import HomePage from "../screens/Home";
import LoginPage from "../screens/Login";
import ForgotPasswordPage from "../screens/Login/ForgotPassword";
import RegisterPage from "../screens/Login/Register";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    HELPER_LINK_TEXT,
    INSTRUCTION_TEXT,
    PRIMARY,
} from "../constants/colors";
import { Text } from "@ui-kitten/components";
import SettingsPage from "../screens/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                gestureEnabled: false,
            }}
        >
            <Tab.Screen
                name={HOME_PAGE}
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-home-outline"
                                size={size}
                                color={focused ? PRIMARY : INSTRUCTION_TEXT}
                            />
                        );
                    },
                    tabBarLabel: (props) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: props.focused
                                        ? PRIMARY
                                        : INSTRUCTION_TEXT,
                                }}
                            >
                                Trang chủ
                            </Text>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={SETTING_PAGE}
                component={SettingsPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-settings-outline"
                                size={size}
                                color={focused ? PRIMARY : INSTRUCTION_TEXT}
                            />
                        );
                    },
                    tabBarLabel: (props) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: props.focused
                                        ? PRIMARY
                                        : INSTRUCTION_TEXT,
                                }}
                            >
                                Cài đặt
                            </Text>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name={MAIN}
                component={MainTabBar}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
