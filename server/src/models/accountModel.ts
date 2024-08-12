import mongoose, { Schema } from "mongoose";

interface IAccount extends Document {
  nome: string;
  userName : string, 
  email: string;
  senha: string;
  role: string;
}

const Account: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  role: { type: String },
});

export default mongoose.model<IAccount>("Account", Account);
