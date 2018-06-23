import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Login from './components/Login';
import ClassList from './components/ClassList';
import ClassForm from './components/ClassForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clazz: [],
            isDisplayForm: false,
            clazzEditing: null,
            filter: {
                name: '',
                type: -1, //all: -1, offline: 0, online: 1
                level: -1, //all: -1, sơ cấp: 0, trung cấp: 1, cao cấp: 2, đào tạo trợ giảng: 3
                status: -1, //all: -1, chưa khai giảng: 0, đang học: 1, bế giảng: 2
                listMaster: '',
                listManager: '',
                timeStart: '',
                timeEnd: '',
                location: -1, //all: -1, Voi Phục: 0, Đội Cấn: 1, HQV: 2
            }
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
        //Ẩn form khi đang hiện & hiện form khi đang ẩn
        // this.setState({
        //     isDisplayForm: !this.state.isDisplayForm
        // });

        //Nếu form có thông tin: clear sạch thông tin rồi hiện
        if (this.state.clazzEditing !== null) {
            this.setState({
                clazzEditing: null
            });
        } if (this.state.isDisplayForm === false) {
            this.onShowForm();
        } else if (this.state.isDisplayForm === true && this.state.clazzEditing === null) {
            this.onCloseForm();
        }
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

        // Lấy data từ state
        var {clazz} = this.state;

        //Tìm vị trí và bắt thông tin bản ghi người dùng chọn
        var index = this.findIndex(id);
        var clazzEditing = clazz[index];
        this.setState({
            clazzEditing: clazzEditing
        });

        //Hiển thị form thông tin của bản ghi người dùng chọn
        this.onShowForm();
    }

    //TODO Lọc (filter)
    onFilter = (filterName, filterType, filterLevel, filterStatus, filterListMaster, filterListManager, filterTimeStart, filterTimeEnd, filterLocation) => {
        //console.log(filterName, filterType, filterLevel, filterStatus, filterListMaster, filterListManager, filterTimeStart, filterTimeEnd, filterLocation);
        //Convert String to int
        filterType = parseInt(filterType, 10);
        filterLevel = parseInt(filterLevel, 10);
        filterStatus = parseInt(filterStatus, 10);
        filterLocation = parseInt(filterLocation, 10);
        
        //gán giá trị vào state filter để render kết quả
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                type: filterType, 
                level: filterLevel, 
                status: filterStatus, 
                listMaster: filterListMaster.toLowerCase(),
                listManager: filterListManager.toLowerCase(),
                timeStart: filterTimeStart.toLowerCase(),
                timeEnd: filterTimeEnd.toLowerCase(),
                location: filterLocation
            }
        });
    }


    //Submit data và lưu CSDL
    onSubmit = (data) => {
        console.log(data);
        var {clazz} = this.state;

        //Kiểm tra trạng thái (Thêm hay sửa?)
        if (data.id === '') {                   //Thêm bản ghi mới
            data.id = this.generateID();
            clazz.push(data);      
        } else {                                //Cập nhật bản ghi sẵn có
            var index = this.findIndex(data.id);
            clazz[index] = data;
        }
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

    //Đăng xuất (temp)
    logOut = () => {
        ReactDOM.render(
            <Login />,
            document.getElementById("root")
        );
    }


    render() {
        var {clazz, isDisplayForm, clazzEditing, filter} = this.state; //remember: không được quên khai báo local var
        //console.log(filter);
        
        //TODO: Lọc dữ liệu
        if (filter) {
            //Lọc theo tên lớp học
            if(filter.name) {
                clazz = clazz.filter((clazz) => {
                    return clazz.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }

            //Lọc theo loại lớp
            clazz = clazz.filter((elmClazz) => {
                if (filter.type === -1) {
                    return elmClazz;
                } else {
                    return elmClazz.type === (filter.type === 1 ? true : false);
                }
            });

            //Lọc theo cấp độ
            clazz = clazz.filter((elmClazz) => {
                if (filter.level === -1) {
                    return elmClazz;
                } else {
                    if (filter.level === 0) return elmClazz.level === "sơ cấp"
                    else if (filter.level === 1) return elmClazz.level === "trung cấp"
                    else if (filter.level === 2) return elmClazz.level === "cao cấp"
                    else return elmClazz.level === "đào tạo trợ giảng";
                }
            });

            //Lọc theo trạng thái
            clazz = clazz.filter((elmClazz) => {
                if (filter.status === -1) {
                    return elmClazz;
                } else {
                    if (filter.status === 0) return elmClazz.status === "chưa khai giảng"
                    else if (filter.status === 1) return elmClazz.status === "đang học"
                    else return elmClazz.status === "bế giảng";
                }
            });
            
            //Lọc theo giảng viên
            if(filter.listMaster) {
                clazz = clazz.filter((clazz) => {
                    return clazz.list_master.toLowerCase().indexOf(filter.listMaster) !== -1;
                });
            }

            //Lọc theo quản lý
            if(filter.listManager) {
                clazz = clazz.filter((clazz) => {
                    return clazz.list_manager.toLowerCase().indexOf(filter.listManager) !== -1;
                });
            }

            //Lọc theo thời điểm bắt đầu
            if(filter.timeStart) {
                clazz = clazz.filter((clazz) => {
                    return clazz.time_start.toLowerCase().indexOf(filter.timeStart) !== -1;
                });
            }

            //Lọc theo thời điểm kết thúc
            if(filter.timeEnd) {
                clazz = clazz.filter((clazz) => {
                    return clazz.time_end.toLowerCase().indexOf(filter.timeEnd) !== -1;
                });
            }

            //Lọc theo địa điểm
            clazz = clazz.filter((elmClazz) => {
                if (filter.location === -1) {
                    return elmClazz;
                } else {
                    if (filter.location === 0) return elmClazz.location === "Đền Voi Phục, Thụy Khuê, Tây Hồ, Hà Nội"
                    else if (filter.location === 1) return elmClazz.location === "Tòa VP6 245 Đội Cấn, Đội Cấn, Ba Đình, Hà Nội"
                    else return elmClazz.location === "Số 1 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội";
                }
            });
        }

        //TODO Show thông tin classForm
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
                        Thêm lớp
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
                            onEdit={this.onEdit}
                            onFilter={this.onFilter} />
                    </div>
                                   
                {/* /.main */}
                </div>

            </div>
        );
    }
}

export default App;
