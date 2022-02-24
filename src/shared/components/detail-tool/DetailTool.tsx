import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

export const DetailTool: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Icon>save</Icon>}
        onClick={() => {}}
      >
        Salvar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>save</Icon>}
        onClick={() => {}}
      >
        Salvar e Voltar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>delete</Icon>}
        onClick={() => {}}
      >
        Apagar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>add</Icon>}
        onClick={() => {}}
      >
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical" />

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>arrow_back</Icon>}
        onClick={() => {}}
      >
        Voltar
      </Button>
    </Box>
  );
};
