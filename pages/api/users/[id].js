import users from '../../../utils/users';

export default (req, res) => {
    const user = users.find((user)=>{
        return user.id==req.query.id
    });
    res.status(200).send(user);;
}