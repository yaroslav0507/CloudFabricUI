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
        padding: 0,
        border: '1px solid #E0E0E0',
        borderLeft: 'none'
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
        padding: '0 17px',
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
      },
      contained: {
        boxShadow: 'none'
      },
      containedSecondary: {
        backgroundColor: themeColors.secondaryLight
      }
    },
    MuiTypography: {
      body1: {
        color: '#fff'
      },
      h5: {
        fontSize: 18,
        fontWeight: 700,
        color: themeColors.primary.main
      }
    },
    MuiListItem: {
      dense: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 5,
        paddingRight: 5,
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
    },
    MuiTableRow: {
      head: {
        height: 40,
      },
      root: {
        height: 40,
      },
      hover: {
        '&:hover': {
          backgroundColor: '#d9f1fb!important'
        }
      }
    },
    MuiTableCell: {
      root: {
        padding: '4px 5px 4px 0',
        '&:first-child': {
          paddingLeft: 15,
          borderTop: '1px solid #E3E5E5',
          borderLeft: '1px solid #E3E5E5',
          borderTopLeftRadius: 4
        },
        '&:last-child': {
          paddingLeft: 15,
          borderTop: '1px solid #E3E5E5',
          borderRight: '1px solid #E3E5E5',
        }
      },
      head: {
        color: '#000',
        fontWeight: 700,
        backgroundColor: '#f8f8f8',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        '&:first-child': {
          borderTopLeftRadius: 4
        },
        '&:last-child': {
          borderTopRightRadius: 4
        }
      },
      paddingDense: {
        paddingRight: 5,
        paddingLeft: 0
      }
    },
  }
});
