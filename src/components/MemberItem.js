import React, {Component} from 'react';

class MemberItem extends Component {
    
    //Sửa
    onEdit = () => {
        this.props.onEdit(this.props.member.id)
    }

    //TODO truyền member.id về Component cha
    //Xóa
    onDelete = () => {
        this.props.onDelete(this.props.member.id)
    }

    //Render function
    render() {
        var {member, index} = this.props;

        return (
            // bắt sự kiện Edit khi click vào từng dòng trong bảng
            <tr>    
                {/* Số thứ tự */}
                <td>{index + 1}</td>

                {/* Tên học viên */}
                <td>{member.fullname}</td>
                
                {/* Ngày sinh */}
                <td>{member.birth}</td>

                {/* Địa chỉ */}
                <td>{member.address}</td>
                
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
export default MemberItem;