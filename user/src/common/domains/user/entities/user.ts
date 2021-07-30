/**
 * 用户实体
 */
import { USER_TYPE_LIST, USER_DEPT_LIST } from '../../../constants/user'
interface UserInstance {
    id: string;
    name: string;
    type: number;
    dept: number;
}
class User {
    id: string;
    name: string;
    type: number;
    dept: number;
    constructor(user: UserInstance = { id: '', name: '', type: 1, dept: 1 }) {
        this.id = user.id
        this.name = user.name
        this.type = user.type
        this.dept = user.dept
    }
    // 获取用户名称
    getUserName() {
        return this.name;
    }

    // 获取用户类型
    getUserType(typeId: number) {
        const index = USER_TYPE_LIST.findIndex(list => +list.type === +typeId)
        return index > -1 ? USER_TYPE_LIST[index].typeName : '';
    }
    // 获取用户所属部门
    getUserDept(typeId: number) {
        const index = USER_DEPT_LIST.findIndex(list => +list.type === +typeId)
        return index > -1 ? USER_DEPT_LIST[index].typeName : '';
    }
}

export default User