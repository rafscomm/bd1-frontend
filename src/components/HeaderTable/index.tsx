import * as C from './styles';

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

export const HeaderTable = ({ title, children }: HeaderProps) => {
  return (
    <C.Container>
      <h1>{title}</h1>
      {children}
    </C.Container>
  );
};
