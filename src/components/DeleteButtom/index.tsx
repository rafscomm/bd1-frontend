import { AiFillDelete } from 'react-icons/ai';

import { ButtomDelete } from './styles';

interface DeleteButtomProps {
  onClick: () => void;
}

export function DeleteButtom({ onClick }: DeleteButtomProps): JSX.Element {
  return (
    <ButtomDelete onClick={onClick}>
      <AiFillDelete />
    </ButtomDelete>
  );
}
