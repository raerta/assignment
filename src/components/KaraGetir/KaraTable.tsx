"use client";
import { Button, Table, TextInput } from "@mantine/core";
import { IKaraGetirResponse, IKaraGetirValue } from "@/types/KaraGetir";
import { Textarea } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { sendToKara } from "@/services/kara.service";
import { useState } from "react";

interface IProps {
  data: IKaraGetirResponse;
}

const KaraTable = ({ data }: IProps) => {
  const [tableValues, setTableValues] = useState(data.value);

  const initalData = {
    Id: 0,
    Adi: "",
    Soy: "",
    Aciklama: "",
    Tcno: "",
    Kimlik_no: "",
    Dogum_tarihi: "",
    Sistem_tarihi: "",
    Sistem_grubu: "",
    Otel_kodu: "",
    Ulke_xml: "",
    Kulanici: "",
    Acenta: "",
    "Xml Kodu": "",
    "ULke Adı": "",
  };
  const [selected, setSelected] = useSetState<IKaraGetirValue>(initalData);

  const replaceNullWithEmptyString = (data: IKaraGetirValue) => {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === null ? "" : value,
      ])
    );
  };

  const handleSetValues = (elem: IKaraGetirValue) => {
    setSelected(replaceNullWithEmptyString(elem));
  };
  const keys = Object.keys(tableValues[0]);

  const tHeads = keys.map((key, index) => (
    <Table.Th key={index}>{key}</Table.Th>
  ));

  const rows = tableValues.map((element, index) => {
    const values = Object.values(element);
    return (
      <Table.Tr
        onClick={() => handleSetValues(element)}
        key={index}
        bg={
          selected.Id === element.Id
            ? "var(--mantine-color-blue-light)"
            : undefined
        }
      >
        {values.map((val, i) => (
          <Table.Td key={i}>{val}</Table.Td>
        ))}
      </Table.Tr>
    );
  });

  const handleSubmit = async () => {
    if (!selected.Adi || !selected.Soy || !selected.Aciklama) {
      console.log("yoklar", selected);
      alert("Lütfen eksik alanları doldurun.");
      return;
    }
    try {
      const resp = await sendToKara({
        db_Id: 9,
        Id: selected.Id,
        Adi: selected.Adi,
        Soy: selected.Soy,
        Aciklama: selected.Aciklama,
      });
      setTableValues((prevValues) => {
        const index = prevValues.findIndex((elem) => elem.Id === selected.Id);
        if (index !== -1) {
          const updatedValues = [...prevValues];
          updatedValues[index] = {
            ...updatedValues[index],
            ...selected,
          };
          return updatedValues;
        }
        return [
          ...prevValues,
          { ...selected, Id: Number(resp.value.split(" ")[0]) },
        ];
      });
    } catch (error) {
      alert("Data eklenemedi.");
    }
  };
  return (
    <div className="px-5">
      <div className="w-full overflow-scroll h-[50vh] ">
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>{tHeads}</Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
      {selected && (
        <div>
          <div className="flex w-full mt-5">
            <div className="w-1/2 pr-4 flex flex-col gap-2">
              <TextInput
                label="Adı"
                value={selected.Adi}
                onChange={(event) =>
                  setSelected({ Adi: event.currentTarget.value })
                }
                placeholder="Adı"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />
              <TextInput
                label="Soy Adı"
                value={selected.Soy}
                onChange={(event) =>
                  setSelected({ Soy: event.currentTarget.value })
                }
                placeholder="Soy Adı"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />
              <TextInput
                label="Dogum_tarihi"
                value={selected.Dogum_tarihi?.split("T")[0]}
                onChange={(event) =>
                  setSelected({ Dogum_tarihi: event.currentTarget.value })
                }
                placeholder="Dogum_tarihi"
                type="date"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />

              <TextInput
                label="Kimlik No"
                value={selected.Kimlik_no}
                onChange={(event) =>
                  setSelected({ Kimlik_no: event.currentTarget.value })
                }
                placeholder="Kimlik No"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />

              <TextInput
                label="Tcno"
                value={selected.Tcno}
                onChange={(event) =>
                  setSelected({ Tcno: event.currentTarget.value })
                }
                placeholder="Tcno"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />
              <TextInput
                label="Ulke_xml"
                value={selected.Ulke_xml}
                onChange={(event) =>
                  setSelected({ Ulke_xml: event.currentTarget.value })
                }
                placeholder="Ulke_xml"
                error={false}
                inputWrapperOrder={["label", "input", "description", "error"]}
              />
            </div>
            <div className="w-1/2 pl-4">
              <Textarea
                label="Input label"
                description="Input description"
                placeholder="Input placeholder"
                value={selected.Aciklama}
                rows={9}
                onChange={(event) =>
                  setSelected({ Aciklama: event.currentTarget.value })
                }
              />
              <div className="flex gap-5 mt-6 w-full justify-end">
                <Button color="grape" onClick={() => setSelected(initalData)}>
                  Yeni Oluştur
                </Button>
                <Button onClick={handleSubmit}>Gönder</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KaraTable;
