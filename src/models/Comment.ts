import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Image } from './Image';  // Import Image entity to establish the relation

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;  // Auto-generated primary key

  @Column({ type: 'text' })
  text!: string;  // Comment text

  @Column({ type: 'varchar' })
  author!: string;  // Author of the comment

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;  // Timestamp for when the comment was created

  // Many comments can belong to one image
  @ManyToOne(() => Image, (image) => image.comments, { onDelete: 'CASCADE' })
  image!: Image;  // The image associated with the comment
}
