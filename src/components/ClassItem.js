import React, {Component} from 'react';

class ClassItem extends Component {
    
    //TODO truyền clazz.id về Component cha
    //Xóa
    onDelete = () => {
        this.props.onDelete(this.props.clazz.id)
    }

    //Sửa
    onEdit = () => {
        this.props.onEdit(this.props.clazz.id)
    }

    //Render function
    render() {
        var {clazz, index} = this.props;

        return (
            // bắt sự kiện Edit khi click vào từng dòng trong bảng
            <tr onClick={this.onEdit}>    
                <td>{index + 1}</td>
                <td>{clazz.name}</td>
                <td className="text-center">
                    <span className={clazz.type === true ? "label label-success" : "label label-default"}>
                        {
                            clazz.type === true ? "online" : "offline"
                        }
                    </span>
                </td>
                <td>{clazz.level}</td>
                <td>{clazz.status}</td>
                <td>{clazz.list_master}</td>
                <td>{clazz.list_manager}</td>
                <td>{clazz.time_start}</td>
                <td>{clazz.time_end}</td>
                <td>{clazz.location}</td>
                <td className="text-center">
                    {/* <button 
                        type="button" 
                        className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp; */}
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span> 
                        &nbsp;
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default ClassItem;