import { createContext } from 'react';
import { OwnerBILogger, VisitorBILogger } from '../../bi-logger-types';

export type IBILoggerContext =
  | ReturnType<ReturnType<typeof OwnerBILogger>>
  | ReturnType<ReturnType<typeof VisitorBILogger>>;
export const BILoggerContext: React.Context<IBILoggerContext> = createContext<
  IBILoggerContext
>({} as IBILoggerContext);
