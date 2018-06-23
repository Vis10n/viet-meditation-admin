import React, { Component } from 'react';

class ResetInfo extends Component {

    onClearForm = () => {
        this.props.onClearForm();
    }
    
    render() {
        return (
            <button 
                type="button" 
                className="btn btn-warning mb-5"
                onClick={this.onClearForm}>
                Đặt lại
            </button>
        );
    }
}
export default ResetInfo;