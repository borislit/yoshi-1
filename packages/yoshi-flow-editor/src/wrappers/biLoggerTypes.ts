import fs from 'fs-extra';
import { BiConfig } from 'yoshi-flow-editor-runtime/build/constants';

import resolveCwd from 'resolve-cwd';
import importCwd from 'import-cwd';
import biLoggerTypesTemplate from './templates/BiLoggerTypes';

interface ConstantsConfig {
  biLoggerTypesFilename: string;
}

const replaceTypes = (constantsPathname: string, template: string) => {
  const resolvedDistConstants = importCwd.silent(
    constantsPathname,
  ) as ConstantsConfig;

  if (resolvedDistConstants) {
    if (fs.existsSync(resolvedDistConstants.biLoggerTypesFilename)) {
      fs.outputFileSync(resolvedDistConstants.biLoggerTypesFilename, template);
    }
  }
};

export const overrideBILoggerTypes = (biConfig: BiConfig) => {
  if (biConfig?.owner || biConfig?.visitor) {
    const template = biLoggerTypesTemplate({
      visitor: biConfig.owner ? resolveCwd.silent(biConfig.owner) : null,
      owner: biConfig.visitor ? resolveCwd.silent(biConfig.visitor) : null,
    });

    replaceTypes('yoshi-flow-editor-runtime/build/constants', template);
  }
};
