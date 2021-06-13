# React, React-Query, Redux-Toolkit, Typescript
It's a simple tempalte which utilize the power of React, React-query, Redux-Query, Typescript, Babel and Webpack

### Available Script

Dev
`npm run start`

Prod
`npm run build`

# API
The app consumes countries, cities, and states API created based on [json-server](https://github.com/typicode/json-server) and deployed on Heroku
API can be accessed here: https://countries-states-cities.herokuapp.com/


# App: 

The application uses various latest tools and framework in the React ecosystem, I have tried my best to create a production-grade application. Some of the tools which app uses;

[React 17](https://reactjs.org/): development library

[Typescript](https://www.typescriptlang.org/): Typed Javascript

[Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/): Bundler for Production and Development mode

[Babel](https://babeljs.io/): Compiler

[Redux-Toolkit](https://redux-toolkit.js.org/): State management library with best practices

[React-Query](): Server-side state manage library

# Deployment:
The application is deployed on my private S3 Bucket on AWS, The app is being served from a Cloudfront Distribution, which cache the complete application on the edge location, delivering a fast user experience.

# The Code

The app is divided into mainly four components 
`countries` : all the code related to rendering the country list
`cities`: all the code related to rendering the cities list
`states`: all the code related to rendering the states list
`common`: common components and utils that is used by the above components
```
├── babel.config.js
├── config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── jest.config.js
├── package-lock.json
├── package.json
├── public
│   ├── error.html
│   └── index.html
├── README.md
├── src
│   ├── App.tsx
│   ├── axiosInstance
│   │   ├── constants.ts
│   │   └── index.ts
│   ├── components
│   │   ├── cities
│   │   ├── common
│   │   ├── countries
│   │   └── states
│   ├── dux
│   │   ├── hooks.ts
│   │   ├── reducer.ts
│   │   └── store.ts
│   ├── index.tsx
│   ├── models
│   │   ├── city.ts
│   │   ├── common.ts
│   │   ├── country.ts
│   │   ├── state.ts
│   │   └── store.ts
│   ├── react-query
│   │   ├── constants.js
│   │   └── queryClient.ts
│   ├── setupTests.js
│   └── theme
│       └── theme.ts
├── tsconfig.dev.json
└── tsconfig.json
```
