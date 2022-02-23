import { Box, Button, TextField, Paper, useTheme, Icon } from '@mui/material';

interface IToolbarProps {
  searchText?: string;
  showInputSearch?: boolean;
  changeSearchText?: (text: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  onNewButtonClick?: () => void;
}

export const Toolbar: React.FC<IToolbarProps> = ({
  searchText = '',
  showInputSearch = false,
  changeSearchText,
  newButtonText = 'Novo',
  showNewButton = true,
  onNewButtonClick,
}) => {
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
      {showInputSearch && (
        <TextField
          size="small"
          label="pesquisar"
          variant="outlined"
          value={searchText}
          onChange={(e) => changeSearchText?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            endIcon={<Icon>add</Icon>}
            onClick={onNewButtonClick}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
