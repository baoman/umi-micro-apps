import {
    queryDetail
} from '../../dataSource/user/requestApis';

import User from './entities/user';


class UserService {
    /**
     * 获取用户信息
     */
    static getUserInfo() {
        return queryDetail().then(user => new User(user))
    }
}

export default UserService