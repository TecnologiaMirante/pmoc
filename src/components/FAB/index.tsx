import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FabContainer, FabButton, FabAction, Tooltip } from "./styles";
import { FcEngineering } from "react-icons/fc";
import { PiWarehouseBold } from "react-icons/pi";
import { BsFillGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface FABProps {
  actions: Action[];
}

export function FAB() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    setOpen(!open);
  };

  return (
    <FabContainer>
      <FabButton onClick={toggleOptions}>
        <MdAdd />
      </FabButton>
      {open && (
        <ul>
          {actions.map((action, index) => (
            <FabAction
              key={action.label}
              onClick={action.onClick}
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {action.icon}
              <Tooltip>{action.label}</Tooltip>
            </FabAction>
          ))}
        </ul>
      )}
    </FabContainer>
  );
}

const actions: Action[] = [
  {
    label: "Estação",
    icon: <FcEngineering />,
    onClick: () => {
      window.location.href = "/criarEstacao"
    },
  },
  {
    label: "Equipamento",
    icon: <PiWarehouseBold />,
    onClick: () => {
      window.location.href = "/criarAtivo"
    },
  },
  {
    label: "Manutenção",
    icon: <BsFillGearFill />,
    onClick: () => {
     console.log('manutenções')
    },
  },
];

