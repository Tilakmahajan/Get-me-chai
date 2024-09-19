import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    name : { type : String , requried:true  },
    to_user : { type : String , requried:true  },
    message : { type : String  },
    oid : { type : String ,requried:true },
    amount : { type : String ,requried:true },
    createdAt : { type : Date , default: Date.now },
    updateAt : { type : Date , default: Date.now },
    done : { type : Boolean , default: false },
});

// Ensure the model is only created once
const Payment = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

export default Payment;

