import { Tab, TabBar, Text } from "@ui-kitten/components";
import React, { useLayoutEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { PRIMARY } from "../../constants/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LichhenTab from "./Lichhen";
import LichtaikhamTab from "./Lichtaikham";
import { containerStyles } from "../../stylesContainer";
const TopTab = createMaterialTopTabNavigator();

export default function Lichhen(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text style={{ color: PRIMARY }} category="h6">
                    Lịch hẹn
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });

    return (
        <SafeAreaView style={containerStyles.content}>
            <TopTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: PRIMARY,
                    tabBarLabelStyle: { fontSize: 12 },
                }}
            >
                <TopTab.Screen
                    name="Lichhen"
                    component={LichhenTab}
                    options={{
                        tabBarLabel: () => (
                            <Text style={containerStyles.textStyle}>
                                Lịch hẹn
                            </Text>
                        ),
                    }}
                />
                <TopTab.Screen
                    name="Lichtaikham"
                    component={LichtaikhamTab}
                    options={{
                        tabBarLabel: () => (
                            <Text style={containerStyles.textStyle}>
                                Lịch tái khám
                            </Text>
                        ),
                    }}
                />
            </TopTab.Navigator>
        </SafeAreaView>
    );
}
