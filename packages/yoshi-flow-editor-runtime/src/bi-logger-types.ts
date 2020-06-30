// This is a default bi loggers declaration.
// This file will be overriden on user's side on 'yoshi-flow-editor' postinall hook
// or during 'start' and 'build' commands.

type UnspecifiedLogger = (factory: any) => (opts?: any) => any;

export type OwnerBILogger = UnspecifiedLogger;
export type VisitorBILogger = UnspecifiedLogger;
