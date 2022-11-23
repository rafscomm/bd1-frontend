import { IoIosAddCircle } from 'react-icons/io';
import { Buttom } from './styles';
interface AddButtomProps {
  handleOpen: () => void;
}
export function AddButtom({ handleOpen }: AddButtomProps): JSX.Element {
  return (
    <Buttom onClick={handleOpen}>
      <IoIosAddCircle />
    </Buttom>
  );
}
