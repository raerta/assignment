import api from "@/request/api";
import { IKaraEkleRequest, IKaraEkleResponse } from "@/types/KaraEkle";
import { IKaraGetirResponse } from "@/types/KaraGetir";

const KaraData = {
    "db_Id": 9,
    "Adi": "ALL?"
}

export const getKaraGetir = async (): Promise<IKaraGetirResponse> => {
    const response = (await api.post(`/Kara/Getir_Kod`, KaraData));
    return response.data;
};

export const sendToKara = async (data: IKaraEkleRequest): Promise<IKaraEkleResponse> => {
    const response = (await api.post(`/Kara/Ekle`, data));
    return response.data;
};