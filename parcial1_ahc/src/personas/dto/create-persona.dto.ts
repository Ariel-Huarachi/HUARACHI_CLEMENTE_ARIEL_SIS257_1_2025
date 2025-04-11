import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty()
  @IsNotEmpty({ message: 'El campo ci es obligatorio' })
  @IsString({ message: 'El campo ci debe ser de tipo cadena' })
  @MaxLength(10, { message: 'El campo ci no debe ser mayor a 10 caracteres' })
  readonly ci: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres es obligatorio' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombres no debe ser mayor a 50 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo primer_apellido es obligatorio' })
  @IsString({ message: 'El campo primer_apellido debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo primer_apellido no debe ser mayor a 50 caracteres' })
  readonly primer_apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo segundo_apellido es obligatorio' })
  @IsString({ message: 'El campo segundo_apellido debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo segundo_apellido no debe ser mayor a 50 caracteres' })
  readonly segundo_apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha_nacimiento es obligatorio' })
  @IsDateString({}, { message: 'El campo fecha_nacimiento debe ser una fecha válida (YYYY-MM-DD)' })
readonly fecha_nacimiento: string;

}
