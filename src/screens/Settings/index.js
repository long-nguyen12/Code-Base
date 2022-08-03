import { Button, Text } from "@ui-kitten/components";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { PRIMARY } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { userLogoutRoutine } from "../Login/saga/routines";

export default function SettingsPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text style={{ color: PRIMARY }} category="h5">
                    Cài đặt
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });

    const dispatch = useDispatch();

    return (
        <View>
            <Button onPress={() => dispatch(userLogoutRoutine.trigger())}>
                Đăng xuất
            </Button>
        </View>
    );
}
