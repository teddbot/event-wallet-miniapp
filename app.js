App({
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    console.log('on Show');
    // Reopened by scheme from the background
  },
});
