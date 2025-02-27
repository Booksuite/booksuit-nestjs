import { ValidContact } from '../enums/ValidContact.enum'

export type CompanySettings = {
    theme?: { color?: string }
}

export type CompanyContact = {
    type: ValidContact
    value: string
}

export type MediaMetadata = {
    [key: string]: string
} & {
    mimetype: string
}
