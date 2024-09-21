import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './Comment';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar'})
  name!: string;

  @Column({type: 'varchar'})
  url!: string;

  @Column({type: 'varchar', nullable: true})
  type?: string;

  @Column({type: 'int', nullable: true})
  size?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt!: Date;

  // One image can have many comments
  @OneToMany(() => Comment, (comment) => comment.image)
  comments!: Comment[];  // An array of comments related to the image

}
