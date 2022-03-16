Page({
  data: {},
  onLoad() {},
  saveSheetRef(ref) {
    this.sheetRef = ref
  },
  openSheet() {
    this.sheetRef.show()
  },
  closeSheet() {
    this.sheetRef.hide()
  },
  saveSheetRoundedRef(ref) {
    this.sheetRoundedRef = ref
  },
  openSheetRounded() {
    this.sheetRoundedRef.show()
  },
  closeSheetRounded() {
    this.sheetRoundedRef.hide()
  },
  saveSheet2Ref(ref) {
    this.sheet2Ref = ref
  },
  openSheet2() {
    this.sheet2Ref.show()
  },
  closeSheet2() {
    this.sheet2Ref.hide()
  },
  saveSheetSwipeRef(ref) {
    this.sheetSwipeRef = ref
  },
  openSheetSwipe() {
    this.sheetSwipeRef.show()
  },
  closeSheetSwipe() {
    this.sheetSwipeRef.hide()
  }
});
