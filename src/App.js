import React, { Component } from 'react';
import './App.css';
import ClassList from './components/ClassList';
import ClassForm from './components/ClassForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clazz: [],
            isDisplayForm: false,
            clazzEditing: null
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

    //Tìm vị trí bản ghi
    findIndex = (id) => {
        var {clazz} = this.state;
        var result = -1;
        clazz.forEach((clazz, index) => {
            if (clazz.id === id) {
                result = index;
            }
        });
        return result;
    }

    // Hiển thị/Ẩn form thêm lớp mới
    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    //Xóa bản ghi trong CSDL
    onDelete = (id) => {
        var {clazz} = this.state;
        var index = this.findIndex(id);
        if (id !== -1) {
            clazz.splice(index, 1);
            this.setState({
                clazz: clazz
            });
            localStorage.setItem('clazz', JSON.stringify(clazz));
        }
        this.onCloseForm();
    }

    //Sửa bản ghi
    onEdit = (id) => {
        var {clazz} = this.state;
        var index = this.findIndex(id);
        var clazzEditing = clazz[index];
        this.setState({
            clazzEditing: clazzEditing
        });
        this.onShowForm();
    }


    //Submit data và lưu CSDL
    onSubmit = (data) => {
        console.log(data);
        var {clazz} = this.state;
        data.id = this.generateID();
        clazz.push(data);
        this.setState({
            clazz: clazz
        });
        localStorage.setItem('clazz', JSON.stringify(clazz));
    }

    //Đóng form
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    //Mở form
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }

    //CWM
    componentWillMount() {
        if (localStorage && localStorage.getItem('clazz')) {
            var clazz = JSON.parse(localStorage.getItem('clazz'));
            this.setState({
                clazz: clazz
            })
        }
    }

    render() {
        var {clazz, isDisplayForm, clazzEditing} = this.state; //remember: không được quên khai báo local var
        var elmClassForm = isDisplayForm 
            ? <ClassForm 
                onSubmit={this.onSubmit} 
                onCloseForm={this.onCloseForm} 
                clazz={clazzEditing}/> 
                : '';

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

                    
                    <br/>

                    {/* class form */}
                    {elmClassForm}


                    {/* Datatable Controler (Search/sort) */}


                    {/* data tables */}                    
                    <div className="">
                        <ClassList 
                            clazz={clazz}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit} />
                    </div>
                                   
                {/* /.main */}
                </div>

            </div>
        );
    }
}

export default App;
