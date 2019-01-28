import * as React from 'react';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';
import { Popover, IconButton } from 'shared/view/elements';
import { Cross } from 'shared/view/elements/Icons';
import { i18nConnect, ITranslateProps, tKeys } from 'services/i18n';

import { StylesProps, provideStyles } from './ProfileMenu.style';
import { selectors } from './../../redux';
import LogoutButton from '../LogoutButton/LogoutButton';

interface IOwnProps {
  open: boolean;
  anchor: HTMLElement | null;
  onClose(): void;
}
interface IStateProps {
  confirmedAddress: string | null;
}

type IProps = IOwnProps & IStateProps & StylesProps & ITranslateProps;

class ProfileMenu extends React.PureComponent<IProps> {
  public render() {
    const { classes, t, anchor, open, onClose, confirmedAddress } = this.props;
    return (
      <Popover
        open={open}
        anchorEl={anchor}
        onClose={onClose}
        className={classes.popover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.root}>
          <IconButton className={classes.cross} onClick={onClose}>
            <Cross className={classes.crossIcon} />
          </IconButton>
          <div className={classes.content}>
            <div className={classes.avatar} />
            <div className={classes.information}>
              <div className={classes.title}>{t(tKeys.services.user.connectedToMetamask.getKey())}</div>
              <div className={classes.walletAddress}>{t(tKeys.services.user.walletAddress.getKey())}</div>
              <div className={classes.address}>{confirmedAddress}</div>
            </div>
          </div>
          <div className={classes.logoutButton}>
            <LogoutButton />
          </div>
        </div>
      </Popover>
    );
  }
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    confirmedAddress: selectors.selectConfirmedAddress(state),
  };
}

export default connect(mapState)(i18nConnect(provideStyles(ProfileMenu)));
