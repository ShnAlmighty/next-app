import users from '../../../utils/users';

export default (req, res) => {
    res.status(200).send(users);
}
  