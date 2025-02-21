import { ApiProperty } from '@nestjs/swagger'
import {
    IsDefined,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator'

import { ReservationDepositType } from '../enums/ReservationDepositType.enum'

export class ReservationConfigDTO {
    @ApiProperty({
        example: 5,
        description: 'Percentage added at the end of purchase',
    })
    @IsOptional()
    @IsNumber()
    tax?: number

    @ApiProperty({
        enum: ReservationDepositType,
        example: ReservationDepositType.PERCENTAGE_ON_RESERVATION,
    })
    @IsDefined()
    @IsEnum(ReservationDepositType)
    reservationDepositType!: ReservationDepositType

    @ApiProperty({
        example: 50,
    })
    @IsOptional()
    @IsNumber()
    reservationDepositTypeValue?: number

    @ApiProperty({
        example: 'Reservation Policy, big text.',
    })
    @IsDefined()
    @IsString()
    reservationPolicy!: string
}
