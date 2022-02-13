module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    container: {
      center: true,
    },
    inset: {
      '1/2': '50%',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
