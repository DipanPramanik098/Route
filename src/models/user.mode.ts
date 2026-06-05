import mongoose, { Mongoose } from "mongoose";


interface IUser extends Document{
  name: string;
  email: string;
  password?: string; //ho bhin sakta hai or nhi bhi kyu ki google authentication bhi hoga udhar password required nhi hai
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }

}, {
    timestamps: true
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;