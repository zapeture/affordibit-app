module.exports = {
  "./src/*": ["next lint"],
  "**/*.ts?(x)": () => "pnpm run check-types",
};
