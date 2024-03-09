import { Schema, model } from mongoose;

const userSchema = new Schema({
  username:{
    type: String,
    required: [true, 'username required']

  },
  email:{
    type: String,
    required: [true, `email required`] 
  },
  password:{
    type:String,
    required: true,
  }
});
export default model('User',userSchema);