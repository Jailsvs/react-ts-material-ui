import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

type Props = {
  children: React.ReactNode
};

interface IListItemLinkProps {
	label: string;
	icon: string;
	to: string,
	onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ icon, label, to, onClick }: IListItemLinkProps) => {
	const navigate = useNavigate();
	const resolvedPath = useResolvedPath(to);
	const match = useMatch({	path: resolvedPath.pathname,	end: false });

	const handleClick = () => {
		navigate(to);
		onClick?.();
	};

	return (
		<ListItemButton selected={!!match} onClick={handleClick}>
			<ListItemIcon>
				<Icon>{icon}</Icon>
			</ListItemIcon>
			<ListItemText primary={label} />
		</ListItemButton>
	);
};

const MenuLateral = ({ children }: Props) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	const {	isDrawerOpen, toggleDrawerOpen, drawerOptions	} = useDrawerContext();
	return (
		<>
			<Drawer open={isDrawerOpen} 
				variant={(smDown ? "temporary" : "permanent")}
				onClose={toggleDrawerOpen}>
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
							{drawerOptions.map((option) => 
								<ListItemLink icon={option.icon} 
									to={option.path}
									label={option.label}
									onClick={smDown ? toggleDrawerOpen : undefined}
									key={option.path}/>)}
						</List>
					</Box>
				</Box>
			</Drawer>
			<Box height="100vh" marginLeft={(smDown ? 0 : theme.spacing(28))}>
				{children}
			</Box>
		</>
	);
};

export default MenuLateral;