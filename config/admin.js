module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2097309b8ba9273958c7cf50ae57d889'),
  },
});
