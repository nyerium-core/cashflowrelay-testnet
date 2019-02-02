import * as React from 'react';
import * as moment from 'moment';
import { bind } from 'decko';

import { i18nConnect, ITranslateProps, tKeys as allKeys } from 'services/i18n';
import { formatNumber } from 'shared/helpers/format';
import { toFixed } from 'shared/helpers/integer';

import { StylesProps, provideStyles } from './LoanSummary.style';

const tKeys = allKeys.features.createCashFlow.form;

const tKeysManageCashFlows = allKeys.features.manageCashFlows;

interface IOwnProps {
  duration: number; // milliseconds
  amount: number;
  interest: number;
  installmentSize: number;
  firstInstallmentDate: number; // milliseconds
  lastInstallmentDate: number; // milliseconds
  repayingAmount: number;
  periodDuration: number; // milliseconds
  nameInput: React.ReactElement<any>;
  actions: Array<React.ReactElement<any>>;
}

type IProps = IOwnProps & StylesProps & ITranslateProps;

interface IState {
  openConfirmModal: boolean;
}

class CreateCashFlowForm extends React.PureComponent<IProps> {
  public state: IState = { openConfirmModal: false };

  public render() {
    const {
      classes, t, nameInput, actions, duration, periodDuration,
      amount, interest, installmentSize, firstInstallmentDate, lastInstallmentDate, repayingAmount } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>{t(tKeys.loanSummary.getKey())}</div>
        <div className={classes.nameInputLabel}>{t(tKeys.name.getKey())}</div>
        <div className={classes.nameInputDescription}>{t(tKeys.nameDescription.getKey())}</div>
        <div className={classes.nameInput}>{nameInput}</div>
        <div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.borrowingAmount.getKey())}</span>
            <span className={classes.fieldValue}>{`${amount || '-'} DAI`}</span>
          </div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.repayingAmount.getKey())}</span>
            <span className={classes.fieldValue}>{`${toFixed(repayingAmount, 2)} DAI (${interest}%)`}</span>
          </div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.installmentSize.getKey())}</span>
            <span className={classes.fieldValue}>
              {t(tKeysManageCashFlows.amountPerPeriodicity.getKey(), {
                amount: formatNumber(installmentSize, 2),
                periodicity: moment.duration(periodDuration).humanize(),
              })}
            </span>
          </div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.installmentCount.getKey())}</span>
            <span className={classes.fieldValue}>{moment.duration(duration).humanize()}</span>
          </div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.firstInstalment.getKey())}</span>
            <span className={classes.fieldValue}>{moment(firstInstallmentDate).format('LL')}</span>
          </div>
          <div className={classes.field}>
            <span className={classes.fieldName}>{t(tKeys.fields.lastInstalment.getKey())}</span>
            <span className={classes.fieldValue}>{moment(lastInstallmentDate).format('LL')}</span>
          </div>
          <div className={classes.actions}>
            {actions.map((action, i) => (
              <div key={i} className={classes.action} >{action}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  @bind
  public closeConfirmModal() {
    this.setState({ openConfirmModal: false });
  }
}

export { IOwnProps };
export default (
  i18nConnect(
    provideStyles(
      CreateCashFlowForm,
    ),
  )
);
