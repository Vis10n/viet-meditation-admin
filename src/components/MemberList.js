import React, {Component} from 'react';
import '../App.css';
import MemberItem from './MemberItem';

class MemberList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterBirth: '',
            filterAddress: ''
        }
    }
    
    //TODO Bắt sự kiện lọc (filter)
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterBirth' ? value : this.state.filterBirth,
            name === 'filterAddress' ? value : this.state.filterAddress,
        )

        this.setState({
            [name]: value
        });
        // console.log(name);
        // console.log(value);
    }

    render() {
        var {member} = this.props; // var tasks = this.props.tasks
        console.log(member);
        var {filterName, filterBirth, filterAddress} = this.state;
        var elmMember = member.map((member, index) => {
            return <MemberItem 
                        key={member.id} 
                        index={index} 
                        member={member}
                        onDelete={this.props.onDelete} 
                        onEdit={this.props.onEdit}
                    />
        });

        return (
            <table className="table table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên Học viên</th>
                        <th className="text-center">Ngày sinh</th>
                        <th className="text-center">Địa chỉ</th>
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
                            <input 
                                type="date" 
                                className="form-control" 
                                name="filterBirth"
                                value={filterBirth}
                                onChange={this.onChange} />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterAddress"
                                value={filterAddress}
                                onChange={this.onChange} />
                        </td>
                        <td></td>
                    </tr>
                    {elmMember}
                </tbody>
            </table>
        );
    }
}
export default MemberList;