export const errorMessages = {
  name : {
    answerTemplateCreateRequestNameDuplicate : 'Answer template name already exists!' +
      '<small class="text-muted">Name you entered for the answer template already exists. Give a different name.</small>'
  },
  answerTemplate : {
    answerTemplateUpdateRequestAnswerTemplateNotExist : 'Answer Template does not exist!',
    answerTemplateDeleteRequestAnswerTemplateNotExist : 'Answer Template does not exist!'
  },
  votersZero : {
    eVoteCreateRequestEVoteVotersNotExists : 'E-voters not found!' +
      '<small class="text-muted">Please create E-voters before creating an E-vote.</small>'
  },
  eVote : {
    eVoteViewRequestEVoteNotExist : 'E-vote does not exist!',
    eVoteUpdateRequestEVoteNotExist : 'E-vote does not exist!',
    eVoteDeleteRequestEVoteNotExist : 'E-vote does not exist!',
    eVoteCreateRequestCanNotStoreFile : 'Canot Store File.',
    eVoteUpdateRequestCanNotStoreFile : 'Canot Store File.'
  },
  evote_image : {
    evoteImageRetrieveEvoteImageNotExists : 'Image is not Found.'
  },
  imageName : {
    ProductCreateRequestImageNameAlreadyExist : 'Image Name All Ready Exist.'
  },
  element : {
    futureSurveyAnswerRequestQuestionElementDoesNotExists : 'Question Element could not Found!'
  },
  futureSurvey : {
    updateConfigErrorConfigUpdate : 'Error Configure Update.',
    futureSurveytUpdateRequestFutureSurveyNotExist : 'Survey does not exist!',
    futureSurveyDeleteRequestFutureSurveyNotExist : 'Survey does not exist!',
    futureSurveyViewFutureSurveyNotExist : 'Survey does not exist!',
    futureSurveyViewInvalidId : 'Invalid Survey Id!'

  },
  futureSurveyInteraction : {
    interactionViewInteractionDoesNotExists : '"filename" not Found!',
    updateErrorWhenUpdate : 'Could not updated!',
    interactLoginCouldNotFindrecord : '"filename" not Found!',
    interactLoginPostCouldNotFindRecord : '"filename" not Found!',
    deleteInteractionBySurvey : 'The record cannot be deleted!'
  },
  invitation : {
    publishURLduplicate : 'Publish URL is already used!'
  },
  interaction : {
    fetchAllInteractionsInteractionsNotExists : 'Interaction does not exist!',
    fetchGroupByClientIdGroupsNotExists : 'Group does not exist!',
    getAssignedInviteesGroupDetailsDoesNotExists : 'Can not retrieve group details!'
  },
  inviteeGroup : {
    findGroupByIdInviteeGroupNotExist : 'Invitee Group does not exist!'
  },
  question : {
    questionViewRequestQuestionNotExist : 'Question does not exist!',
    questionUpdateRequestQuestionNotExist : 'Question does not exist!',
    questionDeleteRequestQuestionNotExist : 'Question does not exist!'
  },
  survey : {
    surveyUpdateRequestSurveyNotExist : 'Survey does not exist!',
    EVoteCreateRequestSurveyInvalid : 'Invalid Survey.',
    surveyViewRequestSurveyNotExist : 'Survey does not exist!'
  },
  client : {
    EVoteCreateRequestClientEmpty : 'Invalid Client!',
    EVoteCreateRequestClientInvalid : 'Invalid Client!',
    EVoteRequestClientEmpty : 'Invalid Client!',
    EVoteUpdateRequestClientEmpty : 'Invalid Client!',
    productsCreateRequestClientInvalid : 'Invalid Client!',
    clientViewRequestClientNotExist : 'Client does not exist!',
    clientUpdateRequestClientNotExist : 'Client does not exist!',
    clientDeleteRequestClientNotExist : 'Client does not exist!',
    productCreateRequestClientNotExist : 'Client does not exist!'
  },
  answer : {
    platformAnswerSubmitRequestAnswerAlreadyExpired : 'Answers Expired.'
  },
  surveyId : {
    productsCreateRequestSurveyIdInvalid : 'Invalid Survey Id!'
  },
  product : {
    productViewRequestProductNotExist : 'Product does not exist!',
    productUpdateRequestProductNotExist : 'Product does not exist!'
  },
  product_image : {
    productImageRetrieveProducImageNotExists : 'Product Image does not exist!'
  },
  authority : {
    createAuthorityPersistError : 'Authority is not created.'
  },
  email : {
    companyCreateRequestUserEmailDuplicate : 'Email is already in use!',
    platformUserCreateRequestEmailDuplicate : 'Email is already in use!',
    platformUserUpdateRequestEmailDuplicate : 'Email is already in use!'
  },
  license : {
    licenseViewLicenseNotExist : 'License does not exist!',
    licenseViewLicenseViewError : 'License view error.'
  },
  download : {
    imageByteNullContext : 'Image does not exist!',
    imageByteContextNotExists : 'Image does not exist!'
  },
  role : {
    platformRoleViewRequestRoleNotExist : 'Role does not exist!',
    platformRoleUpdateRequestRoleNotExist : 'Role does not exist!',
    retrievePredefinedRoleByNameFetchError : 'Role data view error.'
  },
  user : {
    platformUserViewRequestUserNotExist : 'User does not exist!',
    platformUserUpdateRequestUserNotExist : 'User does not exist!',
    platformUserDeleteRequestUserDeleteFiledUserId : 'Could not delete user account!',
    platformUserDeleteRequestUserNotExis : 'User does not exist!'
  },
  status : {
    platformUserUpdateRequestStatusCannotChange : 'You cannot change status! / The action cannot be completed!'
  },
  activationLink : {
    userActivationRequestAlreadyActivated : 'Your account is already activated!',
    userActivationRequestUserNotFound : 'User does not exist!'
  },
  community : {
    communityCreateCreateError : 'System cannot create community!',
    communityUpdateUpdateError : 'System cannot update community!',
    communityViewCommunityNotExists : 'Community does not exist!',
    getByClientFetchError : 'Community data view error.',
    communityDeleteDeleteError : 'Could not delete community!',
    communitySearchFetchError : 'Cannot retrieve searched record!'
  },
  event : {
    createEventCreateError : 'System cannot create event!',
    eventUpdateUpdateError : 'System cannot update event!',
    eventViewEventNotExists : 'Event does not exist!',
    eventSearchFetchError : 'Cannot retrieve searched record!',
    eventDeleteRequestDeleteError : 'Unable to delete event.',
    listDeleteRequestDeleteError : 'Unable to delete event list.',
    eventsByCommunitiesFetchError : 'Event data view error.'
  },
  promotion : {
    createPromotionCreateError : 'Unable to create promotion.',
    promotionViewPromotionNotExists : 'Promotion does not exist!',
    promotionUpdatePromotionError : 'Unable to update promotion.',
    promoSearchFetchError : 'Promotion data search error.',
    promoDeleteRequestDeleteError : 'Unable to delete promotion.',
    listDeleteRequestDeleteError : 'Unable to delete promotion list.',
    promosByCommunitiesFetchError : 'Promotion data view error.'
  },
  commonFile : {
    fileUploadAwsError : 'Unable to Upload  File : Service Provider occurred error',
    fileUploadSdkError : 'Unable to Upload  File : Service Provider occurred error',
    readFileStrAwsError : 'Unable to Upload  File : Service Provider occurred error',
    readFileStrSdkError : 'Unable to Upload  File : Service Provider occurred error',
    deleteFileAwsError : 'Unable to Upload  File : Service Provider occurred error',
    deleteFileSdkError : 'Unable to Upload  File : Service Provider occurred error',
    b64ImageUploadAwsError : 'Unable to Upload  File : Service Provider occurred error',
    b64ImageUploadSdkError : 'Unable to Upload  File : Service Provider occurred error',
    commonImgDownloadIoError : 'Unable to Upload  File : Service Provider occurred error',
    commonImgDownloadAwsError : 'Unable to Upload  File : Service Provider occurred error',
    commonImgDownloadSdkError : 'Unable to Upload  File : Service Provider occurred error',
    convertByteToString : 'Unable to Upload  File : Service Provider occurred error',
    writeContentUnsupportedEncode : 'Unable to Upload  File : Service Provider occurred error',
    writeContentIoError : 'Unable to Upload  File : Service Provider occurred error',
    writeContentWriteError : 'Unable to Upload  File : Service Provider occurred error'
  }
};
