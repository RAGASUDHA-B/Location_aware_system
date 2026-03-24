const mongoose=require("mongoose");
const locationSchema=new mongoose.Schema({//define structure of db
    location:{
        type:{
            type:String,
            default:"point"
        },
        coordinates:[Number]
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
});
locationSchema.index({//location based search
    location: "2dsphere"
});
module.exports=mongoose.model("Location",locationSchema);