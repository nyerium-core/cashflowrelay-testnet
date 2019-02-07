import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({
    width: '26.875rem',
    backgroundColor: theme.colors.blackCurrant,

  }),

  daiAmount: rule({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    fontSize: '1.125rem',
  }),

  usdAmount: rule({
    marginBottom: '2rem',
    fontSize: '0.75rem',
    textAlign: 'right',
  }),

  sellInput: rule({
    flexBasis: '7.5rem',
    display: 'flex',
    alignItems: 'center',
  }),
  sellInputField: rule({
    marginRight: '0.5rem',
  }),
  input: rule({
    padding: '0.625rem 1rem',
    textAlign: 'center',
  }),

  tokenFields: rule({
    marginBottom: '3.4375rem',

    // '&$doubleMargin': {
    //   marginBottom: '6.875rem',
    // },
  }),

  tokenField: rule({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.125rem',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
