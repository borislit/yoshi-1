import fs from 'fs-extra';
import {
  BiConfig,
  biLoggerTypesFilename,
} from 'yoshi-flow-editor-runtime/build/constants';
import biLoggerTypesTemplate from './templates/BiLoggerTypes';

export const overrideBILoggerTypes = (biConfig: BiConfig) => {
  if (biConfig?.owner || biConfig?.visitor) {
    const biLoggerEntry = biLoggerTypesTemplate({
      bi: biConfig,
    });

    if (fs.existsSync(biLoggerTypesFilename)) {
      fs.outputFileSync(biLoggerTypesFilename, biLoggerEntry);
    }
  }
};
