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
        url: `/pages/provider-select/provider-select2?providerName=${provider.name || ''}`
      })
    },
    onTapFiatCell () {
      my.navigateTo({ 
        url: '/pages/fiat/index/index'
      })
    }
  },
});
