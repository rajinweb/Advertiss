import User from '../models/userModel';

class userControl {
  //Get All Users
  async getAllUsers(req: any, res: any) {
    try {
      // 3. Await the database query
      const userData = await User.find().select("-password -__v -createdAt -updatedAt");
      return res.status(200).json(userData);
    } catch (error) {
      // 4. Add error handling
      return res.status(500).json({ message: 'Error retrieving users', error });
    }
  }
  async createUser(req: any, res: any) {
    try {
      // const { username, email, fullName, password } = req.body;
      const userData = await User.create(req.body);
      return res.status(200).json({
        success: true,
        data: userData
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving users', error });
    }
  }
}

const userController = new userControl();
export default userController;
