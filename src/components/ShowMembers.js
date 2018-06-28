import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Members from './Members';

class ShowMembers extends Component {
    
    onSubmitMemb = (data) => {
        this.props.onSubmitMemb(data);
    }

    onShowMembers = () => {
        ReactDOM.render(
            <Members
                clzName={this.props.clzName} 
                formal_name={this.props.formal_name}
                onSubmitMemb={this.onSubmitMemb}/>,
            document.getElementById("root")
        );
    }

    render() {
        return (
            <button
                type="button" 
                className="btn btn-primary mb-5"
                onClick={this.onShowMembers}
                >
                <span className="fa fa-list mr-5"></span>
                Danh sách học viên
            </button>
        )
    }   
}
export default ShowMembers;