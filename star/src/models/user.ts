import { Schema, model } from 'mongoose';

interface User {
    id: string;
    balance: number;
    transactionHistory: Array<{ amount: number; type: string; date: Date }>;
}

const userSchema = new Schema<User>({
    id: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 },
    transactionHistory: { type: Array, default: [] }
});

const UserModel = model<User>('User', userSchema);

export default UserModel;