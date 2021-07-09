import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please enter an username"],

    },
    email:{
        type: String,
        required: [true, "Please enter an email"],
        unique:true,
        lowercase:true
    },
    pswd:{
        type: String,
        required: [true, "Please enter an password"],
    }

})
adminSchema.statics.login = async function (email,pswd) {
    const user = await this.findOne({ email: email,pswd:pswd });
    if (user) {
      return user;
    }
    throw Error("incorrect id");
  };
const admin = mongoose.model('admin', adminSchema);

export default admin;