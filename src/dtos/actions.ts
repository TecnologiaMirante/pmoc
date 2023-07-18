import React from "react";
import { FcEngineering } from "react-icons/fc";
import { PiWarehouseBold } from "react-icons/pi";
import { BsFillGearFill } from "react-icons/bs";

export interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const actions: Action[] = [
  { label: "Estação", icon: <FcEngineering />, onClick:() => window.location.href = "/estacao" },
  { label: "Equipamento", icon: <BsFillGearFill />, onClick: () => window.location.href = "/criarAtivo" },
  { label: "Manutenção", icon: <PiWarehouseBold />, onClick: () => window.location.href = "/manutencao"},
];
