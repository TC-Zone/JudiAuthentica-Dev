
/**
* BUDDHI
* DO NOT DELETE!
*/

export class GlobalVariable {
  /**
  * Regex Validators
  */
  public validators = {
    regex: {
      _UserName: /^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9@._-]*)$/,
      _Letter: /^(?:[A-Za-z]+)(?:[A-Za-z ]*)$/,
      _PosNumber: /^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$/, // POS NUM ONLY
      _PosNumberAndLetter: /^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$/,
      _Password: /^(?=(.*[a-zA-Z].*))((?=.*\d.*)|(?=.*[$@$!%*?&].*))[a-zA-Z\d$@$!%*?&\S]{8,20}/,
      _Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      _YoutubeId: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\/)|(\?v=|\&v=))([^#\&\?]*).*/
    }
  }

  /**
  * Client License Max Limits
  */
  public client = {
    license: {
      tagCount: { min: 0, max: 1000000 },
      userCount: { min: 0, max: 1000 },
      comunityCount: { min: 1, max: 100 },
      feedbackCount: { min: 0, max: 1000 },
      eventCount: { min: 0, max: 1000 },
      promoCount: { min: 0, max: 1000 }
    }
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
      }
    },
    message: {
      confirmPasswordStatus: {
        1: { value: "Use 8 or more characters with a mix of letters, numbers & symbols!", style: "custom-text-warn" },
        2: { value: "Those passwords didn't match. Try again!", style: "custom-text-warn" }
      },
      formInput: {
        // Google MSG - SAMPLE
        // Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed!
        lettersOnly: {
          Msg: { value: "Only letters are allowed!", style: "custom-text-warn" },
          Error: { value: "Numbers and special characters are not allowed!", style: "custom-text-warn" }
        },
        numbersOnly: {
          Msg: { value: "Only numbers are allowed!", style: "custom-text-warn" },
          Error: { value: "Letters and special characters are not allowed!", style: "custom-text-warn" }
        },
        numbersAndLettersOnly: {
          Msg: { value: "Only numbers and letters are allowed!", style: "custom-text-warn" },
          Error: { value: "Special characters are not allowed!", style: "custom-text-warn" }
        },
        userName: {
          Msg: { value: "!", style: "custom-text-warn" },
          Error: { value: "Invalid username!", style: "custom-text-warn" }
        },
        custom: {
          userStatusError: { value: "Number of user accounts you subscribed has exceeded. If you need to active this user account, you have to delete another account!", style: "custom-text-warn" }
        }
      }
    },
    pageSize: {
      Option1: [10, 20, 30]
    }

  }

  // public component : {
  //   view : {
  //   }
  // }


}
