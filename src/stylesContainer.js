import { StyleSheet } from "react-native";
import { HELPER_LINK_TEXT, LABEL_TEXT } from "./constants/colors";

export const containerStyles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#fff",
    },
    helper_text_link: {
        color: HELPER_LINK_TEXT,
        fontStyle: "italic",
    },
    title_style: {
        color: HELPER_LINK_TEXT,
        alignSelf: "center",
    },
    label_style: {
        fontSize: 15,
        color: LABEL_TEXT,
    },
    icon_style: {
        width: 24,
        height: 24,
    },
});
