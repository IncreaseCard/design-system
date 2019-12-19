import React from "react";
import Button from "../src/components/Button";

export default {
  title: "Botón"
};

export const ButtonBase = () => <Button>Esto es un botón</Button>;
ButtonBase.story = {
  name: "Botón Base"
};

export const ButtonRed = () => (
  <Button type="red">Esto es un botón rojo</Button>
);

ButtonRed.story = {
  name: "Botón Rojo"
};
