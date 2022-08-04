import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { default as mapping } from "./src/utilities/mapping.json";
import { default as theme } from "./src/utilities/theme.json";
import AppNavigator from "./src/navigation/AppNavigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";
import configureAppStore from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { store, persistor } = configureAppStore();

export default function App() {
    return (
        <SafeAreaProvider style={styles.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider
                        {...eva}
                        theme={{ ...eva.light, ...theme }}
                        // customMapping={{ ...eva.mapping, ...mapping }}
                    >
                        <AppNavigator />
                    </ApplicationProvider>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
