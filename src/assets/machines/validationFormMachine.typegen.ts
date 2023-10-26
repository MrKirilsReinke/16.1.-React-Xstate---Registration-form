
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "error.platform.validationFormMachine.Loading form:invocation[0]": { type: "error.platform.validationFormMachine.Loading form:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "loadForm": "done.invoke.validationFormMachine.Loading form:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: "loadForm";
        };
        eventsCausingActions: {
          "assignErrorToContext": "error.platform.validationFormMachine.Loading form:invocation[0]";
"assignUserNameFormInputToContext": "Username Input changed";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "loadForm": "xstate.init";
        };
        matchesStates: "Creating new username" | "Creating new username.Showing username form input" | "Form loaded" | "Form loading errored" | "Loading form" | { "Creating new username"?: "Showing username form input"; };
        tags: never;
      }
  