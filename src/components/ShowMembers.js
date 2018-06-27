import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Members from './Members';

class ShowMembers extends Component {
    
    onShowMembers = () => {
        ReactDOM.render(
            <Members member={this.props.clazz.formal_name}/>,
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