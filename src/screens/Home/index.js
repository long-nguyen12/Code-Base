import { Text } from "@ui-kitten/components";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { PRIMARY } from "../../constants/colors";

export default function HomePage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text
                    style={{ color: PRIMARY}}
                    category="h5"
                >
                    Trang chủ
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });
    return <View></View>;
}
