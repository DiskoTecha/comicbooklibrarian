const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

let comicSchema = new Schema(
  {
    publisher: {
      type: String
    },
    title: {
      type: String
    },
    issue: {
      type: Number
    },
    month: {
      type: String
    },
    year: {
      type: Number
    },
    coverPrice: {
      type: Number
    },
    quantity: {
      type: Number
    },
    upcCode: {
      type: String
    },
    barCode: {
      type: String
    },
    coverPhoto: {
      type: String
    }
  },
  {
    collection: 'comics'
  }
);

// { "_id" : ObjectId("5f026e93fee25445807e7d6b"),
// "publisher" : "Marvel",
// "title" : "Spider-Man: Volume 1",
// "issue" : 3,
// "month" : "Oct.",
// "year" : 1990,
// "coverPrice" : 1.75,
// "quantity" : 2,
// "upcCode" : "",
// "barCode" : "$MAR.S-VLM-1.3.OCT.1990",
// "coverPhoto" : "" }

module.exports = mongoose.model('Comic', comicSchema);
