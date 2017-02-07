/**
 * Created by tinoll on 2017. 2. 7..
 */
var mongoose = require("mongoose");
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

var locationSchema = mongoose.Schema({
    name : {
        type : String
    },
    latitude : {
        type : SchemaTypes.Double
    },
    longitude : {
        type : SchemaTypes.Double
    },
    date : {
        type : SchemaTypes.Double
    }
});

var Locations = mongoose.model("locations", locationSchema); //mongoose.model함수를 사용하여 contact schema의 model을 생성합니다
module.exports = Locations;