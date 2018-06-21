import React, { Component } from 'react';
import './App.css';
import ClassList from './components/ClassList';
import ClassForm from './components/ClassForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clazz: [],
            isDisplayForm: false
        }
    }
    
    // tạo tmpData để test
    randomizeChar = () => {
        return (
            Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
        );
    }
    generateID = () => {
        return (
            this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar()
        );
    }
    onGenerateData = () => {
        var clazz = [
            {
                id: this.generateID(),
                name: 'aaa',
                type: true,
                level: 'sơ cấp',
                status: 'chưa khai giảng',
                list_master: 'chien',
                list_manager: 'chien',
                time_start: '1/1/2018',
                time_end: '1/2/2018',
                location: 'HN'
            },
            {
                id: this.generateID(),
                name: 'aab',
                type: true,
                level: 'trung cấp',
                status: 'đang học',
                list_master: 'chien',
                list_manager: 'chien',
                time_start: '1/1/2018',
                time_end: '1/2/2018',
                location: 'HN'
            },
            {
                id: this.generateID(),
                name: 'abc',
                type: false,
                level: 'cao cấp',
                status: 'bế giảng',
                list_master: 'chien',
                list_manager: 'chien',
                time_start: '1/1/2018',
                time_end: '1/2/2018',
                location: 'HCM'
            },
            {
                id: this.generateID(),
                name: 'abb',
                type: false,
                level: 'sơ cấp',
                status: 'bế giảng',
                list_master: 'chien',
                list_manager: 'chien',
                time_start: '1/1/2018',
                time_end: '1/2/2018',
                location: 'HCM'
            },
            {
                id: this.generateID(),
                name: 'acc',
                type: true,
                level: 'đào tạo trợ giảng',
                status: 'bế giảng',
                list_master: 'chien',
                list_manager: 'chien',
                time_start: '1/1/2018',
                time_end: '1/2/2018',
                location: 'HN'
            }
        ]
        this.setState({
            clazz: clazz
        });
        localStorage.setItem('clazz', JSON.stringify(clazz));
    }


    // Hiển thị/Ẩn form thêm lớp mới
    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onSubmit = (data) => {
        console.log(data);
        var {clazz} = this.state;
        data.id = this.generateID();
        clazz.push(data);
        // var clazz = {
        //     name: data.name,
        //     type: data.type,
        //     level: data.level,
        //     status: data.status,
        //     list_master: data.list_master,
        //     list_manager: data.list_manager,
        //     time_start: data.time_start,
        //     time_end: data.time_end,
        //     location: data.location,
        //     pic: data.pic,
        //     more_infor: data.more_infor
        // }
        this.setState({
            clazz: clazz
        });
        localStorage.setItem('clazz', JSON.stringify(clazz));
    }

    onCloseForm = () => {
        this.onToggleForm();
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('clazz')) {
            var clazz = JSON.parse(localStorage.getItem('clazz'));
            this.setState({
                clazz: clazz
            })
        }
    }

    render() {
        var {clazz, isDisplayForm} = this.state;
        var elmClassForm = isDisplayForm 
            ? <ClassForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} /> : '';

        return (
            <div className="App">

                {/* nav */}
                <nav className="navbar navbar-custom navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse"><span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span></button>
                            <a className="navbar-brand" href="">
                                <span>.Viet</span>
                                Meditation
                            </a>
                        </div>
                    {/* /.container-fluid  */}
                    </div>

                {/* /.nav */}
                </nav>

                {/* sidebar */}
                <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt=""/>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">Administrator</div>
                            <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="divider"></div>
                    <ul className="nav menu">
                        <li className="active">
                            <a href="">
                                <em className="fa fa-dashboard">
                                    &nbsp;
                                </em> 
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <em className="fa fa-power-off">
                                    &nbsp;
                                </em>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                {/* /.sidebar */}
                </div>

                {/* main */}
                <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                    <div className="row mt-60">
                        <ol className="breadcrumb">
                            <li><a href="">
                                <em className="fa fa-home"></em>
                            </a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </div>

                    {/* Thêm công việc */}
                    <button 
                        type="button" 
                        className="btn btn-primary m-el-5"
                        onClick={this.onToggleForm}>
                        <span className="fa fa-plus mr-5"></span>
                        &nbsp;
                        Lớp mới
                    </button>

                    {/* a button to generate temporary data */}
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onGenerateData}>
                        <span className="fa fa-plus mr-5"></span>
                        &nbsp;Generate Data
                    </button>
                    <br/>

                    {/* class form */}
                    {elmClassForm}


                    {/* Datatable Controler (Search/sort) */}


                    {/* data tables */}                    
                    <div className="col-xs-13 col-sm-13 col-md-13 col-lg-13">
                        <ClassList clazz={clazz} />
                    </div>
                                   
                {/* /.main */}
                </div>

            </div>
        );
    }
}

export default App;
