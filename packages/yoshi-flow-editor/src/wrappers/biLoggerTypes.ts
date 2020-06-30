import fs from 'fs-extra';
import {
  BiConfig,
  biLoggerTypesFilename,
} from 'yoshi-flow-editor-runtime/build/constants';

import resolveCwd from 'resolve-cwd';
import biLoggerTypesTemplate from './templates/BiLoggerTypes';

export const overrideBILoggerTypes = (biConfig: BiConfig) => {
  if (biConfig?.owner || biConfig?.visitor) {
    const biLoggerEntry = biLoggerTypesTemplate({
      visitor: biConfig.owner ? resolveCwd.silent(biConfig.owner) : null,
      owner: biConfig.visitor ? resolveCwd.silent(biConfig.visitor) : null,
    });

    if (fs.existsSync(biLoggerTypesFilename)) {
      fs.outputFileSync(biLoggerTypesFilename, biLoggerEntry);
    }
  }
};
