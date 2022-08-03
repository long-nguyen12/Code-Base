import React, { useLayoutEffect } from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Button, Text, Input } from "@ui-kitten/components";
import { tw } from "react-native-tailwindcss";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { LoginSchema } from "./schemas/schemas";
import { containerStyles } from "../../stylesContainer";
import { DEVICE_HEIGHT, STATUS_BAR_HEIGHT } from "../../constants/variable";
import { HELPER_LINK_TEXT } from "../../constants/colors";
import { FORGOTPASSWORD_PAGE, REGISTER_PAGE } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { userLoginRoutine } from "./saga/routines";

export default function LoginPage(props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false,
        });
    });

    const dispatch = useDispatch();

    const initialValues = {
        username: "",
        password: "",
    };

    async function onFormSubmit(values) {
        dispatch(userLoginRoutine.trigger(values));
    }

    return (
        <SafeAreaView
            style={[containerStyles.content, { marginTop: STATUS_BAR_HEIGHT }]}
        >
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image
                        source={require("../../../assets/icon.png")}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
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
                                    placeholder="Tên đăng nhập"
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
                                <Button
                                    style={{ marginTop: 8 }}
                                    onPress={handleSubmit}
                                    status="primary"
                                >
                                    Đăng nhập
                                </Button>
                            </View>
                        )}
                    </Formik>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 8,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate(FORGOTPASSWORD_PAGE)
                            }
                        >
                            <Text style={containerStyles.helper_text_link}>
                                Quên mật khẩu
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate(REGISTER_PAGE)
                            }
                        >
                            <Text style={containerStyles.helper_text_link}>
                                Đăng kí
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        marginHorizontal: 20,
    },
    image: {
        height: 160,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    },
});
