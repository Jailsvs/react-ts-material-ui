import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
	drawerOptions: IDrawerOption[],
	setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
	icon: string;
	label: string;
	path: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
	return useContext(DrawerContext);
};

type Props = {
  children: React.ReactNode
};

export const DrawerProvider = ({ children }: Props) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

	const toggleDrawerOpen = useCallback(() => {
		setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
	}, []);

	const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
		setDrawerOptions(newDrawerOptions);
	}, []);


	return (
		<DrawerContext.Provider value={{	isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions	}}>
			{children}
		</DrawerContext.Provider>
	);
};

