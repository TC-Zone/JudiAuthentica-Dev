export class GlobalVariable {


  public validators = {
    regex: { _Letter: '^(?:[A-Za-z]+)(?:[A-Za-z _]*)$', _PosNumber: '^[+]?([1-9]+(?:[0-9]*)?|\.[0-9]+)$', _PosNumberAndLetter: '^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$' }
  }

  public client = {
    license: { tagCount: 1000000, userCount: 1000, comunityCount: 100, feedbackCount: 1000, eventCount: 1000, promoCount: 1000 }
  }


}


