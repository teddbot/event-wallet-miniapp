Component({
  mixins: [],
  data: {},
  props: {
    providers: [],
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onProviderCellTap (e, props) {
      const { provider } = props
      my.navigateTo({
        url: `/pages/provider-select2/provider-select?providerName=${provider.name || ''}`
      })
    },
    onTapFiatCell () {
      my.navigateTo({ 
        url: '/pages/fiat/index/index'
      })
    }
  },
});
