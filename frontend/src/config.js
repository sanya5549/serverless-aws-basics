const config = {
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-api-prod-serverlessdeploymentbucket-ly589v1ctnh1",
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://ofzep11r67.execute-api.ap-southeast-2.amazonaws.com/prod/notes",
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_57l9nvBYq",
      APP_CLIENT_ID: "7e69pn62nv705gr5lq31va592a",
      IDENTITY_POOL_ID: "ap-southeast-2:ae0b3cf3-5130-4de7-8093-898b13cf7e36",
    },
  };
  
  export default config;