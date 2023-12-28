import { Input, Select } from "antd";
import React from "react";
import useForm from "../Hooks/useForm";

function Registrar() {
  const [ dataForm,
    handleOnChange,
    handleChangeSelect,
    handleChangeImagen,
    handleChangeCode,
    reset] = useForm({
    nombre: "",
    tipoDoc: "",
    numDocumento: "",
    celular: "",
    imagen: "",
    code: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    console.log(dataForm);
    reset();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="nombre"
          onChange={handleOnChange}
          value={dataForm.nombre}
          placeholder="Ingrese Nombre Y Apellido"
        />
        <Input.Group compact>
          <Select
            name="tipoDoc"
            defaultValue="Elegir"
            style={{ width: 120 }}
            onChange={handleChangeSelect}
            options={[
              { value: "C.C", label: "C.C" },
              { value: "C.E", label: "C.E" },
              { value: "T.I", label: "T.I" },
            ]}
          />
          <Input
            name="numDocumento"
            onChange={handleOnChange}
            value={dataForm.numDocumento}
            placeholder="Ingrese número de documento"
          />
        </Input.Group>
        <Input.Group compact>
          <Select
            name="cel"
            defaultValue="Elegir"
            style={{ width: 120 }}
            onChange={handleChangeCode}
            options={[
              { value: "+57", label: "+57" },
              { value: "+58", label: "+58" },
              { value: "+54", label: "+54" },
            ]}
          />
          <Input
            name="celular"
            onChange={handleOnChange}
            value={dataForm.celular}
            placeholder="Ingrese número de celular"
            type="number"
          />
        </Input.Group>
        <input type="file" name="imagen"  onChange={handleChangeImagen}/>
        <button type="submit" >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Registrar;
