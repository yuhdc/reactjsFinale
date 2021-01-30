import React, { Component } from 'react';
import { fetchList } from '../redux/action/axiosAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { FETCH_FILM_LIST } from '../redux/constant';

class Home extends Component {
    render() {
        return (
            <div>
                this is home
            </div>
        );
    }
    componentDidMount() {
        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10',
            method: 'GET',
        }).then(res => {
            this.props.dispatch(FETCH_FILM_LIST, res.data);
            console.log('success', res.data);
        }).catch(err => { console.log('fail', err.data); });

    }
}

export default connect()(Home);