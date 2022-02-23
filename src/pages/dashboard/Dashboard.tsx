import { Toolbar } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBasePage
      title="Página Inicial"
      toolbar={<Toolbar showInputSearch />}
    >
      Testando
    </LayoutBasePage>
  );
};
