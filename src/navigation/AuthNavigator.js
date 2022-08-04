import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import * as ROUTES from "../constants/routes";

import LoginPage from "../screens/Login";
import ForgotPasswordPage from "../screens/Login/ForgotPassword";
import RegisterPage from "../screens/Login/Register";

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.LOGIN_PAGE} component={LoginPage} />
            <Stack.Screen
                name={ROUTES.FORGOTPASSWORD_PAGE}
                component={ForgotPasswordPage}
            />
            <Stack.Screen
                name={ROUTES.REGISTER_PAGE}
                component={RegisterPage}
            />
        </Stack.Navigator>
    );
}
