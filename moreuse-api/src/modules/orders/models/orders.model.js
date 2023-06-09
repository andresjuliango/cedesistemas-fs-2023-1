const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema (
  {
    cloteId: {
      type: Schema.Types.ObjectId, // Tipo de dato, se obtiene del id autogenerado
      required: true,
      ref: "clothes" //Referencia a la tabla o join con la prenda
    },
    price: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    paymentType: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    isRemoved: {
      type: Boolean,
      default: false,
      required:true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("orders", OrderSchema)

module.exports = Order
