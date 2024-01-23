import { defaulTableSettings, primaryKey } from '../../../../utils/global/GlobalSequelize';
import { Table, Model, Column } from "sequelize-typescript";

@Table(defaulTableSettings)
export class users extends Model {
    @Column(primaryKey)
    id: number;

    @Column
    name: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    deleted_at: Date;
};
