import React, { Component } from 'react';

class AddClass extends Component {

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
          Thêm lớp
        </button>
      </div>
    )
  }
};

export default AddClass;
