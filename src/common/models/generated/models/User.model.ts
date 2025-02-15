import { Prisma } from '@prisma/client'
import {
    IsBoolean,
    IsDate,
    IsDefined,
    IsOptional,
    IsString,
} from 'class-validator'

export class User {
    @IsDefined()
    @IsString()
    id!: string

    @IsDefined()
    @IsString()
    email!: string

    @IsDefined()
    @IsString()
    firstName!: string

    @IsOptional()
    @IsString()
    lastName?: string

    @IsOptional()
    @IsString()
    phone?: string

    @IsDefined()
    @IsString()
    password!: string

    @IsOptional()
    @IsString()
    confirmationCode?: string

    @IsDefined()
    @IsBoolean()
    isAdmin!: boolean

    @IsOptional()
    metaData?: Prisma.JsonValue

    @IsDefined()
    @IsDate()
    createdAt!: Date

    @IsDefined()
    @IsDate()
    updatedAt!: Date

    @IsOptional()
    @IsDate()
    deletedAt?: Date
}
