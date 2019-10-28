const config = {
  apiGateway: {
    REGION: process.env.REGION_API,
    URL: process.env.URL_API
  }
};

export default {
  // Add common config values here
  ...config
};
