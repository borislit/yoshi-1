// This is a default bi loggers declaration.
// This file will be overriden on user's side on 'yoshi-flow-editor' postinall hook
// or during 'start' and 'build' commands.

export declare type OwnerLogger = any;
export declare type VisitorLogger = any;
export declare type OwnerBILoggerFactory = (
  factory: any,
) => (opts?: any) => OwnerLogger;
export declare type VisitorBILoggerFactory = (
  factory: any,
) => (opts?: any) => VisitorLogger;
