import { Employees } from "src/employees/employees.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: number;

    @Column()
    employeeNumber: number;

    @OneToMany(() => Employees, (employee) => employee.company, {onDelete: 'SET NULL'})
    employee: Employees[]   
    
    @ManyToOne(() => User, (user) => user.company )
    @JoinColumn({ name: 'user_id'})
    user: User

    @Column({ name: 'user_id', nullable: true})
    userId: number
}