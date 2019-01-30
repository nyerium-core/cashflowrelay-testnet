// tslint:disable:max-line-length
export default {
  shared: {
    menu: {
      myCashflows: 'My cashflows',
      marketplace: 'Marketplace',
    },
    validation: {
      isRequired: 'Field is required',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      invalidWalletAddress: 'Invalid wallet address',
    },
    pageNotFound: 'We can’t find this page',
    copiedAtClipboard: 'Copied at clipboard',
    cancel: 'Cancel',
  },
  components: {
    fund: {
      commissionLabel: 'Commission',
      policyLabel: 'Policy',
    },
  },
  features: {
    manageCashFlows: {
      status: {
        pending: 'tx pending',
        saving: 'saving',
        awaiting: 'Awaiting buyer',
        sold: 'sold',
      },
      obligations: 'Obligations',
      income: 'Income',
      name: 'Name',
      payersRating: 'Payer’s rating',
      performance: 'Performance',
      rating: 'Rating',
      nextInstalment: 'Next instalment',
      cashFlowBalance: 'Cashflow balance',
      discount: 'Discount',
      dueAmount: 'Due amount',
      id: 'Cashflow number',
      payer: 'Cashflow payer',
      lender: 'Cashflow lender',
      instalmentSize: 'Instalment size',
      firstInstalmentDate: 'First instalment',
      lastInstalmentDate: 'Last instalment',
      availableBalance: 'Available balance',
      discountValue: 'Discount value',
      nextInstalmentInfo: '+%{amount} DAI on %{date}',
      daiMonthly: '%{amount} DAI/monthly',
      months: '%{amount} month',
      howMuchInstalmentIsComplete: '%{paid} / %{total} DAI %{percent}% complete',
      price: 'Price',
      sellCashflow: 'Sell cashflow',
      withdrawDai: 'Withdraw DAI',
      payInstalment: 'Pay instalment',
      buyCashflow: 'Buy cashflow',
      duration: 'Duration',
      repayingAmount: 'Repaying amount',
      recommendedPrice: 'Recommended price',
    },
    signIn: {
      button: 'Connect to %{address}',
      logout: 'Log out',
      confirmModal: {
        title: 'Confirm your address',
        beforeAddressDescription: 'You’re signing in with the following address:',
        afterAddressDescription: 'To verify your ownership of this address, we\'ll ask you to sign a confirmation message. Click the Confirm button to continue. If this isn’t the address you’d like to connect to C2FC 0xchanger, click Cancel and select a different address from the wallet menu.',
        buttons: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      },
    },
    signTransaction: {
      title: 'Sign transaction',
      description: 'Scan this QR code with your mobile device to continue transaction',
      openApp: 'Open application',
      copyLink: 'Copy link',
    },
  },
  documents: {},
  modules: {
    marketplace: {
      fundsMarketplace: 'Funds marketplace',
      YouAreInThisFund: 'You’re in this fond',
    },
  },
  services: {
    dataProvider: {
      showMoreButton: 'Show more',
    },
    user: {
      connectedToMetamask: 'Connected to Metamask',
      walletAddress: 'Wallet address',
    },
  },
};
