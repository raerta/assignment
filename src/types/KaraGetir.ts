export interface IKaraGetirResponse {
    isSucceded: boolean
    message: any
    messageList: any[]
    value: IKaraGetirValue[]
}

export interface IKaraGetirValue {
    Id: number
    Adi: string
    Soy: string
    Aciklama: string
    Tcno?: string
    Kimlik_no?: string
    Dogum_tarihi?: string
    Sistem_tarihi?: string
    Sistem_grubu?: string
    Otel_kodu?: string
    Ulke_xml?: string
    Kulanici?: string
    Acenta?: string
    "Xml Kodu": string
    "ULke Adı"?: string
}

export interface IKaraGetirRequest {
    db_Id: number
    Adi: string
}
