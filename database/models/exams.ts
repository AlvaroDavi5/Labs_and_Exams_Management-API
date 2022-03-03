import { Model, DataTypes } from 'sequelize'
import connection from "../connection"
import ExamLab from "./exam_lab"


class Exams extends Model {

	// * ------ Attributes ------

	declare id: number
	declare name: string
	declare type: string
	declare status: boolean
}

// ! ------ Constructor Method ------

Exams.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			unique: true,
			primaryKey: true
		},
		name: DataTypes.STRING(150),
		type: DataTypes.STRING(50),
		status: DataTypes.BOOLEAN
	},
	{
		sequelize: connection,
		tableName: 'exams',
		modelName: 'Exams'
	}
)

// ? ------ Association Methods ------

Exams.belongsTo(ExamLab,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'exam_id',
		targetKey: 'id',
		as: 'exam'
	}
)


export default Exams
