import React, { Component } from 'react';
import ResetInfo from './ResetInfo';

class MemberForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fullname: '',
            birth: '',
            address: ''
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    //TODO Hoàn tất và gửi dữ liệu
    onSubmit = (event) => {
        //chặn submit lên url
        event.preventDefault();
        //Hoàn tất submit
        this.props.onSubmitMemb(this.state);
        //Hoàn tất & Đóng form
        this.onClearForm();
        this.onCloseForm();
    }

    //TODO Bắt sự kiện đóng form
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    //TODO Đặt lại giá trị default cho form
    onClearForm = () => {
        this.setState({
            id: '',
            fullname: '',
            birth: '',
            address: ''
        });
    }

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">Thêm học viên</div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Họ Tên</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        className="form-control"
                                        id=""
                                        placeholder="Input field"
                                        value={this.state.fullname}
                                        onChange={this.onChange} />
                                </div>                            
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Ngày sinh</label>
                                    <input
                                        type="date"
                                        name="birth"
                                        className="form-control"
                                        id=""
                                        placeholder="Input field"
                                        value={this.state.birth}
                                        onChange={this.onChange} />
                                </div>
                            </div>                        
                            
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        id=""
                                        placeholder="Input field"
                                        value={this.state.address}
                                        onChange={this.onChange} />
                                </div>               
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary ml-50p mb-5"
                                disabled={!this.state.fullname
                                    || !this.state.birth
                                    || !this.state.address}>
                                <span className="fa fa-check mr-5"></span>
                                Hoàn tất
                            </button>

                            &nbsp;
                            {this.state.id === '' ? <ResetInfo onClearForm={this.onClearForm} /> : null}

                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger mb-5"
                                onClick={this.onCloseForm}>
                                <span className="fa fa-times mr-5"></span>
                                Hủy
                            </button>
                        </form>                                            
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberForm;