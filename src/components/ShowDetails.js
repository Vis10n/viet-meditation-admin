import React, { Component } from 'react';

class ShowDetails extends Component {
    
    render() {
        return (
            <button
                type="button" 
                className="btn btn-primary mb-5"
                >
                <span className="fa fa-list mr-5"></span>
                Danh sách học viên
            </button>
        )
    }   
}
export default ShowDetails;