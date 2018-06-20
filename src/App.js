import React, { Component } from 'react';
import './App.css';
import ClassList from './components/ClassList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clazz: []
        }
    }
    
    onGenerateData = () => {
        var clazz = [
            {
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

    componentWillMount() {
        if (localStorage && localStorage.getItem('clazz')) {
            var clazz = JSON.parse(localStorage.getItem('clazz'));
            this.setState({
                clazz: clazz
            })
        }
    }

    render() {
        var {clazz} = this.state;

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
                <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
                    <div class="profile-sidebar">
                        <div class="profile-userpic">
                            <img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt=""/>
                        </div>
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name">Chien "V1s10n" Nguyen</div>
                            <div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="divider"></div>
                    <ul class="nav menu">
                        <li class="active"><a href="index.html"><em class="fa fa-dashboard">&nbsp;</em> Dashboard</a></li>
                        <li><a href=""><em class="fa fa-power-off">&nbsp;</em>Đăng xuất</a></li>
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

                    {/* temporary button */}
                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-5"
                        onClick={this.onGenerateData}>
                        <span className="fa fa-plus mr-5"></span>
                        &nbsp;Generate Data
                    </button>
                    <br/>

                    {/* data tables */}
                    <ClassList clazz={clazz} />
                
                {/* /.main */}
                </div>

            </div>
        );
    }
}

export default App;
