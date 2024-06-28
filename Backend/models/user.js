const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
let UserSchema = new Schema({ 
newstype: {
type: String
},

headline: {
type: String
},
description: {
type: String
},
createdat: {

type: String,
default: Date.now()
},
addedby: {
type: String
},
updatedby: {
type: String
},
updatedat: {

type: Date,
default: Date.now()

},
image: {
    type: String
    },
});
//export default mongoose.model("registration",registrationSchema);
// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

