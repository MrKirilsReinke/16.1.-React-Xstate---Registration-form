
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
          "assignValuesToContext": "SUBMIT_CONTACT_INFO";
"clearContext": "GO_BACK" | "SUBMIT_FORM_COMPLETION";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "enteringContactInfo" | "enteringContactInfo.active" | "enteringEmail" | "enteringEmail.active" | "enteringPersonalInfo" | "enteringPersonalInfo.active" | "formCompletion" | "formSubmitted" | { "enteringContactInfo"?: "active";
"enteringEmail"?: "active";
"enteringPersonalInfo"?: "active"; };
        tags: never;
      }
  