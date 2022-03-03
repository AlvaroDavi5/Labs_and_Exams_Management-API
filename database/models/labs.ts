import { Model, DataTypes } from 'sequelize'
import connection from "../connection"
import ExamLab from "./exam_lab"


class Labs extends Model {

	// * ------ Attributes ------

	declare id: number
	declare name: string
	declare address: string
	declare status: boolean
}

// ! ------ Constructor Method ------

Labs.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			unique: true,
			primaryKey: true
		},
		name: DataTypes.STRING(150),
		address: DataTypes.STRING(255),
		status: DataTypes.BOOLEAN
	},
	{
		sequelize: connection,
		tableName: 'labs',
		modelName: 'Labs'
	}
)

// ? ------ Association Methods ------

Labs.belongsTo(ExamLab,
	{
		constraints: true,
		foreignKeyConstraint: true,
		foreignKey: 'lab_id',
		targetKey: 'id',
		as: 'lab'
	}
)


export default Labs
