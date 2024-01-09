import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";

interface ILayoutBasePaginaProps {
  titulo: string;
  children: React.ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({ children, titulo }) => {
	const theme = useTheme();
  
	return (
		<Box height="100%" display="flex" flexDirection="column" gap={1}>
			<Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
				<IconButton>
					<Icon>menu</Icon>
				</IconButton>
				<Typography variant="h5">
					{titulo}
				</Typography>
			</Box>
			<Box>
				Barra de ferramentas
			</Box>
			<Box>
				{children}
			</Box>
		</Box>
	);
};
