---
id: app-configuration
title: App Configuration Level
sidebar_label: App Configuration Level
---

## App configuration
### `.application.json`
Each app should contain `.application.json`:
```
{
  "appDefinitionId": "YOUR_APP_DEFINITION_ID",
  "appName": "Your app name",
  "sentry": {
    DSN: "https://e255c968aa1143f08fc02e9243b66136@o283065.ingest.sentry.io/1510555",
    id: "SENTRY_ID",
    teamName: "some-team",
    projectName: "some-project"
  },
  "experiments": {
    "scope": "test"
  }
}
```
The content will be auto-generated by `create-yoshi-app`.
- `appDefinitionId` - App definition id of you app in app service.
- `appName` - App's name in app service.
- `sentry` - Automatically configured object according to the `team name` you've selected. `projectName` will be the same as an app's artifact name.
- `experiments`: Configuration object for current experiments scope. After generation it's mocked with `test` scope, which should be updated or removed before publishing app to production.