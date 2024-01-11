import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";
import { ReactNode } from 'react';

interface ILayoutBasePaginaProps {
  titulo: string;
  children: ReactNode;
	barraFerramentas?: ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({ children, titulo, barraFerramentas }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	const dmDown = useMediaQuery(theme.breakpoints.down("md"));
	const { toggleDrawerOpen } = useDrawerContext();

	return (
		<Box height="100%" display="flex" flexDirection="column" gap={1}>
			<Box padding={1} display="flex" alignItems="center" gap={1} 
					 height={theme.spacing(smDown ? 6 : dmDown ? 8 : 12)} >
				{smDown && 
          (<IconButton onClick={toggleDrawerOpen}>
          	<Icon>menu</Icon>
          </IconButton>)}
				<Typography 
						variant={(smDown ? "h5" : dmDown ? "h4" : "h3")}
						overflow="hidden"
						whiteSpace="nowrap"
						textOverflow="ellipses">
					{titulo}
				</Typography>
			</Box>
			{barraFerramentas && (<Box>
															{barraFerramentas}
														</Box>)}
			<Box flex={1} overflow="auto"> {/*scroll auto no box*/}
				{children}
			</Box>
		</Box>
	);
};
