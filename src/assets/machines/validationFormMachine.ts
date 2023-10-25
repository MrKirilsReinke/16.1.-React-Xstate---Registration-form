import { createMachine } from 'xstate';

const validationFormMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDcCGAbAlhVAXTA9gHYBiBATgLYCyqAxgBaZFgB0AMgahM1AAQAzCpQDEEYm2bICAazZosOfMTJVajZm07deg4QikE6eQkQDaABgC6lq4lAAHArEzKi9kAA9EAWgCMAMx+rADsAEwAbACsfgCcsRYRERZRACwRADQgAJ6IYQAc+axhYVEBUWEWsVER8SEAvvVZCtgmKsLqTCwcXDxE-EJUImDk5BSsDuh4g5SsLUqmqjT0XVq9ujMGRNLGbra2Hk4ubh7eCD5BRWEBtfmpqSGBsXdZuQgBlawBIRYBFnF+H75GqNZoYVpuJadTSsJZ8dC9SAiADC5DAeDAfBYAHc+ABXWAjIioShgA5IEBHVymU55AKpVipQohaLPKIpdKvPL5CKsCIsvxhcIRVIBAL5EIBRpNEBEAgQOAeeZtUgdFaaQ7OanEWnnVJhYJ+KpRYHXPwm81chBGsKsCWlG6VKKxb5+PygkDKyFqjTdbR9AbCTXHGkUs4XEV82IFX7O0U8vxWuIWVhxNKpWI-e4xfUer2LH2rWHCeGIiDB7XuMOIEJFCJCjMfCz5AIu+JWgq8j6Su5JR7xPPghbtNTq7qo9H4fr4wnkYmkisnasIRusTPs2OC+53VIdnlfIXi9L8uL5WKpQeKFVQsdsOEInTTkZjNHlilUpegcPfAKp42moILSiK1Ul+O0SgSFtwhiMppXqIA */
  id: 'validationFormMachine',
  predictableActionArguments: true,
  preserveActionOrder: true,
  initial: 'Loading form',
  schema: {
    events: {} as
      | { type: 'Form loaded' }
      | { type: 'Form loading failed' }
      | { type: 'Create new username' }
  },
  tsTypes: {} as import('./validationFormMachine.typegen').Typegen0,
  states: {
    'Loading form': {
      invoke: {
        src: 'loadForm',
        onDone: {
          target: ['Form loaded']
        },
        onError: {
          target: ['Form loading errored']
        }
      }
    },
    'Form loaded': {
      on: {
        'Create new username': {
          target: ['Creating username']
        }
      }
    },
    'Creating username': {},
    'Form loading errored': {}
  }
});

export default validationFormMachine;
