// errors exports
export * from "./errors/bad-request-error";
export * from "./errors/custom-error";
export * from "./errors/database-connection-error";
export * from "./errors/not-authorized-error";
export * from "./errors/not-found-error";
export * from "./errors/request-validation-error";

// middlewares exports
export * from "./middlewares/current-user";
export * from "./middlewares/error-handler";
export * from "./middlewares/require-auth";
export * from "./middlewares/validate-request";

// This will allow users to use @ticketing/common without having to
// specify the path to the file. For example, they can just do:
// import { currentUser } from "@ticketing/common";
