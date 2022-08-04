import { Text } from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { containerStyles } from "../../stylesContainer";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { tw } from "react-native-tailwindcss";
import { PRIMARY } from "../../constants/colors";
import moment from "moment";
import { getLichHen } from "../../epics-reducers/services/lichhenServices";

const LOAD_STATUS = {
    NONE: 0,
    IDLE: 1,
    FIRST_LOAD: 2,
    LOAD_MORE: 3,
    PULL_REFRESH: 4,
    ALL_LOADED: 5,
};

export default function LichhenTab(props) {
    const [docs, setDocs] = useState([]);
    const [loadStatus, setLoadStatus] = useState(LOAD_STATUS.NONE);
    let page = 1;
    let flatList = useRef();

    function getPage() {
        return page;
    }

    function setPage(page) {
        page = page;
    }

    useEffect(() => {
        onGetFirstLoad();
    }, []);

    const onLoadMore = () => {
        if (loadStatus === LOAD_STATUS.IDLE) {
            if (flatList.current?._listRef?._scrollMetrics?.offset > 1) {
                onGetLoadMore();
            }
        }
    };

    const onGetLoadMore = async () => {
        setLoadStatus(LOAD_STATUS.LOAD_MORE);
        const data = await onGetRecords();

        setPage(getPage() + 1);
        setDocs(data.docs.length > 0 ? [...docs, ...data.docs] : docs);
        setLoadStatus(
            docs.length > 0 ? LOAD_STATUS.IDLE : LOAD_STATUS.ALL_LOADED
        );
    };

    const onGetFirstLoad = async () => {
        setLoadStatus(LOAD_STATUS.FIRST_LOAD);
        setPage(1);

        const { docs } = await onGetRecords();

        setPage(getPage() + 1);
        setDocs(docs);
        setLoadStatus(LOAD_STATUS.IDLE);
    };

    const onGetPullRefresh = async () => {
        setLoadStatus(LOAD_STATUS.PULL_REFRESH);
        setPage(1);

        const { docs } = await onGetRecords();
        setPage(getPage() + 1);
        setDocs(docs);
        setLoadStatus(LOAD_STATUS.IDLE);
    };

    async function onGetRecords() {
        try {
            const { tabindex } = props;
            const requestParams = {
                tabindex: 1,
                loailichhen: 0,
            };
            const responseData = await getLichHen(page, 10, requestParams);
            if (responseData && responseData.docs) {
                return responseData;
            }
            throw new Error("Required");
        } catch (error) {
            setLoadStatus(LOAD_STATUS.IDLE);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
        // onPress={() => this.props.navigation.navigate(LICHHEN_DETAIL, item)}
        >
            <View style={tw.flex1}>
                <View style={[tw.flexRow, tw.itemsCenter, tw.justifyBetween]}>
                    <Text style={[tw.textLg, { color: PRIMARY }]}>
                        Ngày: {moment(item.ngaydatlich).format("DD/MM/YYYY")}-
                        {moment(item.ngaydatlich).format("HH:mm")}
                    </Text>
                    <View style={[tw.flexRow]}>
                        {item.tabindex === 0 && (
                            <View
                                style={[
                                    tw.pX3,
                                    tw.pY1,
                                    tw.roundedFull,
                                    tw.bgGray500,
                                ]}
                            >
                                <Text style={[tw.textSm, tw.textWhite]}>
                                    Chờ xác nhận
                                </Text>
                            </View>
                        )}
                        {item.tabindex === 1 && (
                            <View
                                style={[
                                    tw.pX3,
                                    tw.pY1,
                                    tw.roundedFull,
                                    tw.bgYellow500,
                                ]}
                            >
                                <Text style={[tw.textSm, tw.textWhite]}>
                                    Đã xác nhận
                                </Text>
                            </View>
                        )}
                        {item.tabindex === 2 && (
                            <View
                                style={[
                                    tw.pX3,
                                    tw.pY1,
                                    tw.roundedFull,
                                    tw.bgGreen500,
                                ]}
                            >
                                <Text style={[tw.textSm, tw.textWhite]}>
                                    Đã đến khám
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

                {!item.dangkybn && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons
                            name="account-arrow-right-outline"
                            size={18}
                        />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]}>
                            Đăng ký cho {item?.nguoithan_id?.moiquanhe} :{" "}
                            {item?.nguoithan_id?.hoten}
                        </Text>
                    </View>
                )}

                {!!item.makcb && item.tabindex === 2 && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons name="hospital-box" size={20} />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]}>
                            Mã KCB: {item?.makcb._id}
                        </Text>
                    </View>
                )}

                {!!item.maphong && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons
                            name="hospital-building"
                            size={20}
                        />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]}>
                            {item.maphong.tenphong}
                        </Text>
                    </View>
                )}

                {!!item.dienthoai && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons name="phone" size={20} />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]}>
                            {item.dienthoai}
                        </Text>
                    </View>
                )}

                {!!item.email && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons name="email" size={20} />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]}>
                            {item.email}
                        </Text>
                    </View>
                )}

                {!!item.trieuchung && (
                    <View style={[tw.flexRow, tw.mT1]}>
                        <MaterialCommunityIcons name="note-text" size={18} />
                        <View style={tw.w2} />
                        <Text style={[tw.flex1, tw.textBase]} numberOfLines={4}>
                            {item.trieuchung}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    const renderFooter = () => {
        if (loadStatus === LOAD_STATUS.FIRST_LOAD) {
            return renderFirstLoad();
        } else if (loadStatus === LOAD_STATUS.LOAD_MORE) {
            return renderLoadMore();
        } else if (loadStatus === LOAD_STATUS.ALL_LOADED) {
            return renderAllLoaded();
        }
        return null;
    };

    const renderSeparator = () => {
        return <View style={[tw.mY4, tw.hPx, tw.bgGray400]} />;
    };

    const renderEmpty = () => {
        if (loadStatus === LOAD_STATUS.IDLE) {
            return (
                <View style={[tw.itemsCenter, tw.justifyCenter]}>
                    <Text>Không có dữ liệu</Text>
                </View>
            );
        }
        return null;
    };

    const renderFirstLoad = () => {
        return (
            <View style={[tw.itemsCenter, tw.justifyCenter]}>
                <Text>Đang tải</Text>
            </View>
        );
    };

    const renderLoadMore = () => {
        return (
            <View
                style={[tw.flexRow, tw.pT2, tw.itemsCenter, tw.justifyCenter]}
            >
                <Text style={tw.mL1}>Tải thêm</Text>
            </View>
        );
    };

    const renderAllLoaded = () => {
        return (
            <View
                style={[tw.flexRow, tw.pT2, tw.itemsCenter, tw.justifyCenter]}
            >
                <Text>all_loaded</Text>
            </View>
        );
    };

    return (
        <View style={containerStyles.content}>
            <FlatList
                ref={flatList}
                data={docs}
                refreshing={loadStatus === LOAD_STATUS.PULL_REFRESH}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
                ListEmptyComponent={renderEmpty}
                ListFooterComponent={renderFooter}
                ItemSeparatorComponent={renderSeparator}
                onRefresh={onGetPullRefresh}
                onEndReached={onLoadMore}
                onEndReachedThreshold={0.1}
                contentContainerStyle={[tw.pX4, tw.pT4, tw.pB20]}
            />
            <View style={[tw.absolute, tw.p2, tw.right0, tw.bottom0]}>
                <TouchableOpacity
                    style={[
                        tw.flexRow,
                        tw.pY3,
                        tw.pX4,
                        tw.roundedFull,
                        tw.itemsCenter,
                        { backgroundColor: PRIMARY },
                    ]}
                    // onPress={() =>
                    //     this.props.navigation.navigate(LICHHEN_CREATE, {
                    //         onGoBack: () => this.onGetFirstLoad(),
                    //     })
                    // }
                >
                    <MaterialCommunityIcons
                        name="plus"
                        size={24}
                        color="white"
                    />
                    <Text style={[tw.mL2, tw.textWhite]}>Đặt lịch hẹn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
