"use client";
import { Table } from "@mantine/core";
import { IStpRmforKlasikResponse } from "@/types/StpRmforKlasik";

interface IProps {
  data: IStpRmforKlasikResponse;
}

const StpTable = ({ data }: IProps) => {
  const keys = Object.keys(data.value[0]);

  const tHeads = keys.map((key, index) => (
    <Table.Th key={index}>{key}</Table.Th>
  ));

  const rows = data.value.map((element, index) => {
    const values = Object.values(element);
    return (
      <Table.Tr key={index}>
        {values.map((val, i) => (
          <Table.Td key={i}>{val}</Table.Td>
        ))}
      </Table.Tr>
    );
  });


  return (
    <div className="w-full overflow-scroll">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>{tHeads}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default StpTable;
