import { BarraFerramentas } from '../../shared/components';
import { LayoutBasePagina } from "../../shared/layouts";

export const Dashboard = () => {
	return (
		<LayoutBasePagina titulo="Página inicial" 
											barraFerramentas={
												(<BarraFerramentas/>)
											}>
      Testando
		</LayoutBasePagina>
	);
};
