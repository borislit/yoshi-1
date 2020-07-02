import path from 'path';
import fs from 'fs-extra';
import resolveCwd from 'resolve-cwd';
import { FlowEditorModel, ComponentModel } from '../model';
import { getDefaultTranslations } from '../utils';
import viewerScriptEntry, {
  TemplateControllerConfig,
} from './templates/CommonViewerScriptEntry';

const viewerScriptWrapperPath =
  'yoshi-flow-editor-runtime/build/viewerScript.js';

export const toControllerMeta = (
  component: ComponentModel,
): TemplateControllerConfig => {
  return {
    controllerFileName: component.viewerControllerFileName,
    id: component.id,
    controllerId: component.controllerId,
    componentName: component.name,
    widgetType: component.type,
  };
};

export const isConfigured = (component: ComponentModel): boolean => {
  return !!component.id;
};

const viewerScriptWrapper = (
  generatedWidgetEntriesPath: string,
  model: FlowEditorModel,
) => {
  const controllersMeta: Array<TemplateControllerConfig> = model.components
    .filter(isConfigured)
    .map(toControllerMeta);

  const generatedViewerScriptEntryPath = path.join(
    generatedWidgetEntriesPath,
    'viewerScript.js',
  );

  let visitorBiLoggerPath = null;

  if (model.biConfig?.visitor) {
    visitorBiLoggerPath = resolveCwd.silent(model.biConfig.visitor);
    if (!visitorBiLoggerPath) {
      throw new Error(
        `❌ Seems like you have \`bi.visitor\` specified, but didn't install it as a dependency.
Please add it your your project: \`npm install ${model.biConfig.visitor}\` or remove bi field from \`.application.json\``,
      );
    }
  }

  const generateControllerEntryContent = viewerScriptEntry({
    viewerScriptWrapperPath,
    sentryConfig: model.sentry,
    controllersMeta,
    appName: model.appName,
    projectName: model.projectName,
    experimentsConfig: model.experimentsConfig,
    defaultTranslations: getDefaultTranslations(model),
    visitorBiLoggerPath,
    biConfig: model.biConfig,
    translationsConfig: model.translationsConfig,
    viewerEntryFileName: model.viewerEntryFileName,
  });

  fs.outputFileSync(
    generatedViewerScriptEntryPath,
    generateControllerEntryContent,
  );

  return {
    viewerScript: generatedViewerScriptEntryPath,
  };
};

export default viewerScriptWrapper;
