import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Login from './Login';
import AddMember from './AddMember';
import MemberList from './MemberList';
import MemberForm from './MemberForm';

class Members extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formal_name: [],
            isDisplayForm: false,
            memberEditing: null,
        }
    }

    //TODO Tìm vị trí bản ghi
    findIndex = (id) => {
        var { formal_name } = this.state;
        var result = -1;
        formal_name.forEach((formal_name, index) => {
            if (formal_name.id === id) {
                result = index;
            }
        });
        return result;
    }

    //TODO Sửa thông tin học viên
    onEdit = (id) => {

        // Lấy data từ state
        var { formal_name } = this.state;

        //Tìm vị trí và bắt thông tin bản ghi người dùng chọn
        var index = this.findIndex(id);
        var memberEditing = formal_name[index];
        this.setState({
            memberEditing: memberEditing
        });
        //Hiển thị form thông tin của bản ghi người dùng chọn
        this.onShowForm();
    }

    //TODO Xóa học viên
    onDelete = (id) => {
        var {formal_name} = this.state;
        var index = this.findIndex(id);
        if (id !== -1) {
            formal_name.splice(index, 1);
            this.setState({
                formal_name: formal_name
            });
            this.props.onSubmitMemb(formal_name);
        }
        this.onCloseForm();
    }

    //CWM   
    componentWillMount() {
        this.setState({
            formal_name: this.props.formal_name
        })
    }
    
    //TODO Submit thông tin học viên
    onSubmitMemb = (data) => {
        var {formal_name} = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            formal_name.push(data);
        } else {
            var index = this.findIndex(data.id);
            formal_name[index] = data;
        }
        this.props.onSubmitMemb(formal_name);
    }

    //TODO generate ID cho tmpData
    randomizeChar = () => {
        return (
            Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
        );
    }
    generateID = () => {
        return (
            this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar() + '-' + this.randomizeChar()
        );
    }

    //TODO Hiển thị/Ẩn form thêm lớp mới
    onToggleForm = () => {
        //Ẩn form khi đang hiện & hiện form khi đang ẩn
        // this.setState({
        //     isDisplayForm: !this.state.isDisplayForm
        // });

        //Nếu form có thông tin: clear sạch thông tin rồi hiện
        if (this.state.memberEditing !== null) {
            this.setState({
                memberEditing: null
            });
        } 
        if (this.state.isDisplayForm === false) {
            this.onShowForm();
        } else if (this.state.isDisplayForm === true && this.state.memberEditing === null) {
            this.onCloseForm();
        }
    }

    //TODO Đóng form
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    //TODO Mở form
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }
    
    //TODO Về dashboard
    showDashBoard = () => {
        ReactDOM.render(
            <App />,
            document.getElementById("root")
        );
    }

    //TODO Đăng xuất (temp)
    logOut = () => {
        ReactDOM.render(
            <Login />,
            document.getElementById("root")
        );
    }

    render() {
        var {isDisplayForm, memberEditing} = this.state;
        var elmMembForm = isDisplayForm 
            ? <MemberForm 
                member={memberEditing}
                onSubmitMemb={this.onSubmitMemb}
                onCloseForm={this.onCloseForm}/> 
            : '';



        return (
            <div>
                {/* nav */}
                <nav className="navbar navbar-custom navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse"><span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span></button>
                            <a className="navbar-brand">
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
                            <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt="" />
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">Administrator</div>
                            <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="divider"></div>
                    <ul className="nav menu">
                        <li className="parent" onClick={this.showDashBoard}>
                            <a>
                                <em className="fa fa-dashboard">
                                    &nbsp;
                                </em>
                                Dashboard
                            </a>
                            <ul className="children collapse in" id="sub-item-1" aria-expanded="true">
                                <li>
                                    <a>
                                        <span className="fa fa-arrow-right">&nbsp;</span>
                                        Danh sách học viên
					                </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={this.logOut}>
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
                            <li><a>
                                <em className="fa fa-home"></em>
                            </a></li>
                            <li className="active">Dashboard</li>
                            <li>Danh sách học viên</li>
                            <li>Lớp {this.props.clzName}</li>
                        </ol>
                    </div>

                    {/* Thêm công việc */}
                    <AddMember onToggleForm={this.onToggleForm} />

                    {/* Member form */}
                    {elmMembForm}

                    {/* data tables */}
                    <div className="">
                        <MemberList
                            memberList={this.props.formal_name}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit}
                            onFilter={this.onFilter}
                        />
                        {/* 
                            
                            onFilter={this.onFilter} */}
                    </div>

                    {/* /.main */}
                </div>

            </div>
        );
    }
}

export default Members;