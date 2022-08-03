import axios from "axios";
import { API } from "../../constants/api";
import { COMMON_APP } from "../../constants/common";

export function getBacsi(page, limit, params) {
    return axios
        .get(
            `${COMMON_APP.HOST_API}${API.BACSI_QUERY.format(page, limit, "")}`,
            { params }
        )
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

export function getBacsiTrangchu() {
    return axios
        .get(`${COMMON_APP.HOST_API}${API.BACSI_TRANGCHU}`)
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
