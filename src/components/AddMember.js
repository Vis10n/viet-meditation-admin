import React, { Component } from 'react';

class AddMember extends Component {

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    render() {
        return (
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary m-el-5"
                    onClick={this.onToggleForm}>
                    <span className="fa fa-plus mr-5"></span>
                    Thêm học viên
                </button>
            </div>
        );
    }
}

export default AddMember;
