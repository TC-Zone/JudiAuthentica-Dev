export class CustomValidator {
  static urlPatternValidator(urlPart) {
    if (urlPart.pristine) {
      return null;
    }

    const urlPattern = /^([a-zA-Z0-9_-]){3,20}$/;

    urlPart.markAsTouched();

    if (urlPattern.test(urlPart.value)) {
      return null;
    }

    return {
      invalidUrl: true
    };
  }
}
