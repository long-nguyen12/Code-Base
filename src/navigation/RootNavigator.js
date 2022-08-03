import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import {
    CAUHOI_PAGE,
    HOME_PAGE,
    LICHHEN_PAGE,
    MAIN,
    SETTING_PAGE,
    THONGBAO_PAGE,
} from "../constants/routes";
import HomePage from "../screens/Home";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    INSTRUCTION_TEXT,
    PRIMARY,
} from "../constants/colors";
import { Text } from "@ui-kitten/components";
import SettingsPage from "../screens/Settings";
import ThongbaoPage from "../screens/Thongbao";
import Lichhen from "../screens/Lichhen";
import CauhoiPage from "../screens/Cauhoi";
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
                                name="ios-home"
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
                name={LICHHEN_PAGE}
                component={Lichhen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-calendar"
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
                                Lịch hẹn
                            </Text>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={CAUHOI_PAGE}
                component={CauhoiPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-chatbubbles"
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
                                Hỏi đáp
                            </Text>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={THONGBAO_PAGE}
                component={ThongbaoPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-notifications"
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
                                Thông báo
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
                                name="ios-person"
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
                                Tài khoản
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
