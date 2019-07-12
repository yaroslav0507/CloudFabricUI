import { createMuiTheme } from '@material-ui/core/styles';

export const themeColors = {
  primary: {
    main: '#FF0000'
  },
  secondary: {
    main: '#393939'
  },
  secondaryLight: '#474747'
};

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Roboto',
    useNextVariants: true,
  },
  spacing: {
    unit: 10
  },
  palette: {
    tonalOffset: 0.1,
    primary: {
      main: themeColors.primary.main,
      contrastText: '#fff'
    },
    secondary: {
      main: themeColors.secondary.main,
      contrastText: '#fff'
    },
    text: {
      primary: '#474747',
    }
  },
  overrides: {
    MuiInput: {
      root: {
        height: 40
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        backgroundColor: '#fff',
        border: 'none',
        top: -6
      },
      adornedStart: {
        paddingLeft: 0,
      },
      input: {
        zIndex: 1,
        padding: 0
      },
      inputAdornedStart: {
        paddingLeft: 8,
        borderRadius: '0 4px 4px 0',
        height: 40,
        boxSizing: 'border-box'
      }
    },
    MuiInputAdornment: {
      root: {
        height: 40,
        maxHeight: '100%',
        borderRadius: '4px 0 0 4px',
        zIndex: 1,
        padding: '0 8px',
        backgroundColor: '#E0E0E0'
      },
      positionStart: {
        marginRight: 0
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '8px 16px'
      }
    },
    MuiTypography: {
      body1: {
        color: '#fff'
      }
    },
    MuiListItem: {
      dense: {
        paddingTop: 12,
        paddingBottom: 12,
      }
    },
    MuiListItemIcon: {
      root: {
        marginRight: 0
      }
    },
    MuiListItemText: {
      root: {
        padding: '0 8px'
      }
    }
  }
});
