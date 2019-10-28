const config = {
  apiGateway: {
    REGION: process.env.REACT_APP_API_REGION,
    URL: process.env.REACT_APP_API_URL
  }
};

export default {
  // Add common config values here
  ...config
};
