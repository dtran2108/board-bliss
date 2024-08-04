import { createMachine } from "xstate";

export const todoMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmALuqrAMRoayYA2tESAG0ADAF1EoAA5tiTYqlKSQAD0QBaAIwAmACwVdmgOwBOAGwAOIwFYANCACeG4xTPbrAXw-2uWPETJKGjoGZlYOYPpSRhZuTAAzXGJeYXFlGVg5BSUkVUQLTQpNXRE3O0dnbULPL3tSdDhlXxwCEnJ02XlFZTUELSN9GwBmE1L3eyc+7RELWpBm-zaggVDYtg7MrpzQXq1tMwph0bKJyuq5hdbAil8eSMgNrO7c3Z0D9xGx8smTGp9WFoBcjUFbRMJxMAAJ0hqEh8FyGSe2xALCkGnch3KKXiTHyhSGuiMZmsJxAACNUEwWNhENptBRxiBIcQoIRcQhpvjCcTSQB3YgQJiERA6ET2QhgFlsxC6Cz2XoFCgEokkxmTdQYmxeLxAA */
  initial: "Loading todos",

  id: "Todo machine",

  states: {
    "Loading todos": {
      on: {
        "Loading todos failed": "Loading todos errors",
        "Todos loaded": "Todos Loaded"
      }
    },

    "Todos Loaded": {},
    "Loading todos errors": {}
  }
})