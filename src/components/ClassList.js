import React, {Component} from 'react';
import '../App.css';
import ClassItem from './ClassItem';

class ClassList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterType: -1, //all: -1, offline: 0, online: 1
            filterLevel: -1, //all: -1, sơ cấp: 0, trung cấp: 1, cao cấp: 2, đào tạo trợ giảng: 3
            filterStatus: -1, //all: -1, chưa khai giảng: 0, đang học: 1, bế giảng: 2
            filterListMaster: '',
            filterListManager: '',
            filterTimeStart: '',
            filterTimeEnd: '',
            filterLocation: -1, //all: -1, Voi Phục: 0, Đội Cấn: 1, HQV: 2
        }
    }
    
    //TODO Bắt sự kiện lọc (filter)
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterType' ? value : this.state.filterType,
            name === 'filterLevel' ? value : this.state.filterLevel,
            name === 'filterStatus' ? value : this.state.filterStatus,
            name === 'filterListMaster' ? value : this.state.filterListMaster,
            name === 'filterListManager' ? value : this.state.filterListManager,
            name === 'filterTimeStart' ? value : this.state.filterTimeStart,
            name === 'filterTimeEnd' ? value : this.state.filterTimeEnd,
            name === 'filterLocation' ? value : this.state.filterLocation
        )

        this.setState({
            [name]: value
        });
        // console.log(name);
        // console.log(value);
    }

    render() {
        var {clazz} = this.props; // var tasks = this.props.tasks
        var {filterName, filterType, filterLevel, filterStatus, filterListMaster, filterListManager, filterTimeStart, filterTimeEnd, filterLocation} = this.state;
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
                            <input 
                                type="text" 
                                className="form-control"
                                name="filterName" 
                                value={filterName}
                                onChange={this.onChange}/>
                        </td>
                        <td>
                            <select 
                                className="form-control h-46"
                                name="filterType"
                                value={filterType}
                                onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="1">Online</option>
                                <option value="0">Offline</option>
                            </select>
                        </td>
                        <td>
                            <select 
                                className="form-control h-46"
                                name="filterLevel"
                                value={filterLevel}
                                onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">sơ cấp</option>
                                <option value="1">trung cấp</option>
                                <option value="2">cao cấp</option>
                                <option value="3">đào tạo trợ giảng</option>
                                
                            </select>
                        </td>
                        <td>
                            <select 
                                className="form-control h-46"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Chưa khai giảng</option>
                                <option value="1">Đang học</option>
                                <option value="2">Bế giảng</option>
                            </select>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterListMaster"
                                value={filterListMaster}
                                onChange={this.onChange} />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterListManager"
                                value={filterListManager}
                                onChange={this.onChange} />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterTimeStart" 
                                value={filterTimeStart}
                                onChange={this.onChange} />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterTimeEnd"
                                value={filterTimeEnd}
                                onChange={this.onChange} />
                        </td>
                        <td>
                            <select 
                                className="form-control h-46"
                                name="filterLocation"
                                value={filterLocation}
                                onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Đền Voi Phục, Thụy Khuê, Tây Hồ, Hà Nội</option>
                                <option value="1">Tòa VP6 245 Đội Cấn, Đội Cấn, Ba Đình, Hà Nội</option>
                                <option value="2">Số 1 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmClazz}
                </tbody>
            </table>
        );
    }
}
export default ClassList;