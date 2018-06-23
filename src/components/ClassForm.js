import React, {Component} from 'react';

class ClassForm extends Component {

    //Hàm khởi tạo
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            type: true,
            level: 'sơ cấp',
            status: 'chưa khai giảng',
            list_master: '',
            list_manager: '',
            time_start: '',
            time_end: '',
            location: '',
            pic: '',
            more_infor: ''
        }
    }

    //CWM
    //TODO Lấy thông tin của bản ghi mà người dùng click vào.
    componentWillMount() {
        console.log("CWM");
        if (this.props.clazz) {
            this.setState({
                id: this.props.clazz.id,
                name: this.props.clazz.name,
                type: this.props.clazz.type,
                level: this.props.clazz.level,
                status: this.props.clazz.status,
                list_master: this.props.clazz.list_master,
                list_manager: this.props.clazz.list_manager,
                time_start: this.props.clazz.time_start,
                time_end: this.props.clazz.time_end,
                location: this.props.clazz.location,
                pic: this.props.clazz.pic,
                more_infor: this.props.clazz.more_infor
            });
        }
    }
    
    
    //TODO Bắt sự kiện thay đổi trường input
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === 'type') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    //TODO Hoàn tất và gửi dữ liệu
    onSubmit = (event) => {
        //chặn submit lên url
        event.preventDefault();

        //Hoàn tất submit
        this.props.onSubmit(this.state);
        //Hoàn tất & Đóng form
        this.onClearForm();
        this.onCloseForm();
    }

    //TODO Đóng form
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    //TODO Đặt lại giá trị default cho form
    onClearForm = () => {
        this.setState({
            id: '',
            name: '',
            type: true,
            level: 'sơ cấp',
            status: 'chưa khai giảng',
            list_master: '',
            list_manager: '',
            time_start: '',
            time_end: '',
            location: '',
            pic: '',
            more_infor: ''
        })
    }
    
    //TODO render
    render() {

        return (            
            <div className="panel panel-primary col-xs-13 col-sm-13 col-md-13 col-lg-13">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm lớp mới
                        &nbsp;
                    </h3>                                     
                </div>
                <div className="panel-body">                                    
                    <form onSubmit={this.onSubmit}>
                        {/* Cột 1 */}
                        <div className="col-md-6">

                            {/* Tên lớp học (input) */}
                            <div className="form-group">
                                <label>Tên lớp học</label>
                                <input 
                                    type="text"
                                    name="name" 
                                    className="form-control" 
                                    id="" 
                                    placeholder="Input field"
                                    value={this.state.name}
                                    onChange={this.onChange}/>
                            </div>

                            {/* Loại lớp học (radio) */}
                            <div className="form-group">
                                <label>Loại lớp học</label>
                                <div className="radio">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="type" 
                                            id="optionsRadios1" 
                                            value={true}
                                            onChange={this.onChange}/>
                                            <span className="label label-success">
                                                Online
                                            </span>
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="type" 
                                            id="optionsRadios1" 
                                            value={false}
                                            onChange={this.onChange}/>
                                            <span className="label label-default">
                                                Offline
                                            </span>
                                    </label>
                                </div> 
                            </div>

                            {/* cấp độ lớp (select) */}
                            <div className="form-group">
                                <label>Cấp độ</label>                                       
                                <select
                                    className="form-control"
                                    name="level"
                                    value={this.state.level}
                                    onChange={this.onChange}>
                                    <option value="sơ cấp">Sơ cấp</option>
                                    <option value="trung cấp">Trung cấp</option>
                                    <option value="cao cấp">Cao cấp</option>
                                    <option value="đào tạo trợ giảng">Đào tạo trợ giảng</option>
                                </select>
                            </div>

                            {/* trạng thái lớp (select) */}
                            <div className="form-group">
                                <label>Trạng thái lớp</label>                                       
                                <select
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}>
                                    <option value="chưa khai giảng">Chưa khai giảng</option>
                                    <option value="đang học">Đang học</option>
                                    <option value="bế giảng">Bế giảng</option>
                                </select>
                            </div>

                            {/* Thời gian bắt đầu */}
                                

                            {/* Thời gian kết thúc */}

                        </div>
                        
                        {/* Cột 2 */}
                        <div className="col-md-6">

                            <div className="form-group">
                                <label>Tên giảng viên</label> 
                                <input 
                                    type="text"
                                    name="list_master"
                                    value={this.state.list_master} 
                                    className="form-control" 
                                    id="" 
                                    placeholder="Input field"
                                    onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                <label>Tên quản lý</label>  

                                {/* <button 
                                    type="button" 
                                    class="btn btn-primary m-5"
                                    onClick={this.addTeacher}>
                                    Thêm quản lý
                                </button>  */}

                                <input 
                                    type="text"
                                    name="list_manager" 
                                    value={this.state.list_manager}
                                    className="form-control m-el-5" 
                                    id="" 
                                    placeholder="Input field"
                                    onChange={this.onChange}/>
                            </div>
                            
                            {/* Thời gian bắt đầu/kết thúc */}
                            <div class="col-md-6">
                                <div className="form-group">
                                    <label>Bắt đầu vào...</label>
                                    <input 
                                        type="text"
                                        name="time_start" 
                                        className="form-control" 
                                        id="" 
                                        placeholder="Input field"
                                        value={this.state.time_start}
                                        onChange={this.onChange}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="form-group">
                                    <label>Kết thúc vào...</label>
                                    <input 
                                        type="text"
                                        name="time_end" 
                                        className="form-control" 
                                        id="" 
                                        placeholder="Input field"
                                        value={this.state.time_end}
                                        onChange={this.onChange}/>
                                </div>
                            </div>
                            
                            {/* Địa chỉ (input) */}
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <input 
                                    type="text"
                                    name="location" 
                                    className="form-control" 
                                    id="" 
                                    placeholder="Input field"
                                    value={this.state.location}
                                    onChange={this.onChange}/>
                            </div>
                        </div>

                        {/* Hàng dưới */}
                        <div className="col-md-12">
                            
                            {/* Thêm ảnh đại diện lớp (file input) */}
                            <div className="form-group">
                                <label>Thêm ảnh</label>
                                <input 
                                    type="file"
                                    name="pic"
                                    />
                                <p className="help-block">Thêm ảnh đại diện cho lớp học (tùy chọn)</p>
                            </div>

                            {/* Thông tin thêm (text area) */}
                            <div className="form-group">
                                <label>Thông tin thêm</label>
                                <textarea 
                                    className="form-control" 
                                    rows="3"
                                    name="more_infor"
                                    value={this.state.more_infor}
                                    onChange={this.onChange}>
                                </textarea>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary ml-50p mb-5">
                            Hoàn tất
                        </button>
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-warning mb-5"
                            onClick={this.onClearForm}>
                            Đặt lại
                        </button>                       
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger mb-5"
                            onClick={this.onCloseForm}>
                            <span className="fa fa-trash mr-5"></span> 
                            &nbsp;
                            Hủy
                        </button>
                    </form>                       
                </div>                                      
            </div>
        );
    }
}
export default ClassForm;