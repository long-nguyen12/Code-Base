import { Button, Text } from "@ui-kitten/components";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { PRIMARY } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRoutine } from "../Login/saga/routines";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { tw } from "react-native-tailwindcss";
import { containerStyles } from "../../stylesContainer";

export default function SettingsPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            // headerTitle: () => (
            //     <Text style={{ color: PRIMARY }} category="h5">
            //         Cài đặt
            //     </Text>
            // ),
            // headerTitleAlign: "center",
            headerShown: false,
        });
    });

    const dispatch = useDispatch();
    const userInfoRes = useSelector((state) => state.auth.me);

    function userLogout() {
        dispatch(userLogoutRoutine.trigger());
    }

    return (
        <SafeAreaView style={containerStyles.content}>
            <ScrollView contentContainerStyle={tw.pY4}>
                <TouchableOpacity
                    style={[tw.flexRow, tw.p4, tw.itemsCenter]}
                    onPress={() => this.preventBeforeLogin(CANHAN_PAGE)}
                >
                    <MaterialCommunityIcons
                        name="account-circle"
                        size={56}
                        color="#2193D2"
                    />
                    {userInfoRes?._id ? (
                        <View style={[tw.flex1, tw.mX2]}>
                            <Text category={"h5"} style={containerStyles.textStyle}>{userInfoRes?.full_name}</Text>
                            <Text style={[tw.textBase, tw.textGray600]}>
                                Thông tin cá nhân
                            </Text>
                        </View>
                    ) : (
                        <View style={[tw.flex1, tw.mX2]}>
                            <Text rkType="header3">Đăng nhập</Text>
                            <Text style={[tw.textBase, tw.textGray600]}>
                                Đăng nhập tài khoản cá nhân
                            </Text>
                        </View>
                    )}
                    <MaterialCommunityIcons name="chevron-right" size={20} />
                </TouchableOpacity>
                <View style={[tw.h4, tw.bgGray200]} />
                <View style={[tw.flexRow, tw.flexWrap, tw.p4, tw._m1]}>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(LICHSUKHAM_PAGE)
                            // }
                        >
                            {/* <LichsukhamIcon
                                fill={KittenTheme.colors.appColor}
                            /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Lịch sử khám
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DONTHUOC_PAGE)
                            // }
                        >
                            {/* <DonthuocIcon fill={KittenTheme.colors.appColor} /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Đơn thuốc
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(KETQUAKHAM_PAGE)
                            // }
                        >
                            {/* <HosoSuckhoeIcon
                                fill={KittenTheme.colors.appColor}
                            /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Kết quả cận lâm sàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DANHGIA_PAGE)
                            // }
                        >
                            {/* <TheodoiSuckhoeIcon
                                fill={KittenTheme.colors.appColor}
                            /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Đánh giá dịch vụ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DANHMUC_DICHVU_PAGE)
                            // }
                        >
                            {/* <LichsukhamIcon
                                fill={KittenTheme.colors.appColor}
                            /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Gói dịch vụ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_2]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.p4,
                                tw.roundedLg,
                                tw.bgBlue200,
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(HOSOSUCKHOE_PAGE)
                            // }
                        >
                            {/* <DonthuocIcon fill={KittenTheme.colors.appColor} /> */}
                            <Text
                                style={[
                                    tw.mT1,
                                    tw.textLg,
                                    { fontWeight: "700" },
                                ]}
                            >
                                Hồ sơ sức khỏe
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[tw.h4, tw.bgGray200]} />
                <View style={tw.pX4}>
                    <TouchableOpacity
                        style={[tw.flexRow, tw.pY4, tw.itemsCenter]}
                        // onPress={() =>
                        //     this.props.navigation.navigate(HOTRO_PAGE)
                        // }
                    >
                        <View
                            style={[
                                tw.p1,
                                tw.roundedFull,
                                {
                                    backgroundColor: PRIMARY,
                                },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="headset"
                                size={24}
                                color="white"
                            />
                        </View>
                        <Text style={[tw.flex1, tw.mX2, tw.textLg]}>
                            Trung tâm hỗ trợ
                        </Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            style={tw.mX1}
                        />
                    </TouchableOpacity>
                    <View style={[tw.hPx, tw.bgGray300]} />
                    <TouchableOpacity
                        style={[tw.flexRow, tw.pY4, tw.itemsCenter]}
                        // onPress={() =>
                        //     this.props.navigation.navigate(THONGTIN_PAGE)
                        // }
                    >
                        <View
                            style={[
                                tw.p1,
                                tw.roundedFull,
                                {
                                    backgroundColor: PRIMARY,
                                },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="contacts"
                                size={24}
                                color="white"
                            />
                        </View>
                        <Text style={[tw.flex1, tw.mX2, tw.textLg]}>
                            Thông tin liên hệ
                        </Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            style={tw.mX1}
                        />
                    </TouchableOpacity>
                    <View style={[tw.hPx, tw.bgGray300]} />
                    <TouchableOpacity
                        style={[tw.flexRow, tw.pY4, tw.itemsCenter]}
                        // onPress={() =>
                        //     this.props.navigation.navigate(GIOITHIEU_PAGE)
                        // }
                    >
                        <View
                            style={[
                                tw.p1,
                                tw.roundedFull,
                                {
                                    backgroundColor: PRIMARY,
                                },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="information"
                                size={24}
                                color="white"
                            />
                        </View>
                        <Text style={[tw.flex1, tw.mX2, tw.textLg]}>
                            Giới thiệu bệnh viện
                        </Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            style={tw.mX1}
                        />
                    </TouchableOpacity>
                    <View style={[tw.hPx, tw.bgGray300]} />
                    {userInfoRes?._id && (
                        <TouchableOpacity
                            style={[tw.flexRow, tw.pY4, tw.itemsCenter]}
                            onPress={userLogout}
                        >
                            <View
                                style={[
                                    tw.p1,
                                    tw.roundedFull,
                                    {
                                        backgroundColor: PRIMARY,
                                    },
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name="arrow-right-thick"
                                    size={24}
                                    color="white"
                                />
                            </View>
                            <Text style={[tw.flex1, tw.mX2, tw.textLg]}>
                                Đăng xuất
                            </Text>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={20}
                                style={tw.mX1}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
