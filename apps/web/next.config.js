const withTM = require("next-transpile-modules")(["core","editor"]);

module.exports = withTM({
  reactStrictMode: true,
});
