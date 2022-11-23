import { ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import { AddButtom } from '../AddButtom';

import { ModalContainer, ModalContent } from './styles';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  onEnvie: () => void;
}

export function Modal({ children, onClose, onEnvie }: ModalProps): JSX.Element {
  return (
    <ModalContainer>
      <ModalContent>
        <div className="close" style={{ position: 'relative', left: '100' }}>
          <GrClose
            style={{ margin: '15px 20px 0px 0px', fontSize: '20px', cursor: 'pointer' }}
            onClick={onClose}
            role="button"
          />
          <IoIosAddCircle
            onClick={onEnvie}
            role="button"
            style={{ fontSize: '48px', color: '#42f563', cursor: 'pointer', position: 'relative', top: '300%' }}
          />
        </div>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
