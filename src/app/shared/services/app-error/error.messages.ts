export const errorMessages = {
  name : {
    answerTemplateCreateRequestNameDuplicate : 'Answer Name is Duplicated.'
  },
  answerTemplate : {
    answerTemplateUpdateRequestAnswerTemplateNotExist : 'Answer Template is not Found.',
    answerTemplateDeleteRequestAnswerTemplateNotExist : 'Answer Template is not Found.'
  },
  votersZero : {
    eVoteCreateRequestEVoteVotersNotExists : 'Evote Voters are not Found.'
  },
  eVote : {
    eVoteViewRequestEVoteNotExist : 'Evote is not Found.',
    eVoteUpdateRequestEVoteNotExist : 'Evote is not Found.',
    eVoteDeleteRequestEVoteNotExist : 'Evote is not Found.',
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
    futureSurveyAnswerRequestQuestionElementDoesNotExists : 'Question Element is not Found.'
  },
  futureSurvey : {
    updateConfigErrorConfigUpdate : 'Error Configure Update.',
    futureSurveytUpdateRequestFutureSurveyNotExist : 'Survey is not Exist.',
    futureSurveyDeleteRequestFutureSurveyNotExist : 'Survey is not Exist.',
    futureSurveyViewFutureSurveyNotExist : 'Survey is not Exist.',
    futureSurveyViewInvalidId : 'Invalid Survey Id.'

  },
  futureSurveyInteraction : {
    interactionViewInteractionDoesNotExists : 'Interaction is not Found.',
    updateErrorWhenUpdate : 'Can not Update at this Time.',
    interactLoginCouldNotFindrecord : 'Record is not Found.',
    interactLoginPostCouldNotFindRecord : 'Record is not Found.',
    deleteInteractionBySurvey : 'Can not Delete at this Time.'
  },
  interaction : {
    fetchAllInteractionsInteractionsNotExists : 'Interaction is not Exist.',
    fetchGroupByClientIdGroupsNotExists : 'Groups are not Exists.',
    getAssignedInviteesGroupDetailsDoesNotExists : 'Group Details are not Exist.'
  },
  inviteeGroup : {
    findGroupByIdInviteeGroupNotExist : 'Invitee Group is not Exist.'
  },
  question : {
    questionViewRequestQuestionNotExist : 'Question is not Exist.',
    questionUpdateRequestQuestionNotExist : 'Question is not Exist.',
    questionDeleteRequestQuestionNotExist : 'Question is not Exist.'
  },
  survey : {
    surveyUpdateRequestSurveyNotExist : 'Survey is not Exist.',
    EVoteCreateRequestSurveyInvalid : 'Invalid Survey.',
    surveyViewRequestSurveyNotExist : 'Survey is not Exist.'
  },
  client : {
    EVoteCreateRequestClientEmpty : 'Invalid Client.',
    EVoteCreateRequestClientInvalid : 'Invalid Client.',
    EVoteRequestClientEmpty : 'Invalid Client.',
    EVoteUpdateRequestClientEmpty : 'Invalid Client.',
    productsCreateRequestClientInvalid : 'Invalid Client.',
    clientViewRequestClientNotExist : 'Client is not Exist.',
    clientUpdateRequestClientNotExist : 'Client is not Exist.',
    clientDeleteRequestClientNotExist : 'Client is not Exist.',
    productCreateRequestClientNotExist : 'Client is not Exist.'
  },
  answer : {
    platformAnswerSubmitRequestAnswerAlreadyExpired : 'Answers Expired.'
  },
  surveyId : {
    productsCreateRequestSurveyIdInvalid : 'Invalid Survey.'
  },
  product : {
    productViewRequestProductNotExist : 'Product is not Exist.',
    productUpdateRequestProductNotExist : 'Product is not Exist.'
  },
  product_image : {
    productImageRetrieveProducImageNotExists : 'Product Image is not Exist.'
  },
  authority : {
    createAuthorityPersistError : 'Authority is not created.'
  },
  email : {
    companyCreateRequestUserEmailDuplicate : 'Email allready exists.',
    platformUserCreateRequestEmailDuplicate : 'Email allready exists.',
    platformUserUpdateRequestEmailDuplicate : 'Email allready exists.'
  },
  license : {
    licenseViewLicenseNotExist : 'License is not exists.',
    licenseViewLicenseViewError : 'License view error.'
  },
  download : {
    imageByteNullContext : 'Image is not exists.',
    imageByteContextNotExists : 'Image is not exists.'
  },
  role : {
    platformRoleViewRequestRoleNotExist : 'Role is not exists.',
    platformRoleUpdateRequestRoleNotExist : 'Role is not exists.',
    retrievePredefinedRoleByNameFetchError : 'Role data view error.'
  },
  user : {
    platformUserViewRequestUserNotExist : 'User is not exists.',
    platformUserUpdateRequestUserNotExist : 'User is not exists.',
    platformUserDeleteRequestUserDeleteFiledUserId : 'Unable to delete user account.',
    platformUserDeleteRequestUserNotExis : 'User is not exists.'
  },
  status : {
    platformUserUpdateRequestStatusCannotChange : 'Status can\'t change.'
  },
  activationLink : {
    userActivationRequestAlreadyActivated : 'Your account already activated.',
    userActivationRequestUserNotFound : 'User is not exists.'
  },
  community : {
    communityCreateCreateError : 'Unable to create community.',
    communityUpdateUpdateError : 'Unable to update community.',
    communityViewCommunityNotExists : 'Community is not exists.',
    getByClientFetchError : 'Community data view error.',
    communityDeleteDeleteError : 'Unable to delete community.',
    communitySearchFetchError : 'Community data search error.'
  },
  event : {
    createEventCreateError : 'Unable to create event.',
    eventUpdateUpdateError : 'Unable to update event.',
    eventViewEventNotExists : 'Event is not exists.',
    eventSearchFetchError : 'Event data search error.',
    eventDeleteRequestDeleteError : 'Unable to delete event.',
    listDeleteRequestDeleteError : 'Unable to delete event list.',
    eventsByCommunitiesFetchError : 'Event data view error.'
  },
  promotion : {
    createPromotionCreateError : 'Unable to create promotion.',
    promotionViewPromotionNotExists : 'Promotion is not exists.',
    promotionUpdatePromotionError : 'Unable to update promotion.',
    promoSearchFetchError : 'Promotion data search error.',
    promoDeleteRequestDeleteError : 'Unable to delete promotion.',
    listDeleteRequestDeleteError : 'Unable to delete promotion list.',
    promosByCommunitiesFetchError : 'Promotion data view error.'
  }
};
