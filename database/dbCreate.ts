import connection from "./connection"
import Labs from "./models/labs"
import Exams from "./models/exams"
import ExamLab from "./models/exam_lab"


// ! saving models
const models = {
  Labs,
  Exams,
  ExamLab
}

/**
  * ?    Associations
  * @belongsTo - One-to-One, source -> target
  * @hasOne - One-to-One, target -> source
  * @hasMany - One-to-Many, target -> source
  * @belongsToMany - Many-to-Many, source -> target
**/
Labs.belongsToMany(models.Exams,
	{
		through: models.ExamLab,
		as: 'exams'
	}
)
Exams.belongsToMany(models.Labs,
	{
		through: models.ExamLab,
		as: 'labs'
	}
)

// * drop all tables and recreate them
connection.sync({ force: true }).then(
  () => {
    console.log("Database synced")
  }
)


export default connection
