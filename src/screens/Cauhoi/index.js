import { Tab, TabBar, Text } from "@ui-kitten/components";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { PRIMARY } from "../../constants/colors";

export default function CauhoiPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text style={{ color: PRIMARY }} category="h6">
                    HỎI ĐÁP/GÓP Ý
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <SafeAreaView>
            <TabBar selectedIndex={selectedIndex}>
                <Tab title={"Lịch hẹn"} />
                <Tab title={"Lịch tái khám"} />
            </TabBar>
        </SafeAreaView>
    );
}
