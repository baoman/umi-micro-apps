/**
 * 用户实体
 */
import { USER_TYPE_LIST } from '../../../constants/user'
interface UserInstance {
    id: string;
    name: string;
    type: number;
}
class User {
    id: string;
    name: string;
    type: number;
    constructor(user: UserInstance = { id: '', name: '', type: 1}) {
        this.id = user.id
        this.name = user.name
        this.type = user.type
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
}

export default User