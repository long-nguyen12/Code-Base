import { Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { containerStyles } from "../../stylesContainer";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { tw } from "react-native-tailwindcss";
import { PRIMARY } from "../../constants/colors";

export default function LichtaikhamTab(props) {
    return (
        <View style={containerStyles.content}>
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
