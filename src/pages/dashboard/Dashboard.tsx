import { ListingTool } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBasePage
      title="Página Inicial"
      toolbar={<ListingTool showInputSearch />}
    >
      Testando
    </LayoutBasePage>
  );
};
