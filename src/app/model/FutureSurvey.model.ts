// DTO class for FutureSurvey Creation and Update Request
export class FutureSurveyRequest {
    constructor(
        public jsonContent: String,
        public title: string,
        public clientId: string,
        public languageJson: string,
        public pages: any[]
    ) { }
}

export enum ChoiceTypeEnum {
    DROP_DOWN = "dropdown",
    RADIO_GROUP = "radiogroup",
    IMAGE_PICKER = "imagepicker",
    CHECKBOX = "checkbox"
}

export enum MatrixTypeEnum {
    MATRIX = "matrix",
    MATRIX_DROPDOWN = "matrixdropdown",
    MATRIX_DYNAMIC = "matrixdynamic"
}

// DTO class for FutureSurvey Supported Language Wrapper
export class LangJsonWrapper {
    constructor(public def, public extra: any) { }
}

// DTO class for FutureSurvey Supported Language Wrapper
export class ValidateLocalizeSurveyRequestWrapper {
    constructor(public validateLocalizeSurveyRequest, public surveyLang: LangJsonWrapper) { }
}

// DTO class for FutureSurvey Default Language Wrapper :YRS
export class DefaultLangWrapper {
    constructor(public def: string) { }
}

// DTO class for FutureSurvey Config Popup
export class JsonContentPart {
    constructor(public locale, public title, public clientId, public pages: any) { }
}

// DTO class for FutureSurvey Invitation Dashboard
export class InvitationTemplate {
    constructor(public name, public username, public email) { }
}

// DTO class for FutureSurvey Invitee Group
export class InvitationRequest {
    constructor(public groupName, public customField: any[], public endDate: String) { }
}

// DTO class for FutureSurvey Launch
export class Invitee {
    constructor(
        public name,
        public email: string,
        public username: string,
        public password: string,
        public customField1: string,
        public customField2: string,
        public customField3: string
    ) { }
}

export class ValidateRequest {
    constructor(public correctSet, public errorSet: any[]) { }
}

export class CustomField {
    constructor(public fieldName, public displayName: string) { }
}

export class InviteRequest {
    constructor(
        public futureSurveyId: string,
        public startDate: string,
        public endDate: string,
        public inviteeGroupName: string,
        public passwordStrategy: string,
        public customFields: any[],
        public invitees: any[],
        public publishURL: string,
    ) { }
}

// DTO class for FutureSurvey View
export class ValueTemplate {
    constructor(public value: any) { }
}

export class MatrixBaseTemplate {
    constructor(public rowValue, public columnValue: any) { }
}


export interface surveyLanguage {
    id: string;
    code: string;
    name: string;
  }
