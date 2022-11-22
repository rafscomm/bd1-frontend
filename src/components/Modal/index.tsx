import { ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';

import { ModalContainer, ModalContent } from './styles';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps): JSX.Element {
  return (
    <ModalContainer>
      <ModalContent>
        <div className="close" style={{ position: 'absolute', right: 0 }}>
          <GrClose
            style={{ margin: '15px 20px 0px 0px', fontSize: '20px', cursor: 'pointer' }}
            onClick={onClose}
            role="button"
          />
        </div>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
