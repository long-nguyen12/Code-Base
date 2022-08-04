import { Text } from "@ui-kitten/components";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    FlatList,
    Image,
} from "react-native";
import { PRIMARY } from "../../constants/colors";
import { containerStyles } from "../../stylesContainer";
import { tw } from "react-native-tailwindcss";

import ChatVoiBacSiIcon from "../../assets/icons/ChatVoiBacSi1.svg";
import DonThuocIcon from "../../assets/icons/DonThuoc1.svg";
import HoiBacSiIcon from "../../assets/icons/HoiBacSi1.svg";
import KetQuaCanLamSangIcon from "../../assets/icons/KetQuaCanLamSang1.svg";
import LichNhacIcon from "../../assets/icons/LichNhac1.svg";
import LichSuKhamIcon from "../../assets/icons/LichSuKham1.svg";
import { SvgUri } from "react-native-svg";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { getBacsiTrangchu } from "../../epics-reducers/services/bacsiServices";
import { getTintucTrangchu } from "../../epics-reducers/services/tintucServices";
import { getHuongdanTrangchu } from "../../epics-reducers/services/huongdanServices";
import { BACSI_PAGE, HUONGDAN_PAGE, TINTUC_PAGE } from "../../constants/routes";
import { CONSTANTS } from "../../constants/constants";
import { COMMON_APP } from "../../constants/common";
import LoadingService from "../../components/Loading/LoadingService";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <Text style={{ color: PRIMARY }} category="h6">
                    tHospital
                </Text>
            ),
            headerTitleAlign: "center",
        });
    });

    const [dsbacsi, setDsbacsi] = useState([]);
    const [dstintuc, setDstintuc] = useState([]);
    const [dshuongdan, setDshuongdan] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        LoadingService.show();
        const [bacsiResp, tintucResp, huongdanResp] = await Promise.all([
            getBacsiTrangchu(),
            getTintucTrangchu(),
            getHuongdanTrangchu(),
        ]);

        setDsbacsi(bacsiResp?.length ? bacsiResp : []);
        setDshuongdan(huongdanResp?.docs?.length ? huongdanResp.docs : []);
        setDstintuc(tintucResp?.docs?.length ? tintucResp.docs : []);
        LoadingService.hide();
    }

    function renderBacsi({ item }) {
        let avatar = CONSTANTS.AVATAR_NAM;
        if (item.hinhanh)
            avatar = {
                uri: COMMON_APP.HOST_API + "/api/files/" + item.hinhanh,
            };
        else if (item?.maphai?._id === 2) avatar = CONSTANTS.AVATAR_NU;
        return (
            <TouchableOpacity
                style={tw.w32}
                onPress={() =>
                    this.props.navigation.navigate(BACSI_DETAIL, {
                        bacsi: item,
                    })
                }
            >
                <View style={[tw.h32, tw.rounded, tw.bgGray200]}>
                    <Image
                        style={[tw.wFull, tw.hFull, tw.rounded]}
                        source={avatar}
                    />
                </View>
                <Text style={tw.mT1} numberOfLines={2}>
                    {item.tennv}
                </Text>
            </TouchableOpacity>
        );
    }

    const renderFooter = (routeName) => () =>
        (
            <TouchableOpacity
                style={[tw.pX4, tw.itemsCenter]}
                //   onPress={() => this.props.navigation.navigate(routeName)}
            >
                <View
                    style={[
                        tw.w12,
                        tw.h12,
                        tw.roundedFull,
                        tw.itemsCenter,
                        tw.justifyCenter,
                        { backgroundColor: PRIMARY },
                    ]}
                >
                    <MaterialCommunityIcons
                        name="chevron-double-right"
                        size={24}
                        color="white"
                    />
                </View>
                <View style={tw.h1} />
                <Text>Xem thêm</Text>
            </TouchableOpacity>
        );

    const renderTintuc = ({ item }) => (
        <TouchableOpacity
            style={tw.w64}
            // onPress={() =>
            //     this.props.navigation.navigate(TINTUC_DETAIL, { tintuc: item })
            // }
        >
            <View style={[tw.h32, tw.rounded, tw.bgGray200]}>
                <Image
                    style={[tw.wFull, tw.hFull, tw.rounded]}
                    source={{
                        uri: COMMON_APP.HOST_API + "/api/files/" + item.avatar,
                    }}
                />
            </View>
            <Text style={tw.mT1} numberOfLines={2}>
                {item.tieudephu}
            </Text>
        </TouchableOpacity>
    );

    const renderHuongdan = ({ item }) => (
        <TouchableOpacity
            style={tw.w64}
            // onPress={() =>
            //     this.props.navigation.navigate(HUONGDAN_DETAIL, {
            //         huongdan: item,
            //     })
            // }
        >
            <View style={[tw.h32, tw.rounded, tw.bgGray200]}>
                <Image
                    style={[tw.wFull, tw.hFull, tw.rounded]}
                    source={{
                        uri: COMMON_APP.HOST_API + "/api/files/" + item.avatar,
                    }}
                />
            </View>
            <Text style={tw.mT1} numberOfLines={2}>
                {item.tieude}
            </Text>
        </TouchableOpacity>
    );

    const renderSeparator = () => <View style={tw.w3} />;

    return (
        <SafeAreaView style={containerStyles.content}>
            <ScrollView contentContainerStyle={[tw.p4]}>
                <TouchableOpacity
                    style={[
                        tw.flexRow,
                        tw.p4,
                        tw.mT4,
                        tw.rounded,
                        tw.itemsCenter,
                        { backgroundColor: PRIMARY },
                    ]}
                    onPress={() => {
                        //   if (this.props.userInfoRes && this.props.userInfoRes._id) {
                        //     this.props.navigation.navigate(LICHHEN_CREATE);
                        //   } else {
                        //     this.props.navigation.navigate(LOGIN_PAGE);
                        //   }
                    }}
                >
                    <View style={[tw.flex1]}>
                        <Text style={[tw.textXl, tw.uppercase, tw.textWhite]}>
                            Đặt lịch khám bệnh
                        </Text>
                        <View style={tw.h2} />
                        <Text style={[tw.textWhite]}>
                            Nhận tư vấn miễn phí và nhiều ưu đãi khác
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={[tw.flexRow, tw.flexWrap, tw.mT4, tw._m1]}>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#ddaefe" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(LICHSUKHAM_PAGE)
                            // }
                        >
                            {/* <SvgUri
                                width="120"
                                height="120"
                                uri={require("../../assets/icons/ChatVoiBacSi1.svg")}
                            /> */}
                            {/* <ChatVoiBacSiIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>Lịch sử khám</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#bfe6bb" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DONTHUOC_PAGE)
                            // }
                        >
                            {/* <DonThuocIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>Đơn thuốc</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#ece69e" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(KETQUAKHAM_PAGE)
                            // }
                        >
                            {/* <KetQuaCanLamSangIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Kết quả cận lâm sàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#ffd556" },
                            ]}
                            // onPress={() => this.preventBeforeLogin(CAUHOI_PAGE)}
                        >
                            {/* <HoiBacSiIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Hỏi đáp góp ý
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#24bbc4" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DANHGIA_CREATE)
                            // }
                        >
                            {/* <LichNhacIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Đánh giá dịch vụ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#fdd0c7" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(DANHMUC_DICHVU_PAGE)
                            // }
                        >
                            {/* <LichSuKhamIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Đăng ký dịch vụ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#ece69e" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(LICHHENCHUYENGIA_PAGE)
                            // }
                        >
                            {/* <KetQuaCanLamSangIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Đăng ký Bác sĩ khám
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[tw.p1, tw.w1_3, { minHeight: 120 }]}>
                        <TouchableOpacity
                            style={[
                                tw.flex1,
                                tw.rounded,
                                { backgroundColor: "#fdd0c7" },
                            ]}
                            // onPress={() =>
                            //     this.preventBeforeLogin(LICHHENPHAUTHUAT_PAGE)
                            // }
                        >
                            {/* <LichSuKhamIcon style={tw.absolute} /> */}
                            <Text style={[tw.p4, tw.textLg]}>
                                Đăng ký Bác sĩ phẫu thuật
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tw.mT4}>
                    <Text category={"h5"} style={containerStyles.textStyle}>
                        Đội ngũ bác sĩ, chuyên gia
                    </Text>
                    <View style={tw.h2} />
                    <FlatList
                        data={dsbacsi}
                        horizontal={true}
                        renderItem={renderBacsi}
                        keyExtractor={(item, i) => `bacsi-${i}`}
                        ItemSeparatorComponent={renderSeparator}
                        ListFooterComponentStyle={[
                            tw.itemsCenter,
                            tw.justifyCenter,
                        ]}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={renderFooter(BACSI_PAGE)}
                    />
                </View>
                <View style={tw.mT4}>
                    <Text category={"h5"} style={containerStyles.textStyle}>
                        Tin tức y tế
                    </Text>
                    <View style={tw.h2} />
                    <FlatList
                        data={dstintuc}
                        horizontal={true}
                        renderItem={renderTintuc}
                        keyExtractor={(item, i) => `tintuc-${i}`}
                        ItemSeparatorComponent={renderSeparator}
                        ListFooterComponentStyle={[
                            tw.itemsCenter,
                            tw.justifyCenter,
                        ]}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={renderFooter(TINTUC_PAGE)}
                    />
                </View>
                <View style={tw.mT4}>
                    <Text category={"h5"} style={containerStyles.textStyle}>
                        Hướng dẫn khám bệnh
                    </Text>
                    <View style={tw.h2} />
                    <FlatList
                        data={dshuongdan}
                        horizontal={true}
                        renderItem={renderHuongdan}
                        keyExtractor={(item, i) => `huongdan-${i}`}
                        ItemSeparatorComponent={renderSeparator}
                        ListFooterComponentStyle={[
                            tw.itemsCenter,
                            tw.justifyCenter,
                        ]}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={renderFooter(HUONGDAN_PAGE)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
