import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import axios from "axios";
import { ContDivList } from "../Styles/styles";

function Listar() {
  const [per, setPer] = useState([]);

  const getData = async () => {
    const resp = await axios.get(url);
    console.log(resp?.data);
    setPer(resp?.data);
  };

  console.log(per);

  useEffect(() => {
    getData();
  }, []);

  const dataSource = per?.map((persona) => ({
    ...persona,
    key: persona.id,
  }));

  const deletePersona = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Celular",
      dataIndex: "celular",
      key: "celular",
    },
    {
      title: "Documento",
      dataIndex: "numDocumento",
      key: "numDocumento",
    },
    {
      title: "Foto",
      dataIndex: "imagen",
      key: "imagen",
      render: (i) => <img src={i} alt="" style={{ width: "50px" }} />,
    },
    {
      title: "Acción",
      key: "action",
      render: (ac) => <Button onClick={() => deletePersona(ac.id)}>X</Button>,
    },
  ];
  return (
    <ContDivList>
      <Table dataSource={dataSource} columns={columns} />;
    </ContDivList>
  );
}

export default Listar;
