const connection = require("./connection.js")
const Labs = require("./models/labs.js")
const Exams = require("./models/exams.js")
const ExamLab = require("./models/exam_lab.js")


/* database tables creation */
Labs.init(connection)
Exams.init(connection)
ExamLab.init(connection)

/* database tables associations */
/**
  * ?    Relations
  * @belongsTo - One-to-One, source -> target
  * @hasOne - One-to-One, target -> source
  * @hasMany - One-to-Many, target -> source
  * @belongsToMany - Many-to-Many, source -> target
**/
ExamLab.associate(connection.models) // relations in each model


module.exports = connection;
