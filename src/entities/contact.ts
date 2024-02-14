import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  phone: string;

  @Column()
  birthday: string;
}
