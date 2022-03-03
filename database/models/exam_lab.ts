import { Model, DataTypes } from 'sequelize'
import connection from "../connection"
import Labs from "./labs"
import Exams from "./exams"


class ExamLab extends Model {

	// * ------ Attributes ------

	declare id: number
	declare exam_id: number
	declare lab_id: number
}

// ! ------ Constructor Method ------

ExamLab.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			unique: true,
			primaryKey: true
		},
		exam_id: DataTypes.INTEGER,
		lab_id: DataTypes.INTEGER
	},
	{
		sequelize: connection,
		tableName: 'exam_lab',
		modelName: 'ExamLab'
	}
)

// ? ------ Association Methods ------

ExamLab.hasMany(Exams,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'exam_id',
		sourceKey: 'id',
		as: 'exams'
	}
)
ExamLab.hasMany(Labs,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'lab_id',
		sourceKey: 'id',
		as: 'labs'
	}
)


export default ExamLab
