import { Model, DataTypes, Association } from 'sequelize'
import Labs from "./labs"
import Exams from "./exams"
import connection from "../connection"


class ExamLab extends Model {

	// * ------ Attributes ------
	public id!: number
	public exam_id!: number
	public lab_id!: number
	public readonly created_at!: Date
	public readonly updated_at!: Date

	// ? ------ Methods ------
	//// ------ Association Method ------
	public static associations: {
		labs: Association<ExamLab, Labs>
		exams: Association<ExamLab, Exams>
	}
}

// ! ------ Class Constructor Method ------
ExamLab.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			unique: true,
			primaryKey: true
		},
		exam_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		lab_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize: connection,
		tableName: 'exam_lab',
		modelName: 'ExamLab'
	}
)


export default ExamLab
