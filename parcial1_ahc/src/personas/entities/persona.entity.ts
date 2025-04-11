
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('personas')
export class Persona {
    //personas(id, ci, nombres, primer_apellido, segundo_apellido, fecha_nacimiento). 
    @PrimaryGeneratedColumn('identity')
    id: number;

   
    @Column('varchar', { length: 10 })
    ci: string;


    @Column('varchar', { length: 50 })
    nombres: string;

    
    @Column('varchar', { length: 50 })
    primer_apellido: string;

    @Column('varchar', { length: 50 })
    segundo_apellido: string;

  
    @Column('date')
    fecha_acimiento: Date;

    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fecha_nacimiento: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;
}
