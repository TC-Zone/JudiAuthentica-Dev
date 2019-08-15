
/**
  * Buddhi
  * DO NOT DELETE!
  */


export class GlobalVariable {


  public validators = {
    regex: { _Letter: '^(?:[A-Za-z]+)(?:[A-Za-z _]*)$', _PosNumber: '^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$', _PosNumberAndLetter: '^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$' }
  }


  /**
    * Client License Max Limits
    */
  public client = {
    license: { tagCount: 1000000, userCount: 1000, comunityCount: 100, feedbackCount: 1000, eventCount: 1000, promoCount: 1000 }
  }

  public common = {
    matChip: {
      /**
      * Colors
      * primary / accent / warn / default
      */
      userStatusInUpdateUser: { true: "primary", false: "default" },
      clientStatus: {
        A: { status: "Active", style: "primary", opposite: { value: "Inactive", icon: "block" } },
        I: { status: "Inactive", style: "accent", opposite: { value: "Active", icon: "beenhere" } },
        D: { status: "Deleted", style: "warn", opposite: { value: "Active", icon: "beenhere" } }
      },
      userStatus: {
        ACTIVE: { code: "A", display: "ACTIVE", style: "primary" },
        INACTIVE: { code: "I", display: "INACTIVE", style: "default" },
        DELETED: { code: "D", display: "DELETED", style: "warn" },
        PENDING_ACTIVATION: { code: "PEA", display: "PENDING", style: "default" },
        TEMP_LOCKED_BAD_CREDENTIALS: { code: "TELBC", display: "LOCKED", style: "accent" }
      },
      colorForStatus01: {
        'ACTIVE': "primary",
        'INACTIVE': "default"
      },
      colorForSurveyStatus01: {
        0: { id: 0, status: "On Premise", style: "accent" },
        1: { id: 1, status: "Launched", style: "primary" },
        4: { id: 4, status: "Offline", style: "default" }
      },
      confirmPasswordStatus: {
        // false : { id: 0, value: "Passwords do not match!", style: "primary" },
        false: { id: 0, value: "Passwords Mismatch!", style: "custom-text-red" },
        true: { id: 1, value: "Password Matches!", style: "custom-text-green" }
      },
    }

  }


}
