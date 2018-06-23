import React, {Component} from 'react';
import '../App.css';
import ClassItem from './ClassItem';

class ClassList extends Component {

    render() {
        var {clazz} = this.props; // var tasks = this.props.tasks
        var elmClazz = clazz.map((clazz, index) => {
            return <ClassItem 
                        key={clazz.id} 
                        index={index} 
                        clazz={clazz}
                        onDelete={this.props.onDelete} 
                        onEdit={this.props.onEdit}
                    />
        });

        return (
            <table className="table table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên lớp học</th>
                        <th className="text-center">Phân loại</th>
                        <th className="text-center">Cấp độ</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Giảng viên</th>
                        <th className="text-center">Quản lý</th>
                        <th className="text-center">Bắt đầu</th>
                        <th className="text-center">Kết thúc</th>
                        <th className="text-center">Địa điểm</th>
                        <th className="text-center">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control h-46">
                                <option value="-1">Tất Cả</option>
                                <option value={true}>Online</option>
                                <option value={false}>Offline</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-control h-46">
                                <option value="-1">Tất Cả</option>
                                <option value="0">sơ cấp</option>
                                <option value="1">trung cấp</option>
                                <option value="2">cao cấp</option>
                                <option value="3">đào tạo trợ giảng</option>
                                
                            </select>
                        </td>
                        <td>
                            <select className="form-control h-46">
                                <option value="-1">Tất Cả</option>
                                <option value="0">Chưa khai giảng</option>
                                <option value="1">Đang học</option>
                                <option value="2">Bế giảng</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td></td>
                    </tr>
                    {elmClazz}
                </tbody>
            </table>
        );
    }
}
export default ClassList;