import axios from "axios";
import { COMMON_APP } from "../../constants/common";
import { API } from "../../constants/api";

export function userLogin(data) {
    const url = `${COMMON_APP.HOST_API}${API.USER_DANGNHAP}`;

    return axios
        .post(url, data)
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
        })
        .catch((error) => {
            return null;
        });
}

export function userData(token) {
    const url = `${COMMON_APP.HOST_API}${API.USER_ME}`;

    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
        })
        .catch((error) => {
            return null;
        });
}
