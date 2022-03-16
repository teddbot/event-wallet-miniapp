// import denoms from '/data/denoms'

// Page({
//   data: {
//     providerName: '',
//     helpDialogMessage: `
//       Hubungi call center kantor pembiayaan anda.
//       Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
//       Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
//     `,
//     customerNumberLoading: false,
//     denoms: [],
//     custNumberInputErrorMsg: ''
//   },
//   onLoad(query) {
//     this.setData({ providerName: query.providerName })
//   },

//   saveHelpDialogRef(ref) {
//     this.helpDialogRef = ref
//   },
//   openHelpDialog() {
//     this.helpDialogRef.show()
//   },
//   closeHelpDialog() {
//     this.helpDialogRef.hide()
//   },

//   onCustomerNumberInput(e) {
//     const { value } = e.detail
//     this.setData({ custNumberInputErrorMsg: '' })
//     clearTimeout(this.customerNumberTimer)
//     this.setData({ customerNumberLoading: true })
//     this.customerNumberTimer = setTimeout(() => {
//       if (value) {
//         this.setData({ denoms, customerNumberLoading: false })
//       } else {
//         this.setData({ denoms: [], customerNumberLoading: false })
//       }
//     }, 500)
//   },

//   onInputError(errorMsg) {
//     this.setData({ custNumberInputErrorMsg: errorMsg })
//   }
// });

import providers from '/data/providers2'

Page({
  data: {
    providers,
    providersSearchResult: [],
    isSearch: false,
  },

  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({ providersSearchResult: this.data.providers })
  },
  onReady() {},
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {},
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'DANA Mini Biller Template',
      desc: 'DANA Mini Program tempalate for bill payment',
      path: 'pages/index/index',
    };
  },

  onSearchInput(e)  {
    const searchKey = e.detail.value || ''
    const lowerCaseSearchKey = searchKey.toLowerCase()
    const filtered = this.data.providers.filter(provider => {
      const lowerCaseProviderName = provider.name.toLowerCase()
      if (lowerCaseProviderName.indexOf(lowerCaseSearchKey) !== -1) {
        return provider
      }
    })
    if (searchKey) {
      this.setData({ 
        providersSearchResult: filtered,
        isSearch: true,
      })
    } else {
      this.setData({
        providersSearchResult: this.data.providers,
        isSearch: false,
      })
    }
  },
});