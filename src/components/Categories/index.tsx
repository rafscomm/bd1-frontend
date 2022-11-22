import { Container } from './styles';

interface CategoriesProps {
  title: string;
  clicked?: boolean;
}

export function Categories({ title, clicked }: CategoriesProps): JSX.Element {
  return (
    <Container clicked={clicked}>
      <div className="title">
        <div className="dot" />
        {title}
      </div>
      <div className="Separator" />
    </Container>
  );
}
