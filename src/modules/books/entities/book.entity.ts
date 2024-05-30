import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,  
} from "typeorm";

@Entity({ name: 'books' })
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'title' })
    title: string;

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