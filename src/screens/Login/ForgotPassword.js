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
import {
    ForgotPasswordSchema,
    LoginSchema,
    SignupSchema,
} from "./schemas/schemas";
import { containerStyles } from "../../stylesContainer";
import { DEVICE_HEIGHT, STATUS_BAR_HEIGHT } from "../../constants/variable";
import { HELPER_LINK_TEXT } from "../../constants/colors";

export default function ForgotPasswordPage(props) {
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

    const initialValues = {
        phone: "",
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
                    <Text
                        category={"label"}
                        style={{
                            color: HELPER_LINK_TEXT,
                            fontSize: 20,
                            marginVertical: 20,
                        }}
                    >
                        Khôi phục mật khẩu
                    </Text>
                </View>
                <View style={styles.content}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={ForgotPasswordSchema}
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
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
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

                                <Button
                                    style={{}}
                                    onPress={handleSubmit}
                                    status="primary"
                                >
                                    Tiếp tục
                                </Button>
                            </View>
                        )}
                    </Formik>
                </View>
            </KeyboardAwareScrollView>
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
