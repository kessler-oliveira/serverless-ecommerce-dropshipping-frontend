const dev = {
  apiGateway: {
    REGION: process.env.REGION,
    URL: process.env.URL
  }
};

const prod = {
  apiGateway: {
    REGION: process.env.REGION,
    URL: process.env.URL
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  ...config
};
