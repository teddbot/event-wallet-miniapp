import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    visible: false,
    leaving: true,
    sheetClass: '',
    sheetAnimation: null,
  },
  props: {
    roundedTop: false,
    dismissable: true,
    swipe: false,
  },
  onInit() {
    this.animation = my.createAnimation({
      timeFunction: 'ease',
      duration: 300,
    })
  },
  didMount() {
    this.updateSheetClass()
  },
  didUnmount() {
    clearTimeout(this.hideTimer)
  },
  deriveDataFromProps(nextProps) {
    this.updateSheetClass(nextProps)
  },
  methods: {
    updateSheetClass(props) {
      if (!props) props = this.props
      const { roundedTop, swipe } = props
      const sheetClasses = []
      if (roundedTop) {
        sheetClasses.push('f-sheet--rounded-top')
      }
      if (swipe) {
        sheetClasses.push('f-sheet--swipe')
      }
      const sheetClass = sheetClasses.join(' ')
      this.setData({ sheetClass })
    },
    dismiss() {
      this.props.dismissable && this.hide()
    },
    show () {
      this.animation.translateY('0%').step()
      this.setData({ visible: true, leaving: false, sheetAnimation: this.animation.export() })
    },
    hide () {
      this.animation.translateY('80%').step()
      this.setData({ leaving: true, sheetAnimation: this.animation.export() })
      clearTimeout(this.hideTimer)
      this.hideTimer = setTimeout(() => {
        this.setData({ visible: false })
      }, 300)
    },
    onSwipeEnd (deltaY) {
      if (deltaY > 60) {
        this.hide()
      }
    },
  },
}));