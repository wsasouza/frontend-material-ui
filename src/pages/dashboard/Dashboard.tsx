import { DetailTool } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBasePage title="Página Inicial" toolbar={<DetailTool />}>
      Testando
    </LayoutBasePage>
  );
};
