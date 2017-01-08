
// Grab the mongoose module
import mongoose from 'mongoose';

// Create a schema for Hero
var heroSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String}
})

export default mongoose.model("Hero", heroSchema);
