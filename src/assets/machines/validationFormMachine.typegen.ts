
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignEmailFormInputToContext": "ENTERING_EMAIL_ADDRESS";
"assignPhoneNumberFormInputToContext": "ENTERING_PHONE_NUMBER";
"assignUserNameFormInputToContext": "ENTERING_USER_NAME";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "enteringEmail" | "enteringPhoneNumber" | "enteringUserName" | "formLoaded";
        tags: never;
      }
  