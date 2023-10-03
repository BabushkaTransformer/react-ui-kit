import { createUseStyles } from 'react-jss';
import { IChipProps } from './chip.models';

const defaultTextColor = 'rgba(0, 0, 0, 0.87)';
const defaultBackgroundColor = 'rgba(0, 0, 0, 0.08)';

export const useChipStyles = createUseStyles(
  (theme) => ({
    root: {
      borderRadius: theme.shape.borderRadius,
      padding: '6px 20px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: theme.typography.fontFamily,
      ...theme.typography.caption,
    },

    filled: (props: IChipProps) => ({
      color: props.color ? theme.palette[props.color].contrastText : defaultTextColor,
      background: props.color ? theme.palette[props.color].main : defaultBackgroundColor,
    }),

    outlined: (props: IChipProps) => ({
      color: props.color ? theme.palette[props.color].main : defaultTextColor,
      borderColor: props.color ? theme.palette[props.color].main : defaultBackgroundColor,
      border: '1px solid',
    }),

    rounded: {
      borderRadius: theme.shape.borderRadius * 5,
    },

    icon: {
      height: 20,
      '& > svg': {
        width: 20,
        height: 20,
      },
    },

    small: {
      '&$root': {
        padding: '3px 12px',
      },
      '& $icon': {
        height: 16,
        '& > svg': {
          width: 16,
          height: 16,
        },
      },
    },
  }),
  {
    name: 'Chip',
  }
);
