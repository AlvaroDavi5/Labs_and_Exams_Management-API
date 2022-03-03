import { Model, DataTypes, Association, HasManyGetAssociationsMixin, HasManyHasAssociationMixin } from 'sequelize'
import Labs from "./labs"
import ExamLab from "./exam_lab"
import connection from "../connection"


class Exams extends Model {

	// * ------ Attributes ------
	public id!: number
	public name!: string
	public type!: string
	public status!: boolean
	public readonly created_at!: Date
	public readonly updated_at!: Date

	// ? ------ Methods ------
	public getLabs!: HasManyGetAssociationsMixin<Labs>
	public hasLab!: HasManyHasAssociationMixin<Labs, number>
	//// ------ Association Method ------
	public static associations: {
		exam: Association<Exams, ExamLab>
	}
}

// ! ------ Class Constructor Method ------
Exams.init(
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
		type: {
			type: DataTypes.STRING(50),
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
		tableName: 'exams',
		modelName: 'Exams'
	}
)


export default Exams
