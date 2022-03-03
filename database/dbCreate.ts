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
ExamLab.hasMany(models.Exams,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'exam_id',
		sourceKey: 'id',
		as: 'exams'
	}
)
ExamLab.hasMany(models.Labs,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'lab_id',
		sourceKey: 'id',
		as: 'labs'
	}
)

Labs.belongsTo(models.ExamLab,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'lab_id',
		targetKey: 'id',
		as: 'lab'
	}
)

Exams.belongsTo(models.ExamLab,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'exam_id',
		targetKey: 'id',
		as: 'exam'
	}
)


// * drop all tables and recreate them
connection.sync({ force: true }).then(
  () => {
    console.log("Database synced")
  }
)


export default connection
