import Mock from 'mockjs';

Mock.mock('/api/user/login', {
    status: 0,
    data: [
        {
            name: '@cname',
            age: 11,
            grade: 1,
        },
    ],
    msg: 'ok',
});
