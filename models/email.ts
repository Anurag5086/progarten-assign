import mongoose, { mongo } from 'mongoose'

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    }
})

export default mongoose.models.email || mongoose.model("Email", EmailSchema);