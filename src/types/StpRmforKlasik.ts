export interface IStpRmforKlasikResponse {
  isSucceded: boolean
  message: any
  messageList: any[]
  value: IStpRmforKlasikValue[]
}

export interface IStpRmforKlasikValue {
  Tarih: string
  Oda: number
  Pax: number
  Free: number
  Yetişkin: number
  Çocuk: number
  "Toplam Kişi": number
  "Yüzde%": number
  Mevcut: number
  Konum1: number
  Konum2: number
  Konum3: number
  Konum4: number
  Konum5: number
  Konum6: number
  "Konum1%": number
  "Konum2%": number
  "Konum3%": number
  "Konum4%": number
  "Konum5%": number
  Forecast: number
  "Forecast Satılan ": number
  "Forecast Kalan": number
  "Son Durum": number
  "Yuzde%(Sondurum)": number
  "Yuzde%(Net)": number
  "Mevcut(Net)": number
  Kalan_1: number
  Kalan_2: number
  Kalan_3: number
  Kalan_4: number
  Kalan_5: number
  Kalan_6: number
  "Gelen Oda": number
  "Gelen Yetişkin": number
  "Gelen Çocuk": number
  "Gelen Free": number
  "Gelen Pax": number
  "Gelen Top Kişi": number
  "Giden Oda": number
  "Giden Yetişkin": number
  "Giden Çocuk": number
  "Giden Free": number
  "Giden Pax": number
  "Giden Toplam Kişi": number
  "Arızalı Oda": number
  "Kapalı Oda": number
  "Yatak(Mevcut)": number
  "Yatak(%)": number
  "Doviz Tutar": number
  "Doviz Gerçek": number
  "TL Gerçek": number
  "Brut Tutar": number
  Birleşme: number
  "Birleşme Trace": number
  Stop: number
  "Yatak%": number
  "Pm Sanal": number
  "Pax(P)": number
  Bebek: number
  "Paxp Yetişkin": number
  "Paxp Çocuk": number
  "Paxp Free": number
  "Kontenjan Oda": number
  "Kontenjan Satılan ": number
  "Kontenjan Kalan": number
  "Tentative Oda": number
  "Müşteri Tipi(1)": number
  "Müşteri Tipi(2)": number
  "Müşteri Tipi(3)": number
  "Müşteri Tipi(4)": number
  "Müşteri Tipi(5)": number
  "Müşteri Tipi(6)": number
  "Müşteri Tipi(7)": number
  "Müşteri Tipi(8)": number
  "Comp Oda": number
  "Info Oda": number
  "House Use Oda": number
  "Net Oda": number
  NoShow: number
  "Day Use": number
  "Forecasttan Kalan(Tek)": number
  "Blokajsız Oda": number
  "Forecast Gelir": number
  "Gun Tarih": string
  "Package Tutar": number
  "Arızalı Toplam": number
  "Pax(Prm)": number
  "Ort.Pax(Prm)": number
  "Satılan-Birleşme": number
  "Pax(Y/C2)": number
  His_For: string
  "Otel Kodu": number
  "Otel Adı": string
  Son_Yuzdem: number
  Ort_Oda_Brut: number
  Ort_Paxp_Brut: number
  Fark_Yuzde: number
  "Package Kdvsiz": number
  "Kdv%": number
  "Kon.Vergisi%": number
  "Package Kdv ": number
  "Package Kon.Vergisi": number
  TarihAy: string
}

export interface IStpRmforKlasikRequest {
  db_Id: number
  xRez_Sirket: number
  xBas_Tar: string
  xBit_Tar: string
  xtip: number
  kon1: string
  kon2: string
  xchkFis_Fazla_otel_10: number
  bas_Yil: number
  bit_Yil: number
  fisrci_Kapalioda_10: number
  xRez_C_W: string
  xSistem_Tarihi: string
  xAlis_Tarihi: string
  sistem_Bas1: string
  sistem_Bit1: string
  pmdahil_10: number
  tip_1: string
  xFis_Bela_tutar_10: number
  trace_Dus_10: number
  cev_01: any
}
