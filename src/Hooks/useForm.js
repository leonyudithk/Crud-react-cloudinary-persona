import { useState } from "react";

export default function useForm({ initialState = {} }) {
  const [dataForm, setDataForm] = useState({ initialState });

  const handleOnChange = ({ target }) => {
    // console.log("entre a handle", target.value);
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };
  const reset = () => {
    setDataForm(initialState);
  };

  const handleChangeSelect = (e) =>
    setDataForm({
      ...dataForm,
      tipoDoc: e,
    });

  const handleChangeCode = (e) =>
    setDataForm({
      ...dataForm,
      code: e,
    });

  const handleChangeImagen = (url) =>
    setDataForm({
      ...dataForm,
      imagen: url,
    });
  return [
    dataForm,
    handleOnChange,
    handleChangeSelect,
    handleChangeImagen,
    handleChangeCode,
    reset,
  ];
}
