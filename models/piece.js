const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const pieceSchema = new Schema({
  pieceMarque: String,
  model: String,
  genre:String,
  year:Number,
  descriptif:String,
  imag:String,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, 
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Piece = mongoose.model("Piece", pieceSchema);

module.exports = Piece;