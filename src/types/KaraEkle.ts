export interface IKaraEkleRequest {
    db_Id: number
    Id: number
    Adi: string
    Soy: string
    Aciklama: string
}

export interface IKaraEkleResponse {
    isSucceded: boolean
    message: any
    messageList: any[]
    value: string
}
