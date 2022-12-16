import { Company } from "src/company/company.entity";
import { Salary } from "src/salary/salary.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  startedDate: Date;

  @ManyToOne(() => Company, (company) => company.employee)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column({ name: 'company_id', nullable: true })
  companyId: number;

  @OneToMany(() => Salary, (salary) => salary.employee)
  salary: Salary

}