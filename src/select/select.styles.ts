import { createUseStyles } from 'react-jss';

export const useSelectStyles = createUseStyles(
  (theme) => ({
    root: {
      minWidth: 32,
      cursor: 'pointer',
      width: '100%',
      position: 'relative',
      border: '1px solid #E4E7F2',
      borderRadius: theme.shape.borderRadius,
      outline: '2px solid transparent',
      transition: 'border-color 0.2s',

      '&:focus-within': {
        borderColor: 'rgb(49, 130, 206);',
        boxShadow: 'rgb(49, 130, 206) 0px 0px 0px 1px;',
      },
    },
    select: {
      padding: '8px 16px',
    },
    input: {
      border: 'none',
      outline: 'none',

      '&:focus-visible': {
        borderColor: 'none',
        boxShadow: 'none',
      },
    },
    hidden: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      visible: 'none',
      opacity: 0,
    },
    menu: {
      overflowY: 'scroll',
      maxHeight: 300,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      borderRadius: theme.shape.borderRadius,
      zIndex: theme.zIndex.menu,

      '& > div': {
        maxHeight: 300,
        overflowY: 'auto',
      },
    },

    icon: {
      // marginLeft: 4,
      // width: 20,
      // height: 20,
      color: theme.palette.text.secondary,
    },
    outlined: {
      height: 42,
      paddingRight: 6,

      '& $icon': {
        // marginLeft: 8,
      },
    },
    label: {
      paddingRight: 32,
    },
    emptyLabel: {
      color: '#909EBB',
    },
    emptyText: {
      cursor: 'default',
      color: '#909EBB',
      padding: '8px 24px',
    },
    fullWidth: { width: '100%' },
  }),
  { name: 'Select' }
);

export const useSelectItemStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '12px 16px',
    cursor: 'pointer',
  },
  hovered: {
    backgroundColor: theme.palette.action.hover,
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));
