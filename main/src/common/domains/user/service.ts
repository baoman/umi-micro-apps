import {
    query
} from '../../dataSource/user/requestApis';

import User from './entities/user';


class UserService {
    /**
     * 获取登录用户信息
     */
    static getUserInfo() {
        return query().then(user => new User(user))
    }
}

export default UserService