import { FETCH_FILM_LIST } from "../constant/index"
import Axios from 'axios';
import createAction from ".";


export const fetchList = (dispatch) => {
    Axios({
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10',
        method: 'GET',
    }).then((res => {
        console.log('success fetch');
        dispatch(createAction(FETCH_FILM_LIST, res.data));
    })).catch((err) => {
        console.log(err.data);
    })
}