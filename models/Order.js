const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    products: { type: [mongoose.Types.ObjectId], ref: "product", required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    status: { type: String, enum: ["placed", "delivered", "cancel"], default: "placed" },
    // otp: { type: String, required: true } // Add this field
});

module.exports = mongoose.model("order", orderSchema);
