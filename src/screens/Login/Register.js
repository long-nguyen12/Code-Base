import React, { useLayoutEffect, useState, useEffect } from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    Button,
    Text,
    Input,
    Icon,
    RadioGroup,
    Radio,
} from "@ui-kitten/components";
import { tw } from "react-native-tailwindcss";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { LoginSchema, SignupSchema } from "./schemas/schemas";
import { containerStyles } from "../../stylesContainer";
import { DEVICE_HEIGHT, STATUS_BAR_HEIGHT } from "../../constants/variable";
import { HELPER_LINK_TEXT } from "../../constants/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function RegisterPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        style={{ paddingHorizontal: 20 }}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Icon
                            name={"arrow-back-outline"}
                            fill={HELPER_LINK_TEXT}
                            style={containerStyles.icon_style}
                        />
                    </TouchableOpacity>
                );
            },
            headerTitle: () => null,
            headerRight: () => {
                return (
                    <View>
                        <Text></Text>
                    </View>
                );
            },
            headerStyle: {
                elevation: 0,
                shadowOffset: {
                    height: 0,
                },
                borderBottomWidth: 0,
            },
        });
    });
    const [selectedGender, setSelectedGender] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedBirthday, setSelectedBirthday] = useState(null);
    const initialValues = {
        username: "",
        password: "",
        fullname: "",
        birthday: "",
        re_password: "",
        phone: "",
        email: "",
        gender: selectedGender === 0 ? "Nam" : index === 1 ? "Nữ" : "Khác",
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedBirthday(date);
        console.log("A date has been picked: ", date);
        hideDatePicker();
    };

    async function onFormSubmit(values) {
        console.log(values);
    }

    return (
        <SafeAreaView style={[containerStyles.content]}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image
                        source={require("../../../assets/icon.png")}
                        style={styles.image}
                    />
                </View>
                <ScrollView style={styles.content}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => onFormSubmit(values)}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <View>
                                <Input
                                    placeholder="Họ và tên"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Họ và tên*
                                        </Text>
                                    )}
                                    onChangeText={handleChange("fullname")}
                                    onBlur={handleBlur("fullname")}
                                    value={values.fullname}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.fullname && touched.fullname)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.fullname}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Ngày sinh"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Ngày sinh*
                                        </Text>
                                    )}
                                    onFocus={showDatePicker}
                                    onChangeText={() => {
                                        handleChange("birthday");
                                        values.birthday =
                                            selectedBirthday.toString();
                                    }}
                                    onBlur={handleBlur("birthday")}
                                    value={values.birthday}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.birthday && touched.birthday)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.birthday}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Tên đăng nhập"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Tên đăng nhập*
                                        </Text>
                                    )}
                                    onChangeText={handleChange("username")}
                                    onBlur={handleBlur("username")}
                                    value={values.username}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.username && touched.username)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.username}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Mật khẩu"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Mật khẩu*
                                        </Text>
                                    )}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    style={{ marginTop: 8 }}
                                    secureTextEntry={true}
                                    caption={() => {
                                        if (errors.password && touched.password)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.password}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Nhập lại mật khẩu"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Nhập lại mật khẩu*
                                        </Text>
                                    )}
                                    onChangeText={handleChange("re_password")}
                                    onBlur={handleBlur("re_password")}
                                    value={values.re_password}
                                    style={{ marginTop: 8 }}
                                    secureTextEntry={true}
                                    caption={() => {
                                        if (
                                            errors.re_password &&
                                            touched.re_password
                                        )
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.re_password}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Số điện thoại"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Số điện thoại*
                                        </Text>
                                    )}
                                    onChangeText={handleChange("phone")}
                                    onBlur={handleBlur("phone")}
                                    value={values.phone}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.phone && touched.phone)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.phone}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <Input
                                    placeholder="Email"
                                    label={() => (
                                        <Text
                                            category={"label"}
                                            style={containerStyles.label_style}
                                        >
                                            Email
                                        </Text>
                                    )}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.email && touched.email)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.email}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        category={"label"}
                                        style={{ fontSize: 15 }}
                                    >
                                        Giới tính
                                    </Text>
                                    <RadioGroup
                                        selectedIndex={selectedGender}
                                        onChange={(index) => {
                                            setSelectedGender(index);
                                            handleChange("gender");
                                            values.gender =
                                                index === 0
                                                    ? "Nam"
                                                    : index === 1
                                                    ? "Nữ"
                                                    : "Khác";
                                        }}
                                        style={{ flexDirection: "row" }}
                                    >
                                        <Radio>Nam</Radio>
                                        <Radio>Nữ</Radio>
                                        <Radio>Khác</Radio>
                                    </RadioGroup>
                                </View>
                                {/* <Input
                                    placeholder="Giới tính"
                                    onChangeText={handleChange("gender")}
                                    onBlur={handleBlur("gender")}
                                    value={values.gender}
                                    style={{ marginTop: 8 }}
                                    caption={() => {
                                        if (errors.gender && touched.gender)
                                            return (
                                                <Text category={"c2"}>
                                                    {errors.gender}
                                                </Text>
                                            );
                                        return <View></View>;
                                    }}
                                /> */}
                                <Button
                                    style={{ marginTop: 8 }}
                                    onPress={handleSubmit}
                                    status="primary"
                                >
                                    Đăng kí
                                </Button>
                            </View>
                        )}
                    </Formik>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 8,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        >
                            <Text style={containerStyles.helper_text_link}>
                                Đã có tài khoản? Đăng nhập
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        height: (DEVICE_HEIGHT - STATUS_BAR_HEIGHT) / 4,
    },
    content: {
        height: ((DEVICE_HEIGHT - STATUS_BAR_HEIGHT) * 2) / 3,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    image: {
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    },
});
