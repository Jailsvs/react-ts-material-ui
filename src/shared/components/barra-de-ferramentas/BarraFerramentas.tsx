import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

type Props = {}

export const BarraFerramentas: React.FC = (props: Props) => {
  const theme = useTheme();
  return (
    <Box height={theme.spacing(5)}
         marginX={1}
         padding={1}
         paddingX={2}
         display="flex"
         gap={1}
         alignItems="center"
         component={Paper}>
      <TextField size="small"
                 placeholder="Pesquisar"/>
      <Box flex={1}
           display="flex"
           justifyContent="end" >
        <Button variant="contained"
                color="primary"
                disableElevation
                endIcon={<Icon>add</Icon>}>
          Novo
        </Button>
      </Box>
    </Box>
  )
}
