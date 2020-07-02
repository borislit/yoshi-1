// from an object of promises to a promise of an object
export function objectPromiseAll(target: Record<string, any>) {
  return Object.keys(target).reduce(async (acc, key) => {
    const obj = await acc;

    return {
      ...obj,
      [key.replace('Promise', '')]: await target[key],
    };
  }, Promise.resolve({}));
}

export const getQueryParams = (
  search = window.location.search,
): URLSearchParams => {
  return new URLSearchParams(search);
};

export * from './createInstances';
export * from './fetchExperiments';

export const loadScript = (scriptSrc: string) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = false;
    script.onload = resolve;

    document.body.appendChild(script);
  });

interface IEditorParams {
  editorSDKSrc: string | null;
  componentId: string | null;
}

const viewerModeEditorParams: IEditorParams = {
  editorSDKSrc: null,
  componentId: null,
};

const warnInDevelopment = (msg: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(msg);
  }
};

export const getEditorParams = (): IEditorParams => {
  // We don't use it in viewer environment anywhere now, but since it's a public function,
  // we should prevent runtime errors and follow SDK render prop logic, where values is `null` in viwer mode.
  if (!isEditor()) {
    warnInDevelopment(
      "You are using getEditorParams in viewer environment. Please, remove it from your Widget, since it is useful only for platform's Settings Panel component",
    );
    return viewerModeEditorParams;
  }
  const queryParams: URLSearchParams = getQueryParams();
  return {
    editorSDKSrc: queryParams.get('wix-sdk-version'),
    componentId: queryParams.get('componentId'),
  };
};

export const isEditor = (): boolean => {
  // We are checking SSR and CSR cases
  return typeof window !== 'undefined' && !!window.__EDITOR_MODE__;
};

const dataCallback = (data: any) => data;

export const buildSentryOptions = (
  dsn: string,
  environment: string,
  artifact: string,
  withDataCallback?: boolean,
) => {
  return {
    dsn,
    config: {
      // This function will be never called if sentry is not enabled
      enabled: true,
      release: artifact,
      dataCallback: withDataCallback ? dataCallback : undefined,
      environment,
    },
  };
};

export const getArtifact = () => {
  return (window as any).__CI_APP_VERSION__;
};

const METHOD_PREFIX = '__BI_METHOD__';
const UTIL_PREFIX = '__BI_UTIL__';

export const serializeBILogger = (logger: any) => {
  const total: Record<string, any> = {};
  for (const key in logger) {
    if (typeof logger[key] === 'function') {
      total[`${METHOD_PREFIX}${key}`] = logger[key].bind(logger);
    } else if (key === 'util') {
      if (typeof logger.util.updateDefaults === 'function') {
        total[`${UTIL_PREFIX}updateDefaults`] = logger.util.updateDefaults.bind(
          logger,
        );
      } else if (typeof logger.util.log === 'function') {
        total[`${UTIL_PREFIX}log`] = logger.util.log.bind(logger);
      }
    }
  }
  return total;
};

export const ejectBIEventsFromProps = (props: Record<string, any>) => {
  return Object.keys(props).reduce<{
    userProps: Record<string, any>;
    biEvents: any;
  }>(
    (total, key) => {
      if (key.includes(METHOD_PREFIX)) {
        const methodName = key.replace(METHOD_PREFIX, '');
        total.biEvents[methodName] = props[key];
      } else if (key.includes(UTIL_PREFIX)) {
        const utilName = key.replace(UTIL_PREFIX, '');
        if (!total.biEvents.util) {
          total.biEvents.util = {};
        }
        total.biEvents.util[utilName] = props[key];
      } else {
        total.userProps[key] = props[key];
      }
      return total;
    },
    { userProps: {}, biEvents: {} },
  );
};
