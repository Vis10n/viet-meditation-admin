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
            <tr>    
                {/* Số thứ tự */}
                <td>{index + 1}</td>

                {/* Tên lớp */}
                <td>{clazz.name}</td>

                {/* Loại lớp */}
                <td className="text-center">
                    <span className={clazz.type === true ? "label label-success" : "label label-default"}>
                        {
                            clazz.type === true ? "online" : "offline"
                        }
                    </span>
                </td>

                {/* Cấp độ */}
                <td>{clazz.level}</td>
                
                {/* Trạng thái lớp */}
                <td>{clazz.status}</td>

                {/* Giảng viên */}
                <td>{clazz.list_master}</td>

                {/* Quản lý */}
                <td>{clazz.list_manager}</td>
                
                {/* Bắt đầu vào */}
                <td>{clazz.time_start}</td>
                
                {/* Kết thúc vào */}
                <td>{clazz.time_end}</td>
                
                {/* Địa điểm */}
                <td>{clazz.location}</td>
                
                {/* Các button chức năng */}
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning m-2"
                        onClick={this.onEdit}>
                        <span className="fa fa-pencil mr-5"></span>
                        Sửa
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger m-2"
                        onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default ClassItem;