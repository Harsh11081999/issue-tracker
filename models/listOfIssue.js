const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
    {
       
        issue : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "issueSchema"
            }
        ]
    },{
        timestamps:true
    }
)

const issueList = mongoose.model("issueList", issueSchema);
module.exports = issueList;