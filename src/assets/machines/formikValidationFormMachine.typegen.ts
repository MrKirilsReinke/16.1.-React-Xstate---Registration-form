
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
          "assignEmailFormInputToContext": "SUBMIT_EMAIL_ADDRESS";
"assignPhoneNumberFormInputToContext": "SUBMIT_PHONE_NUMBER";
"assignUserNameFormInputToContext": "SUBMIT_USER_NAME";
"clearContextFields": "SUBMIT_FORM_COMPLETION";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "enteringEmail" | "enteringPhoneNumber" | "enteringUserName" | "formCompletion" | "formLoaded" | "formSubmitted";
        tags: never;
      }
  