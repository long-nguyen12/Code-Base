import { Text } from "@ui-kitten/components";
import React, { useLayoutEffect } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { PRIMARY } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { containerStyles } from "../../stylesContainer";
import { THONGBAO_CANHAN, THONGBAO_CONGDONG } from "../../constants/routes";
import { tw } from "react-native-tailwindcss";

export default function ThongbaoPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text style={{ color: PRIMARY }} category="h6">
                    THÔNG BÁO
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={tw.flexRow}
                // onPress={this.navigateItem(item.router)}
            >
                <View
                    style={[
                        tw.w10,
                        tw.h10,
                        tw.roundedFull,
                        tw.itemsCenter,
                        tw.justifyCenter,
                        item.iconStyle,
                    ]}
                >
                    <Ionicons name={item.icon} size={24} color="white" />
                </View>
                <View style={tw.w2} />
                <View style={tw.flex1}>
                    <View style={[tw.flexRow, tw.justifyBetween]}>
                        <Text category={"h6"} style={containerStyles.textStyle}>{item.title}</Text>
                    </View>
                    <Text style={[tw.mT1, tw.textGray600, tw.textBase]}>
                        {item.description}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderSeparator = () => {
        return <View style={[tw.mY3, tw.mL12, tw.hPx, tw.bgGray300]} />;
    };

    return (
        <SafeAreaView style={containerStyles.content}>
            <FlatList
                data={[
                    {
                        icon: "notifications",
                        title: "Thông báo cá nhân",
                        router: THONGBAO_CANHAN,
                        iconStyle: tw.bgBlue400,
                        description: "Thông báo lịch hẹn, nhắc nhở uống thuốc",
                    },
                    {
                        icon: "newspaper",
                        title: "Thông báo cộng đồng",
                        router: THONGBAO_CONGDONG,
                        iconStyle: tw.bgOrange400,
                        description: "Thông báo, tin tức y tế",
                    },
                ]}
                renderItem={renderItem}
                keyExtractor={(item, i) => `item-${i}`}
                contentContainerStyle={tw.p4}
                ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
}
