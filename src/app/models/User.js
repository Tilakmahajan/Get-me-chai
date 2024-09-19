import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email : { type : String , requried:true  },
    name : { type : String },
    username : { type : String  , requried:true   },
    profilePic : { type : String },
    coverPic : { type : String},
    createdAt : { type : Date , default: Date.now },
    updateAt : { type : Date , default: Date.now },
});

// Ensure the model is only created once
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
