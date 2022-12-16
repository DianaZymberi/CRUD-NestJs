import { Employees } from "src/employees/employees.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salary {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(() => Employees, (employee) => employee.salary, { onDelete: 'CASCADE' })
   @JoinColumn({ name: 'employee_id' })
   employee: Employees;

   @Column({ name: 'employee_id', nullable: true })
   employeesId: number;;

   @Column()
   month: string;

   @Column()
   year: number;

   @Column()
   bruto: number;

}