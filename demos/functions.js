const connect = (cb1, cb2) => (Component) => console.log('In B');

connect(
  () => {},
  () => {}
)(App);
