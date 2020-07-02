#!/usr/bin/env node

import importCwd from 'import-cwd';
import { AppConfig } from '../model';
import { overrideBILoggerTypes } from '../wrappers/biLoggerTypes';

const appConfig = importCwd.silent('.application.json') as AppConfig;

if (appConfig && appConfig.bi) {
  overrideBILoggerTypes(appConfig.bi);
}
