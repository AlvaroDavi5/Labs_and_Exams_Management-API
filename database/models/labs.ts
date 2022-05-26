import { Model, DataTypes, Association, HasManyGetAssociationsMixin, HasManyHasAssociationMixin } from 'sequelize'
import Exams from "./exams"
import ExamLab from "./exam_lab"
import connection from "../connection"


class Labs extends Model {

	// * ------ Attributes ------
	public id!: number
	public name!: string
	public address!: string // the null assertion `!` is required in strict mode
	public status!: boolean
	public readonly created_at!: Date
	public readonly updated_at!: Date

	// ? ------ Methods ------
	public getExams!: HasManyGetAssociationsMixin<Exams>
	public hasExam!: HasManyHasAssociationMixin<Exams, number>
	//// ------ Association Method ------
	public static associations: {
		labs: Association<Labs, ExamLab>
	}
}

// ! ------ Class Constructor Method ------
Labs.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			unique: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	},
	{
		sequelize: connection,
		tableName: 'labs',
		modelName: 'Labs'
	}
)


export default Labs
