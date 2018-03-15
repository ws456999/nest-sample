import { IsString, IsInt } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiModelProperty({ type: String })
  @IsString() readonly mobile: string

  @ApiModelProperty({ type: String })
  @IsString() readonly password: string
}
