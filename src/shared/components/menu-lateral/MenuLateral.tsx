import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode
};

const MenuLateral = ({ children }: Props) => {
	const theme = useTheme();
	return (
		<>
			<Drawer variant='permanent'>
				<Box width={theme.spacing(28)} 
					height="100%"
					display="flex"
					flexDirection="column">
					<Box width="100%" 
						height={theme.spacing(20)}
						display="flex"
						alignItems="center"
						justifyContent="center">
						<Avatar alt="Avatar menu lateral" 
							src="https://media.licdn.com/dms/image/C4E03AQH_-N9ioJwFDA/profile-displayphoto-shrink_200_200/0/1619010871943?e=1709164800&v=beta&t=SxBOuJSzPy2MxzazyGXhm7IAJGBkHv-NvCwBupe6iCE" 
							sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
						/>
					</Box>
					<Divider/>
					<Box flex={1}>
						<List component="nav">
							<ListItemButton>
								<ListItemIcon>
									<Icon>home</Icon>
								</ListItemIcon>
								<ListItemText primary="Página inicial" />
							</ListItemButton>
						</List>
					</Box>
				</Box>
			</Drawer>
			<Box height="100vh" marginLeft={theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};

export default MenuLateral;