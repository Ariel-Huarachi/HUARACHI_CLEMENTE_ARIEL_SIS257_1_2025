import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService {
  constructor(@InjectRepository(Persona) private personasRepository: Repository<Persona>) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const existe = await this.personasRepository.findOneBy({
      ci: createPersonaDto.ci.trim(),
    });

    if (existe) throw new ConflictException('La persona con ese ci ya existe');

    const persona = this.personasRepository.create({
      ci: createPersonaDto.ci,
      nombres: createPersonaDto.nombres,
      primer_apellido: createPersonaDto.primer_apellido,
      segundo_apellido: createPersonaDto.segundo_apellido,
      fecha_nacimiento: createPersonaDto.fecha_nacimiento,
    });


    return this.personasRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personasRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personasRepository.findOneBy({ id });
    if (!persona) throw new NotFoundException('La persona no existe');
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = await this.findOne(id);
    const personaUpdate = Object.assign(persona, updatePersonaDto);
    return this.personasRepository.save(personaUpdate);
  }

  async remove(id: number): Promise<void> {
    const persona = await this.findOne(id);
    if (persona) await this.personasRepository.softRemove(persona);
  }
}
