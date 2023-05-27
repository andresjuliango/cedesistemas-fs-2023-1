const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClotheSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    target: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    sellerId: {
      type: Schema.Types.ObjectId, // Tipo de dato, se obtiene del id autogenerado
      require: true,
      ref: "users" //Referencia a la tabla o join con el usuario
    },
    image: {
      type: String,
      require: true
    },
    description: String,
    status: {
      type: Number,
      default: 1 // 1 Disponible
    },
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Clothe = mongoose.model('clothes', ClotheSchema);

module. exports = Clothe;
