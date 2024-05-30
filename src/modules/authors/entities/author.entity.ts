import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,  
} from "typeorm";

@Entity({ name: 'authors' })
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column()
    lastname: string;

    @Column()
    birthDate: Date;

    @Column()
    nationality: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
