import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FabContainer, FabButton, FabAction, Tooltip } from "./styles";

interface Action {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
  }
  
  interface FABProps {
    actions: Action[];
  }

export function FAB ({ actions }: FABProps) {
    const [open, setOpen] = useState(false);

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

