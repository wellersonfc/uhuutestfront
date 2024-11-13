import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getEnderecoPorCep } from "../services/api";

const Formulario = ({ onSubmit }) => {
  const [endereco, setEndereco] = useState(null);

  const formik = useFormik({
    initialValues: {
      nome_cliente: "",
      peso_kg: "",
      cep: "",
      bairro: "",
      complemento: "",
      latitude: "",
      longitude: "",
      pais: "",
    },
    validationSchema: Yup.object({
      nome_cliente: Yup.string().required("Nome é obrigatório"),
      peso_kg: Yup.number().required("Peso é obrigatório").positive().integer(),
      cep: Yup.string().length(8, "CEP deve ter 8 dígitos").required("CEP é obrigatório"),
      bairro: Yup.string().required("Bairro é obrigatório"),
      pais: Yup.string().required("País é obrigatório"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleCepChange = async (e) => {
    const { value } = e.target;
    if (value.length === 8) {
      const response = await getEnderecoPorCep(value);
      setEndereco(response.data);
      formik.setFieldValue("bairro", response.data.bairro || "");
      formik.setFieldValue("complemento", response.data.complemento || "");
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Nome do Cliente</label>
        <input
          type="text"
          name="nome_cliente"
          value={formik.values.nome_cliente}
          onChange={formik.handleChange}
        />
        {formik.errors.nome_cliente && <div>{formik.errors.nome_cliente}</div>}
      </div>

      <div>
        <label>Peso (kg)</label>
        <input
          type="number"
          name="peso_kg"
          value={formik.values.peso_kg}
          onChange={formik.handleChange}
        />
        {formik.errors.peso_kg && <div>{formik.errors.peso_kg}</div>}
      </div>

      <div>
        <label>CEP</label>
        <input
          type="text"
          name="cep"
          value={formik.values.cep}
          onChange={(e) => {
            formik.handleChange(e);
            handleCepChange(e);
          }}
        />
        {formik.errors.cep && <div>{formik.errors.cep}</div>}
      </div>

      <div>
        <label>Bairro</label>
        <input
          type="text"
          name="bairro"
          value={formik.values.bairro}
          onChange={formik.handleChange}
          disabled
        />
      </div>

      <div>
        <label>Complemento</label>
        <input
          type="text"
          name="complemento"
          value={formik.values.complemento}
          onChange={formik.handleChange}
          disabled
        />
      </div>

      <div>
        <label>País</label>
        <input
          type="text"
          name="pais"
          value={formik.values.pais}
          onChange={formik.handleChange}
        />
        {formik.errors.pais && <div>{formik.errors.pais}</div>}
      </div>

      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};

export default Formulario;
