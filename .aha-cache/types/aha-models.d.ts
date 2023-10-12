declare namespace Aha {
  type CapacityEstimateInterface = Epic | Feature | Initiative | Requirement;
  type CardLayoutInterface =
    | Bookmark
    | BookmarksEpicPriorityList
    | BookmarksFeaturePriorityList
    | BookmarksInitiativePriorityList
    | BookmarksProgramBoard
    | BookmarksWorkflowBoard
    | ProjectConfiguration;
  type CommentableInterface =
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Iteration
    | ProgramIncrement
    | Project
    | Release
    | ReleasePhase
    | Requirement
    | Task;
  type CreatedByUserInterface =
    | Epic
    | Feature
    | Goal
    | Initiative
    | NoteTemplate
    | Requirement
    | Task;
  type CustomFieldValuesInterface =
    | Epic
    | Feature
    | Idea
    | Initiative
    | Project
    | Release
    | Requirement;
  type DescriptionInterface =
    | Epic
    | Feature
    | Idea
    | Initiative
    | Iteration
    | NoteTemplate
    | Page
    | ProgramIncrement
    | Project
    | Requirement
    | ScoringSystemMetric;
  type EpochInterface = Goal | Initiative;
  type ExtensionFieldsInterface =
    | Account
    | Epic
    | Feature
    | Project
    | Release
    | Requirement
    | User;
  type ProgressInterface =
    | Epic
    | Feature
    | Initiative
    | Iteration
    | ProgramIncrement
    | Release
    | ReleasePhase;
  type RecordLinkInterface =
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Release
    | Requirement;
  type RecordPositionInterface =
    | Epic
    | Feature
    | Idea
    | Initiative
    | Requirement;
  type ReferenceInterface =
    | Epic
    | Feature
    | Idea
    | Page
    | ProgramIncrement
    | Release
    | Requirement;
  type ResourcePermissionsInterface =
    | Attachment
    | Bookmark
    | Comment
    | CustomFieldDefinition
    | CustomFieldValue
    | Epic
    | Epoch
    | Extension
    | ExtensionContribution
    | ExtensionField
    | ExtensionLog
    | Feature
    | Goal
    | Idea
    | IdeaCategory
    | Initiative
    | Iteration
    | Note
    | NoteTemplate
    | Page
    | ProgramIncrement
    | ProgramIncrementIteration
    | Project
    | ProjectTemplate
    | RecordLink
    | Release
    | ReleasePhase
    | Requirement
    | ScoringSystemMetric
    | ScreenDefinition
    | Tag
    | Task
    | TaskUser
    | User
    | Whiteboard
    | Workflow
    | WorkflowKind
    | WorkflowStatus;
  type RiskFactorsInterface = Epic | Feature | Requirement;
  type ScorableInterface = Epic | Feature | Idea | Initiative;
  type SidebarSettingsInterface =
    | Bookmark
    | BookmarksProgramBoard
    | BookmarksWorkflowBoard;
  type TagsInterface = Epic | Feature | Idea | Requirement;
  type TaskableInterface =
    | Epic
    | Feature
    | Idea
    | Iteration
    | NoteTemplate
    | Page
    | Release
    | Requirement;
  type TeamAssignableInterface = Epic | Feature | Requirement;
  type TerminologyInterface =
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Iteration
    | ProgramIncrement
    | Project
    | Release
    | ReleasePhase
    | Requirement
    | Task;
  type TimestampsInterface =
    | Account
    | AiRequest
    | Attachment
    | Bookmark
    | Comment
    | ConnectedPage
    | CustomFieldValue
    | Epic
    | Epoch
    | Extension
    | ExtensionContribution
    | ExtensionField
    | ExtensionInvocation
    | ExtensionLog
    | Feature
    | Goal
    | Idea
    | IdeaCategory
    | Initiative
    | Iteration
    | NoteTemplate
    | Notification
    | Page
    | PageShareLink
    | ProgramIncrement
    | ProgramIncrementIteration
    | Project
    | ProjectConfiguration
    | ProjectRisksConfiguration
    | ProjectTemplate
    | RecordEventRaw
    | RecordLink
    | Release
    | ReleasePhase
    | Requirement
    | SharedPage
    | Task
    | TaskUser
    | User
    | Workflow
    | WorkflowKind
    | WorkflowStatus;
  type UserAssignableInterface =
    | Epic
    | Feature
    | Idea
    | Initiative
    | Requirement;
  type WatchableInterface =
    | Epic
    | Feature
    | Initiative
    | NoteTemplate
    | Page
    | Release;
  type AttachmentSubjectUnion = Note;
  type CommentableSubjectUnion =
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Iteration
    | ProgramIncrement
    | Project
    | Release
    | ReleasePhase
    | Requirement
    | Task
    | Unimplemented;
  type CustomFieldValueRecordSubjectUnion =
    | Epic
    | Feature
    | Idea
    | Initiative
    | Project
    | Release
    | Requirement;
  type ExtensionFieldableSubjectUnion =
    | Account
    | Epic
    | Feature
    | Project
    | Release
    | Requirement
    | User;
  type IdeaPromotableSubjectUnion =
    | Epic
    | Feature
    | Initiative
    | Requirement
    | Unimplemented;
  type LinkableRecordUnion =
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Requirement;
  type NotableSubjectUnion =
    | Attachment
    | NoteTemplate
    | Page
    | Project
    | Release;
  type NotifiableSubjectUnion =
    | Comment
    | Competitor
    | Epic
    | Feature
    | Goal
    | Idea
    | Initiative
    | Page
    | Persona
    | ProgramIncrement
    | Project
    | Release
    | Task
    | Unimplemented;
  type PrioritizableRecordUnion = Epic | Feature | Idea | Initiative;
  type RecordUnion = Epic | Feature | Requirement;
  type RecordEventSubjectUnion =
    | Epic
    | Feature
    | Iteration
    | Release
    | Requirement
    | Unimplemented;
  type TaskUserAssigneeUnion = Project | User;
  type TaskableSubjectUnion =
    | Epic
    | Feature
    | Idea
    | Iteration
    | NoteTemplate
    | Page
    | Release
    | Requirement;
  type TriggerAutomationRecordUnion = Epic | Feature | Requirement;
  type WhiteboardableSubjectUnion = Page | Unimplemented;
  type AiRequestKindEnum_WRITE = 'WRITE';
  type AiRequestKindEnum_REWRITE = 'REWRITE';
  interface AiRequestKindEnum {
    values: AiRequestKindEnum_WRITE | AiRequestKindEnum_REWRITE;
    WRITE: EnumValue<'AiRequestKindEnum', AiRequestKindEnum_WRITE>;
    REWRITE: EnumValue<'AiRequestKindEnum', AiRequestKindEnum_REWRITE>;
  }

  type AiRequestOrder_createdAt = 'createdAt';
  interface AiRequestOrder {
    values: AiRequestOrder_createdAt;
    createdAt: EnumValue<'AiRequestOrder', AiRequestOrder_createdAt>;
  }

  type AttachmentSizeEnum_MINI = 'MINI';
  type AttachmentSizeEnum_MEDIUM = 'MEDIUM';
  type AttachmentSizeEnum_ORIGINAL = 'ORIGINAL';
  interface AttachmentSizeEnum {
    values:
      | AttachmentSizeEnum_MINI
      | AttachmentSizeEnum_MEDIUM
      | AttachmentSizeEnum_ORIGINAL;
    MINI: EnumValue<'AttachmentSizeEnum', AttachmentSizeEnum_MINI>;
    MEDIUM: EnumValue<'AttachmentSizeEnum', AttachmentSizeEnum_MEDIUM>;
    ORIGINAL: EnumValue<'AttachmentSizeEnum', AttachmentSizeEnum_ORIGINAL>;
  }

  type AvatarSizeEnum_SIZE_16 = 'SIZE_16';
  type AvatarSizeEnum_SIZE_24 = 'SIZE_24';
  type AvatarSizeEnum_SIZE_32 = 'SIZE_32';
  type AvatarSizeEnum_SIZE_40 = 'SIZE_40';
  type AvatarSizeEnum_SIZE_160 = 'SIZE_160';
  interface AvatarSizeEnum {
    values:
      | AvatarSizeEnum_SIZE_16
      | AvatarSizeEnum_SIZE_24
      | AvatarSizeEnum_SIZE_32
      | AvatarSizeEnum_SIZE_40
      | AvatarSizeEnum_SIZE_160;
    SIZE_16: EnumValue<'AvatarSizeEnum', AvatarSizeEnum_SIZE_16>;
    SIZE_24: EnumValue<'AvatarSizeEnum', AvatarSizeEnum_SIZE_24>;
    SIZE_32: EnumValue<'AvatarSizeEnum', AvatarSizeEnum_SIZE_32>;
    SIZE_40: EnumValue<'AvatarSizeEnum', AvatarSizeEnum_SIZE_40>;
    SIZE_160: EnumValue<'AvatarSizeEnum', AvatarSizeEnum_SIZE_160>;
  }

  type CardFieldTypesEnum_STANDARD_FIELD = 'STANDARD_FIELD';
  type CardFieldTypesEnum_CUSTOM_FIELD = 'CUSTOM_FIELD';
  type CardFieldTypesEnum_CUSTOM_OBJECT_LINK = 'CUSTOM_OBJECT_LINK';
  interface CardFieldTypesEnum {
    values:
      | CardFieldTypesEnum_STANDARD_FIELD
      | CardFieldTypesEnum_CUSTOM_FIELD
      | CardFieldTypesEnum_CUSTOM_OBJECT_LINK;
    STANDARD_FIELD: EnumValue<
      'CardFieldTypesEnum',
      CardFieldTypesEnum_STANDARD_FIELD
    >;
    CUSTOM_FIELD: EnumValue<
      'CardFieldTypesEnum',
      CardFieldTypesEnum_CUSTOM_FIELD
    >;
    CUSTOM_OBJECT_LINK: EnumValue<
      'CardFieldTypesEnum',
      CardFieldTypesEnum_CUSTOM_OBJECT_LINK
    >;
  }

  type CardLayoutRecordTypesEnum_Epic = 'Epic';
  type CardLayoutRecordTypesEnum_Feature = 'Feature';
  type CardLayoutRecordTypesEnum_Initiative = 'Initiative';
  type CardLayoutRecordTypesEnum_Release = 'Release';
  type CardLayoutRecordTypesEnum_ReleasePhase = 'ReleasePhase';
  type CardLayoutRecordTypesEnum_Requirement = 'Requirement';
  type CardLayoutRecordTypesEnum_Task = 'Task';
  interface CardLayoutRecordTypesEnum {
    values:
      | CardLayoutRecordTypesEnum_Epic
      | CardLayoutRecordTypesEnum_Feature
      | CardLayoutRecordTypesEnum_Initiative
      | CardLayoutRecordTypesEnum_Release
      | CardLayoutRecordTypesEnum_ReleasePhase
      | CardLayoutRecordTypesEnum_Requirement
      | CardLayoutRecordTypesEnum_Task;
    Epic: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Epic
    >;
    Feature: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Feature
    >;
    Initiative: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Initiative
    >;
    Release: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Release
    >;
    ReleasePhase: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_ReleasePhase
    >;
    Requirement: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Requirement
    >;
    Task: EnumValue<
      'CardLayoutRecordTypesEnum',
      CardLayoutRecordTypesEnum_Task
    >;
  }

  type CardStylingTypesEnum_AgingRecord = 'AgingRecord';
  type CardStylingTypesEnum_SidebarStatus = 'SidebarStatus';
  type CardStylingTypesEnum_BackgroundStatus = 'BackgroundStatus';
  type CardStylingTypesEnum_NoStyling = 'NoStyling';
  interface CardStylingTypesEnum {
    values:
      | CardStylingTypesEnum_AgingRecord
      | CardStylingTypesEnum_SidebarStatus
      | CardStylingTypesEnum_BackgroundStatus
      | CardStylingTypesEnum_NoStyling;
    AgingRecord: EnumValue<
      'CardStylingTypesEnum',
      CardStylingTypesEnum_AgingRecord
    >;
    SidebarStatus: EnumValue<
      'CardStylingTypesEnum',
      CardStylingTypesEnum_SidebarStatus
    >;
    BackgroundStatus: EnumValue<
      'CardStylingTypesEnum',
      CardStylingTypesEnum_BackgroundStatus
    >;
    NoStyling: EnumValue<
      'CardStylingTypesEnum',
      CardStylingTypesEnum_NoStyling
    >;
  }

  type CommentableTypeEnum_Project = 'Project';
  type CommentableTypeEnum_Release = 'Release';
  type CommentableTypeEnum_Task = 'Task';
  type CommentableTypeEnum_Epic = 'Epic';
  type CommentableTypeEnum_Iteration = 'Iteration';
  type CommentableTypeEnum_Feature = 'Feature';
  type CommentableTypeEnum_Goal = 'Goal';
  type CommentableTypeEnum_Initiative = 'Initiative';
  type CommentableTypeEnum_Idea = 'Idea';
  type CommentableTypeEnum_ReleasePhase = 'ReleasePhase';
  type CommentableTypeEnum_Requirement = 'Requirement';
  type CommentableTypeEnum_ProgramIncrement = 'ProgramIncrement';
  interface CommentableTypeEnum {
    values:
      | CommentableTypeEnum_Project
      | CommentableTypeEnum_Release
      | CommentableTypeEnum_Task
      | CommentableTypeEnum_Epic
      | CommentableTypeEnum_Iteration
      | CommentableTypeEnum_Feature
      | CommentableTypeEnum_Goal
      | CommentableTypeEnum_Initiative
      | CommentableTypeEnum_Idea
      | CommentableTypeEnum_ReleasePhase
      | CommentableTypeEnum_Requirement
      | CommentableTypeEnum_ProgramIncrement;
    Project: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Project>;
    Release: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Release>;
    Task: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Task>;
    Epic: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Epic>;
    Iteration: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Iteration>;
    Feature: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Feature>;
    Goal: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Goal>;
    Initiative: EnumValue<
      'CommentableTypeEnum',
      CommentableTypeEnum_Initiative
    >;
    Idea: EnumValue<'CommentableTypeEnum', CommentableTypeEnum_Idea>;
    ReleasePhase: EnumValue<
      'CommentableTypeEnum',
      CommentableTypeEnum_ReleasePhase
    >;
    Requirement: EnumValue<
      'CommentableTypeEnum',
      CommentableTypeEnum_Requirement
    >;
    ProgramIncrement: EnumValue<
      'CommentableTypeEnum',
      CommentableTypeEnum_ProgramIncrement
    >;
  }

  type CustomFieldDefinitionTypeEnum_AttachmentField = 'AttachmentField';
  type CustomFieldDefinitionTypeEnum_SelectConstant = 'SelectConstant';
  type CustomFieldDefinitionTypeEnum_SelectEditable = 'SelectEditable';
  type CustomFieldDefinitionTypeEnum_SelectMultipleConstant =
    'SelectMultipleConstant';
  type CustomFieldDefinitionTypeEnum_SelectMultipleEditable =
    'SelectMultipleEditable';
  type CustomFieldDefinitionTypeEnum_DateField = 'DateField';
  type CustomFieldDefinitionTypeEnum_EquationField = 'EquationField';
  type CustomFieldDefinitionTypeEnum_LinkCustomFieldDefinition =
    'LinkCustomFieldDefinition';
  type CustomFieldDefinitionTypeEnum_LinkMany = 'LinkMany';
  type CustomFieldDefinitionTypeEnum_LinkOne = 'LinkOne';
  type CustomFieldDefinitionTypeEnum_LinkMasterDetail = 'LinkMasterDetail';
  type CustomFieldDefinitionTypeEnum_NoteField = 'NoteField';
  type CustomFieldDefinitionTypeEnum_NumberField = 'NumberField';
  type CustomFieldDefinitionTypeEnum_RecordsField = 'RecordsField';
  type CustomFieldDefinitionTypeEnum_CompetitorsField = 'CompetitorsField';
  type CustomFieldDefinitionTypeEnum_CreativeBriefsField =
    'CreativeBriefsField';
  type CustomFieldDefinitionTypeEnum_EpicsField = 'EpicsField';
  type CustomFieldDefinitionTypeEnum_FeaturesField = 'FeaturesField';
  type CustomFieldDefinitionTypeEnum_IdeaCategoriesField =
    'IdeaCategoriesField';
  type CustomFieldDefinitionTypeEnum_IdeaOrganizationsField =
    'IdeaOrganizationsField';
  type CustomFieldDefinitionTypeEnum_IdeasField = 'IdeasField';
  type CustomFieldDefinitionTypeEnum_InitiativesField = 'InitiativesField';
  type CustomFieldDefinitionTypeEnum_PersonasField = 'PersonasField';
  type CustomFieldDefinitionTypeEnum_ProjectsField = 'ProjectsField';
  type CustomFieldDefinitionTypeEnum_ReleasesField = 'ReleasesField';
  type CustomFieldDefinitionTypeEnum_StrategicImperativesField =
    'StrategicImperativesField';
  type CustomFieldDefinitionTypeEnum_UsersField = 'UsersField';
  type CustomFieldDefinitionTypeEnum_ScorecardField = 'ScorecardField';
  type CustomFieldDefinitionTypeEnum_TextField = 'TextField';
  type CustomFieldDefinitionTypeEnum_UrlField = 'UrlField';
  interface CustomFieldDefinitionTypeEnum {
    values:
      | CustomFieldDefinitionTypeEnum_AttachmentField
      | CustomFieldDefinitionTypeEnum_SelectConstant
      | CustomFieldDefinitionTypeEnum_SelectEditable
      | CustomFieldDefinitionTypeEnum_SelectMultipleConstant
      | CustomFieldDefinitionTypeEnum_SelectMultipleEditable
      | CustomFieldDefinitionTypeEnum_DateField
      | CustomFieldDefinitionTypeEnum_EquationField
      | CustomFieldDefinitionTypeEnum_LinkCustomFieldDefinition
      | CustomFieldDefinitionTypeEnum_LinkMany
      | CustomFieldDefinitionTypeEnum_LinkOne
      | CustomFieldDefinitionTypeEnum_LinkMasterDetail
      | CustomFieldDefinitionTypeEnum_NoteField
      | CustomFieldDefinitionTypeEnum_NumberField
      | CustomFieldDefinitionTypeEnum_RecordsField
      | CustomFieldDefinitionTypeEnum_CompetitorsField
      | CustomFieldDefinitionTypeEnum_CreativeBriefsField
      | CustomFieldDefinitionTypeEnum_EpicsField
      | CustomFieldDefinitionTypeEnum_FeaturesField
      | CustomFieldDefinitionTypeEnum_IdeaCategoriesField
      | CustomFieldDefinitionTypeEnum_IdeaOrganizationsField
      | CustomFieldDefinitionTypeEnum_IdeasField
      | CustomFieldDefinitionTypeEnum_InitiativesField
      | CustomFieldDefinitionTypeEnum_PersonasField
      | CustomFieldDefinitionTypeEnum_ProjectsField
      | CustomFieldDefinitionTypeEnum_ReleasesField
      | CustomFieldDefinitionTypeEnum_StrategicImperativesField
      | CustomFieldDefinitionTypeEnum_UsersField
      | CustomFieldDefinitionTypeEnum_ScorecardField
      | CustomFieldDefinitionTypeEnum_TextField
      | CustomFieldDefinitionTypeEnum_UrlField;
    AttachmentField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_AttachmentField
    >;
    SelectConstant: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_SelectConstant
    >;
    SelectEditable: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_SelectEditable
    >;
    SelectMultipleConstant: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_SelectMultipleConstant
    >;
    SelectMultipleEditable: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_SelectMultipleEditable
    >;
    DateField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_DateField
    >;
    EquationField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_EquationField
    >;
    LinkCustomFieldDefinition: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_LinkCustomFieldDefinition
    >;
    LinkMany: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_LinkMany
    >;
    LinkOne: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_LinkOne
    >;
    LinkMasterDetail: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_LinkMasterDetail
    >;
    NoteField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_NoteField
    >;
    NumberField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_NumberField
    >;
    RecordsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_RecordsField
    >;
    CompetitorsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_CompetitorsField
    >;
    CreativeBriefsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_CreativeBriefsField
    >;
    EpicsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_EpicsField
    >;
    FeaturesField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_FeaturesField
    >;
    IdeaCategoriesField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_IdeaCategoriesField
    >;
    IdeaOrganizationsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_IdeaOrganizationsField
    >;
    IdeasField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_IdeasField
    >;
    InitiativesField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_InitiativesField
    >;
    PersonasField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_PersonasField
    >;
    ProjectsField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_ProjectsField
    >;
    ReleasesField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_ReleasesField
    >;
    StrategicImperativesField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_StrategicImperativesField
    >;
    UsersField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_UsersField
    >;
    ScorecardField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_ScorecardField
    >;
    TextField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_TextField
    >;
    UrlField: EnumValue<
      'CustomFieldDefinitionTypeEnum',
      CustomFieldDefinitionTypeEnum_UrlField
    >;
  }

  type CustomFieldableTypeEnum_Project = 'Project';
  type CustomFieldableTypeEnum_Release = 'Release';
  type CustomFieldableTypeEnum_Epic = 'Epic';
  type CustomFieldableTypeEnum_Feature = 'Feature';
  type CustomFieldableTypeEnum_Goal = 'Goal';
  type CustomFieldableTypeEnum_Initiative = 'Initiative';
  type CustomFieldableTypeEnum_Idea = 'Idea';
  type CustomFieldableTypeEnum_ReleasePhase = 'ReleasePhase';
  type CustomFieldableTypeEnum_Requirement = 'Requirement';
  type CustomFieldableTypeEnum_ProgramIncrement = 'ProgramIncrement';
  type CustomFieldableTypeEnum_Competitor = 'Competitor';
  type CustomFieldableTypeEnum_Persona = 'Persona';
  interface CustomFieldableTypeEnum {
    values:
      | CustomFieldableTypeEnum_Project
      | CustomFieldableTypeEnum_Release
      | CustomFieldableTypeEnum_Epic
      | CustomFieldableTypeEnum_Feature
      | CustomFieldableTypeEnum_Goal
      | CustomFieldableTypeEnum_Initiative
      | CustomFieldableTypeEnum_Idea
      | CustomFieldableTypeEnum_ReleasePhase
      | CustomFieldableTypeEnum_Requirement
      | CustomFieldableTypeEnum_ProgramIncrement
      | CustomFieldableTypeEnum_Competitor
      | CustomFieldableTypeEnum_Persona;
    Project: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Project
    >;
    Release: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Release
    >;
    Epic: EnumValue<'CustomFieldableTypeEnum', CustomFieldableTypeEnum_Epic>;
    Feature: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Feature
    >;
    Goal: EnumValue<'CustomFieldableTypeEnum', CustomFieldableTypeEnum_Goal>;
    Initiative: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Initiative
    >;
    Idea: EnumValue<'CustomFieldableTypeEnum', CustomFieldableTypeEnum_Idea>;
    ReleasePhase: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_ReleasePhase
    >;
    Requirement: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Requirement
    >;
    ProgramIncrement: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_ProgramIncrement
    >;
    Competitor: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Competitor
    >;
    Persona: EnumValue<
      'CustomFieldableTypeEnum',
      CustomFieldableTypeEnum_Persona
    >;
  }

  type DocumentTypeEnum_NOTE = 'NOTE';
  type DocumentTypeEnum_WHITEBOARD = 'WHITEBOARD';
  type DocumentTypeEnum_FOLDER = 'FOLDER';
  type DocumentTypeEnum_DAILY_NOTES_FOLDER = 'DAILY_NOTES_FOLDER';
  interface DocumentTypeEnum {
    values:
      | DocumentTypeEnum_NOTE
      | DocumentTypeEnum_WHITEBOARD
      | DocumentTypeEnum_FOLDER
      | DocumentTypeEnum_DAILY_NOTES_FOLDER;
    NOTE: EnumValue<'DocumentTypeEnum', DocumentTypeEnum_NOTE>;
    WHITEBOARD: EnumValue<'DocumentTypeEnum', DocumentTypeEnum_WHITEBOARD>;
    FOLDER: EnumValue<'DocumentTypeEnum', DocumentTypeEnum_FOLDER>;
    DAILY_NOTES_FOLDER: EnumValue<
      'DocumentTypeEnum',
      DocumentTypeEnum_DAILY_NOTES_FOLDER
    >;
  }

  type EditorWidthEnum_NARROW = 'NARROW';
  type EditorWidthEnum_FULL = 'FULL';
  interface EditorWidthEnum {
    values: EditorWidthEnum_NARROW | EditorWidthEnum_FULL;
    NARROW: EnumValue<'EditorWidthEnum', EditorWidthEnum_NARROW>;
    FULL: EnumValue<'EditorWidthEnum', EditorWidthEnum_FULL>;
  }

  type EpicOrder_workflowBoardPosition = 'workflowBoardPosition';
  type EpicOrder_createdAt = 'createdAt';
  type EpicOrder_position = 'position';
  interface EpicOrder {
    values:
      | EpicOrder_workflowBoardPosition
      | EpicOrder_createdAt
      | EpicOrder_position;
    workflowBoardPosition: EnumValue<
      'EpicOrder',
      EpicOrder_workflowBoardPosition
    >;
    createdAt: EnumValue<'EpicOrder', EpicOrder_createdAt>;
    position: EnumValue<'EpicOrder', EpicOrder_position>;
  }

  type ExtensionAutomationRecordEnum_Feature = 'Feature';
  type ExtensionAutomationRecordEnum_Epic = 'Epic';
  type ExtensionAutomationRecordEnum_Requirement = 'Requirement';
  interface ExtensionAutomationRecordEnum {
    values:
      | ExtensionAutomationRecordEnum_Feature
      | ExtensionAutomationRecordEnum_Epic
      | ExtensionAutomationRecordEnum_Requirement;
    Feature: EnumValue<
      'ExtensionAutomationRecordEnum',
      ExtensionAutomationRecordEnum_Feature
    >;
    Epic: EnumValue<
      'ExtensionAutomationRecordEnum',
      ExtensionAutomationRecordEnum_Epic
    >;
    Requirement: EnumValue<
      'ExtensionAutomationRecordEnum',
      ExtensionAutomationRecordEnum_Requirement
    >;
  }

  type ExtensionFieldableTypeEnum_EPIC = 'EPIC';
  type ExtensionFieldableTypeEnum_RELEASE = 'RELEASE';
  type ExtensionFieldableTypeEnum_MASTERRELEASE = 'MASTERRELEASE';
  type ExtensionFieldableTypeEnum_REQUIREMENT = 'REQUIREMENT';
  type ExtensionFieldableTypeEnum_FEATURE = 'FEATURE';
  interface ExtensionFieldableTypeEnum {
    values:
      | ExtensionFieldableTypeEnum_EPIC
      | ExtensionFieldableTypeEnum_RELEASE
      | ExtensionFieldableTypeEnum_MASTERRELEASE
      | ExtensionFieldableTypeEnum_REQUIREMENT
      | ExtensionFieldableTypeEnum_FEATURE;
    EPIC: EnumValue<
      'ExtensionFieldableTypeEnum',
      ExtensionFieldableTypeEnum_EPIC
    >;
    RELEASE: EnumValue<
      'ExtensionFieldableTypeEnum',
      ExtensionFieldableTypeEnum_RELEASE
    >;
    MASTERRELEASE: EnumValue<
      'ExtensionFieldableTypeEnum',
      ExtensionFieldableTypeEnum_MASTERRELEASE
    >;
    REQUIREMENT: EnumValue<
      'ExtensionFieldableTypeEnum',
      ExtensionFieldableTypeEnum_REQUIREMENT
    >;
    FEATURE: EnumValue<
      'ExtensionFieldableTypeEnum',
      ExtensionFieldableTypeEnum_FEATURE
    >;
  }

  type FeatureOrder_workflowBoardPosition = 'workflowBoardPosition';
  type FeatureOrder_createdAt = 'createdAt';
  type FeatureOrder_updatedAt = 'updatedAt';
  type FeatureOrder_position = 'position';
  type FeatureOrder_featureBoardPosition = 'featureBoardPosition';
  interface FeatureOrder {
    values:
      | FeatureOrder_workflowBoardPosition
      | FeatureOrder_createdAt
      | FeatureOrder_updatedAt
      | FeatureOrder_position
      | FeatureOrder_featureBoardPosition;
    workflowBoardPosition: EnumValue<
      'FeatureOrder',
      FeatureOrder_workflowBoardPosition
    >;
    createdAt: EnumValue<'FeatureOrder', FeatureOrder_createdAt>;
    updatedAt: EnumValue<'FeatureOrder', FeatureOrder_updatedAt>;
    position: EnumValue<'FeatureOrder', FeatureOrder_position>;
    featureBoardPosition: EnumValue<
      'FeatureOrder',
      FeatureOrder_featureBoardPosition
    >;
  }

  type GoalOrder_position = 'position';
  interface GoalOrder {
    values: GoalOrder_position;
    position: EnumValue<'GoalOrder', GoalOrder_position>;
  }

  type IdeaOrder_createdAt = 'createdAt';
  type IdeaOrder_updatedAt = 'updatedAt';
  type IdeaOrder_popularity = 'popularity';
  interface IdeaOrder {
    values: IdeaOrder_createdAt | IdeaOrder_updatedAt | IdeaOrder_popularity;
    createdAt: EnumValue<'IdeaOrder', IdeaOrder_createdAt>;
    updatedAt: EnumValue<'IdeaOrder', IdeaOrder_updatedAt>;
    popularity: EnumValue<'IdeaOrder', IdeaOrder_popularity>;
  }

  type IdeaPromotableTypeEnum_Feature = 'Feature';
  type IdeaPromotableTypeEnum_Epic = 'Epic';
  type IdeaPromotableTypeEnum_Requirement = 'Requirement';
  interface IdeaPromotableTypeEnum {
    values:
      | IdeaPromotableTypeEnum_Feature
      | IdeaPromotableTypeEnum_Epic
      | IdeaPromotableTypeEnum_Requirement;
    Feature: EnumValue<
      'IdeaPromotableTypeEnum',
      IdeaPromotableTypeEnum_Feature
    >;
    Epic: EnumValue<'IdeaPromotableTypeEnum', IdeaPromotableTypeEnum_Epic>;
    Requirement: EnumValue<
      'IdeaPromotableTypeEnum',
      IdeaPromotableTypeEnum_Requirement
    >;
  }

  type InitiativeOrder_position = 'position';
  interface InitiativeOrder {
    values: InitiativeOrder_position;
    position: EnumValue<'InitiativeOrder', InitiativeOrder_position>;
  }

  type InternalMeaning_NOT_STARTED = 'NOT_STARTED';
  type InternalMeaning_IN_PROGRESS = 'IN_PROGRESS';
  type InternalMeaning_DONE = 'DONE';
  type InternalMeaning_SHIPPED = 'SHIPPED';
  type InternalMeaning_WONT_DO = 'WONT_DO';
  type InternalMeaning_ALREADY_EXISTS = 'ALREADY_EXISTS';
  interface InternalMeaning {
    values:
      | InternalMeaning_NOT_STARTED
      | InternalMeaning_IN_PROGRESS
      | InternalMeaning_DONE
      | InternalMeaning_SHIPPED
      | InternalMeaning_WONT_DO
      | InternalMeaning_ALREADY_EXISTS;
    NOT_STARTED: EnumValue<'InternalMeaning', InternalMeaning_NOT_STARTED>;
    IN_PROGRESS: EnumValue<'InternalMeaning', InternalMeaning_IN_PROGRESS>;
    DONE: EnumValue<'InternalMeaning', InternalMeaning_DONE>;
    SHIPPED: EnumValue<'InternalMeaning', InternalMeaning_SHIPPED>;
    WONT_DO: EnumValue<'InternalMeaning', InternalMeaning_WONT_DO>;
    ALREADY_EXISTS: EnumValue<
      'InternalMeaning',
      InternalMeaning_ALREADY_EXISTS
    >;
  }

  type IterationOrder_startDate = 'startDate';
  interface IterationOrder {
    values: IterationOrder_startDate;
    startDate: EnumValue<'IterationOrder', IterationOrder_startDate>;
  }

  type LinkableRecordTypesEnum_Epic = 'Epic';
  type LinkableRecordTypesEnum_Feature = 'Feature';
  type LinkableRecordTypesEnum_Idea = 'Idea';
  type LinkableRecordTypesEnum_Initiative = 'Initiative';
  type LinkableRecordTypesEnum_Release = 'Release';
  type LinkableRecordTypesEnum_Requirement = 'Requirement';
  type LinkableRecordTypesEnum_Goal = 'Goal';
  interface LinkableRecordTypesEnum {
    values:
      | LinkableRecordTypesEnum_Epic
      | LinkableRecordTypesEnum_Feature
      | LinkableRecordTypesEnum_Idea
      | LinkableRecordTypesEnum_Initiative
      | LinkableRecordTypesEnum_Release
      | LinkableRecordTypesEnum_Requirement
      | LinkableRecordTypesEnum_Goal;
    Epic: EnumValue<'LinkableRecordTypesEnum', LinkableRecordTypesEnum_Epic>;
    Feature: EnumValue<
      'LinkableRecordTypesEnum',
      LinkableRecordTypesEnum_Feature
    >;
    Idea: EnumValue<'LinkableRecordTypesEnum', LinkableRecordTypesEnum_Idea>;
    Initiative: EnumValue<
      'LinkableRecordTypesEnum',
      LinkableRecordTypesEnum_Initiative
    >;
    Release: EnumValue<
      'LinkableRecordTypesEnum',
      LinkableRecordTypesEnum_Release
    >;
    Requirement: EnumValue<
      'LinkableRecordTypesEnum',
      LinkableRecordTypesEnum_Requirement
    >;
    Goal: EnumValue<'LinkableRecordTypesEnum', LinkableRecordTypesEnum_Goal>;
  }

  type NotificationOrder_createdAt = 'createdAt';
  interface NotificationOrder {
    values: NotificationOrder_createdAt;
    createdAt: EnumValue<'NotificationOrder', NotificationOrder_createdAt>;
  }

  type NotificationReadEnum_READ = 'READ';
  type NotificationReadEnum_UNREAD = 'UNREAD';
  interface NotificationReadEnum {
    values: NotificationReadEnum_READ | NotificationReadEnum_UNREAD;
    READ: EnumValue<'NotificationReadEnum', NotificationReadEnum_READ>;
    UNREAD: EnumValue<'NotificationReadEnum', NotificationReadEnum_UNREAD>;
  }

  type NotificationScopeEnum_PARTICIPATING = 'PARTICIPATING';
  type NotificationScopeEnum_WATCHING = 'WATCHING';
  interface NotificationScopeEnum {
    values:
      | NotificationScopeEnum_PARTICIPATING
      | NotificationScopeEnum_WATCHING;
    PARTICIPATING: EnumValue<
      'NotificationScopeEnum',
      NotificationScopeEnum_PARTICIPATING
    >;
    WATCHING: EnumValue<
      'NotificationScopeEnum',
      NotificationScopeEnum_WATCHING
    >;
  }

  type NotificationStarredEnum_STARRED = 'STARRED';
  type NotificationStarredEnum_UNSTARRED = 'UNSTARRED';
  interface NotificationStarredEnum {
    values: NotificationStarredEnum_STARRED | NotificationStarredEnum_UNSTARRED;
    STARRED: EnumValue<
      'NotificationStarredEnum',
      NotificationStarredEnum_STARRED
    >;
    UNSTARRED: EnumValue<
      'NotificationStarredEnum',
      NotificationStarredEnum_UNSTARRED
    >;
  }

  type NotificationTypeEnum_Comment = 'Comment';
  type NotificationTypeEnum_Project = 'Project';
  type NotificationTypeEnum_Release = 'Release';
  type NotificationTypeEnum_Task = 'Task';
  type NotificationTypeEnum_Epic = 'Epic';
  type NotificationTypeEnum_Feature = 'Feature';
  type NotificationTypeEnum_Goal = 'Goal';
  type NotificationTypeEnum_Initiative = 'Initiative';
  type NotificationTypeEnum_Idea = 'Idea';
  type NotificationTypeEnum_ProgramIncrement = 'ProgramIncrement';
  type NotificationTypeEnum_Page = 'Page';
  type NotificationTypeEnum_Competitor = 'Competitor';
  type NotificationTypeEnum_Persona = 'Persona';
  interface NotificationTypeEnum {
    values:
      | NotificationTypeEnum_Comment
      | NotificationTypeEnum_Project
      | NotificationTypeEnum_Release
      | NotificationTypeEnum_Task
      | NotificationTypeEnum_Epic
      | NotificationTypeEnum_Feature
      | NotificationTypeEnum_Goal
      | NotificationTypeEnum_Initiative
      | NotificationTypeEnum_Idea
      | NotificationTypeEnum_ProgramIncrement
      | NotificationTypeEnum_Page
      | NotificationTypeEnum_Competitor
      | NotificationTypeEnum_Persona;
    Comment: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Comment>;
    Project: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Project>;
    Release: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Release>;
    Task: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Task>;
    Epic: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Epic>;
    Feature: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Feature>;
    Goal: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Goal>;
    Initiative: EnumValue<
      'NotificationTypeEnum',
      NotificationTypeEnum_Initiative
    >;
    Idea: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Idea>;
    ProgramIncrement: EnumValue<
      'NotificationTypeEnum',
      NotificationTypeEnum_ProgramIncrement
    >;
    Page: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Page>;
    Competitor: EnumValue<
      'NotificationTypeEnum',
      NotificationTypeEnum_Competitor
    >;
    Persona: EnumValue<'NotificationTypeEnum', NotificationTypeEnum_Persona>;
  }

  type OrderDirection_ASC = 'ASC';
  type OrderDirection_DESC = 'DESC';
  interface OrderDirection {
    values: OrderDirection_ASC | OrderDirection_DESC;
    ASC: EnumValue<'OrderDirection', OrderDirection_ASC>;
    DESC: EnumValue<'OrderDirection', OrderDirection_DESC>;
  }

  type PageOrder_createdAt = 'createdAt';
  type PageOrder_updatedAt = 'updatedAt';
  type PageOrder_position = 'position';
  type PageOrder_name = 'name';
  type PageOrder_recentlyViewed = 'recentlyViewed';
  interface PageOrder {
    values:
      | PageOrder_createdAt
      | PageOrder_updatedAt
      | PageOrder_position
      | PageOrder_name
      | PageOrder_recentlyViewed;
    createdAt: EnumValue<'PageOrder', PageOrder_createdAt>;
    updatedAt: EnumValue<'PageOrder', PageOrder_updatedAt>;
    position: EnumValue<'PageOrder', PageOrder_position>;
    name: EnumValue<'PageOrder', PageOrder_name>;
    recentlyViewed: EnumValue<'PageOrder', PageOrder_recentlyViewed>;
  }

  type PlaceableRecordTypeEnum_Feature = 'Feature';
  type PlaceableRecordTypeEnum_Epic = 'Epic';
  type PlaceableRecordTypeEnum_Requirement = 'Requirement';
  type PlaceableRecordTypeEnum_Idea = 'Idea';
  type PlaceableRecordTypeEnum_Initiative = 'Initiative';
  interface PlaceableRecordTypeEnum {
    values:
      | PlaceableRecordTypeEnum_Feature
      | PlaceableRecordTypeEnum_Epic
      | PlaceableRecordTypeEnum_Requirement
      | PlaceableRecordTypeEnum_Idea
      | PlaceableRecordTypeEnum_Initiative;
    Feature: EnumValue<
      'PlaceableRecordTypeEnum',
      PlaceableRecordTypeEnum_Feature
    >;
    Epic: EnumValue<'PlaceableRecordTypeEnum', PlaceableRecordTypeEnum_Epic>;
    Requirement: EnumValue<
      'PlaceableRecordTypeEnum',
      PlaceableRecordTypeEnum_Requirement
    >;
    Idea: EnumValue<'PlaceableRecordTypeEnum', PlaceableRecordTypeEnum_Idea>;
    Initiative: EnumValue<
      'PlaceableRecordTypeEnum',
      PlaceableRecordTypeEnum_Initiative
    >;
  }

  type PositionableRecordsBookmarkTypesEnum_WORKFLOW_BOARD = 'WORKFLOW_BOARD';
  type PositionableRecordsBookmarkTypesEnum_TEAM_BACKLOG = 'TEAM_BACKLOG';
  type PositionableRecordsBookmarkTypesEnum_ITERATION = 'ITERATION';
  interface PositionableRecordsBookmarkTypesEnum {
    values:
      | PositionableRecordsBookmarkTypesEnum_WORKFLOW_BOARD
      | PositionableRecordsBookmarkTypesEnum_TEAM_BACKLOG
      | PositionableRecordsBookmarkTypesEnum_ITERATION;
    WORKFLOW_BOARD: EnumValue<
      'PositionableRecordsBookmarkTypesEnum',
      PositionableRecordsBookmarkTypesEnum_WORKFLOW_BOARD
    >;
    TEAM_BACKLOG: EnumValue<
      'PositionableRecordsBookmarkTypesEnum',
      PositionableRecordsBookmarkTypesEnum_TEAM_BACKLOG
    >;
    ITERATION: EnumValue<
      'PositionableRecordsBookmarkTypesEnum',
      PositionableRecordsBookmarkTypesEnum_ITERATION
    >;
  }

  type ProgramIncrementIterationOrder_startDate = 'startDate';
  interface ProgramIncrementIterationOrder {
    values: ProgramIncrementIterationOrder_startDate;
    startDate: EnumValue<
      'ProgramIncrementIterationOrder',
      ProgramIncrementIterationOrder_startDate
    >;
  }

  type ProgramIncrementOrder_startDate = 'startDate';
  interface ProgramIncrementOrder {
    values: ProgramIncrementOrder_startDate;
    startDate: EnumValue<
      'ProgramIncrementOrder',
      ProgramIncrementOrder_startDate
    >;
  }

  type RecordEventGroupByEnum_ITERATION_ID = 'ITERATION_ID';
  type RecordEventGroupByEnum_RELEASE_ID = 'RELEASE_ID';
  type RecordEventGroupByEnum_EPIC_ID = 'EPIC_ID';
  type RecordEventGroupByEnum_FEATURE_ID = 'FEATURE_ID';
  type RecordEventGroupByEnum_REQUIREMENT_ID = 'REQUIREMENT_ID';
  type RecordEventGroupByEnum_TEAM_ID = 'TEAM_ID';
  type RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID =
    'TEAM_WORKFLOW_STATUS_ID';
  type RecordEventGroupByEnum_ASSIGNED_TO_USER_ID = 'ASSIGNED_TO_USER_ID';
  interface RecordEventGroupByEnum {
    values:
      | RecordEventGroupByEnum_ITERATION_ID
      | RecordEventGroupByEnum_RELEASE_ID
      | RecordEventGroupByEnum_EPIC_ID
      | RecordEventGroupByEnum_FEATURE_ID
      | RecordEventGroupByEnum_REQUIREMENT_ID
      | RecordEventGroupByEnum_TEAM_ID
      | RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID
      | RecordEventGroupByEnum_ASSIGNED_TO_USER_ID;
    ITERATION_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_ITERATION_ID
    >;
    RELEASE_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_RELEASE_ID
    >;
    EPIC_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_EPIC_ID
    >;
    FEATURE_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_FEATURE_ID
    >;
    REQUIREMENT_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_REQUIREMENT_ID
    >;
    TEAM_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_TEAM_ID
    >;
    TEAM_WORKFLOW_STATUS_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID
    >;
    ASSIGNED_TO_USER_ID: EnumValue<
      'RecordEventGroupByEnum',
      RecordEventGroupByEnum_ASSIGNED_TO_USER_ID
    >;
  }

  type RecordEventSubjectEnum_Release = 'Release';
  type RecordEventSubjectEnum_Epic = 'Epic';
  type RecordEventSubjectEnum_Iteration = 'Iteration';
  type RecordEventSubjectEnum_Feature = 'Feature';
  type RecordEventSubjectEnum_Requirement = 'Requirement';
  interface RecordEventSubjectEnum {
    values:
      | RecordEventSubjectEnum_Release
      | RecordEventSubjectEnum_Epic
      | RecordEventSubjectEnum_Iteration
      | RecordEventSubjectEnum_Feature
      | RecordEventSubjectEnum_Requirement;
    Release: EnumValue<
      'RecordEventSubjectEnum',
      RecordEventSubjectEnum_Release
    >;
    Epic: EnumValue<'RecordEventSubjectEnum', RecordEventSubjectEnum_Epic>;
    Iteration: EnumValue<
      'RecordEventSubjectEnum',
      RecordEventSubjectEnum_Iteration
    >;
    Feature: EnumValue<
      'RecordEventSubjectEnum',
      RecordEventSubjectEnum_Feature
    >;
    Requirement: EnumValue<
      'RecordEventSubjectEnum',
      RecordEventSubjectEnum_Requirement
    >;
  }

  type RecordEventTimeSeriesGroupEnum_HOUR = 'HOUR';
  type RecordEventTimeSeriesGroupEnum_DAY = 'DAY';
  type RecordEventTimeSeriesGroupEnum_WEEK = 'WEEK';
  type RecordEventTimeSeriesGroupEnum_MONTH = 'MONTH';
  interface RecordEventTimeSeriesGroupEnum {
    values:
      | RecordEventTimeSeriesGroupEnum_HOUR
      | RecordEventTimeSeriesGroupEnum_DAY
      | RecordEventTimeSeriesGroupEnum_WEEK
      | RecordEventTimeSeriesGroupEnum_MONTH;
    HOUR: EnumValue<
      'RecordEventTimeSeriesGroupEnum',
      RecordEventTimeSeriesGroupEnum_HOUR
    >;
    DAY: EnumValue<
      'RecordEventTimeSeriesGroupEnum',
      RecordEventTimeSeriesGroupEnum_DAY
    >;
    WEEK: EnumValue<
      'RecordEventTimeSeriesGroupEnum',
      RecordEventTimeSeriesGroupEnum_WEEK
    >;
    MONTH: EnumValue<
      'RecordEventTimeSeriesGroupEnum',
      RecordEventTimeSeriesGroupEnum_MONTH
    >;
  }

  type RecordEventTypeEnum_ITERATION_START = 'ITERATION_START';
  type RecordEventTypeEnum_ITERATION_COMPLETED = 'ITERATION_COMPLETED';
  type RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED =
    'ITERATION_CAPACITY_CHANGED';
  type RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED =
    'RELEASE_CAPACITY_CHANGED';
  type RecordEventTypeEnum_EPIC_CAPACITY_CHANGED = 'EPIC_CAPACITY_CHANGED';
  type RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED =
    'FEATURE_CAPACITY_CHANGED';
  type RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED =
    'REQUIREMENT_CAPACITY_CHANGED';
  type RecordEventTypeEnum_RECORD_WORK_DONE = 'RECORD_WORK_DONE';
  type RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED = 'RECORD_ESTIMATE_CHANGED';
  type RecordEventTypeEnum_RECORD_REMAINING_CHANGED =
    'RECORD_REMAINING_CHANGED';
  type RecordEventTypeEnum_RECORD_COMPLETED = 'RECORD_COMPLETED';
  type RecordEventTypeEnum_RECORD_RESTARTED = 'RECORD_RESTARTED';
  type RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION =
    'RECORD_ADDED_TO_ITERATION';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION =
    'RECORD_REMOVED_FROM_ITERATION';
  type RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE = 'RECORD_ADDED_TO_RELEASE';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE =
    'RECORD_REMOVED_FROM_RELEASE';
  type RecordEventTypeEnum_RECORD_ADDED_TO_EPIC = 'RECORD_ADDED_TO_EPIC';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC =
    'RECORD_REMOVED_FROM_EPIC';
  type RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE = 'RECORD_ADDED_TO_FEATURE';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE =
    'RECORD_REMOVED_FROM_FEATURE';
  type RecordEventTypeEnum_RECORD_ADDED_TO_TEAM = 'RECORD_ADDED_TO_TEAM';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM =
    'RECORD_REMOVED_FROM_TEAM';
  type RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS =
    'RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS =
    'RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS';
  type RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER =
    'RECORD_ADDED_TO_ASSIGNED_USER';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER =
    'RECORD_REMOVED_FROM_ASSIGNED_USER';
  type RecordEventTypeEnum_RECORD_ADDED_TO_PROGRAM_INCREMENT =
    'RECORD_ADDED_TO_PROGRAM_INCREMENT';
  type RecordEventTypeEnum_RECORD_REMOVED_FROM_PROGRAM_INCREMENT =
    'RECORD_REMOVED_FROM_PROGRAM_INCREMENT';
  type RecordEventTypeEnum_RECORD_ITERATION_START = 'RECORD_ITERATION_START';
  type RecordEventTypeEnum_RECORD_INCOMPLETE_MOVED = 'RECORD_INCOMPLETE_MOVED';
  interface RecordEventTypeEnum {
    values:
      | RecordEventTypeEnum_ITERATION_START
      | RecordEventTypeEnum_ITERATION_COMPLETED
      | RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED
      | RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED
      | RecordEventTypeEnum_EPIC_CAPACITY_CHANGED
      | RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED
      | RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED
      | RecordEventTypeEnum_RECORD_WORK_DONE
      | RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED
      | RecordEventTypeEnum_RECORD_REMAINING_CHANGED
      | RecordEventTypeEnum_RECORD_COMPLETED
      | RecordEventTypeEnum_RECORD_RESTARTED
      | RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION
      | RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE
      | RecordEventTypeEnum_RECORD_ADDED_TO_EPIC
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC
      | RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE
      | RecordEventTypeEnum_RECORD_ADDED_TO_TEAM
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM
      | RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS
      | RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER
      | RecordEventTypeEnum_RECORD_ADDED_TO_PROGRAM_INCREMENT
      | RecordEventTypeEnum_RECORD_REMOVED_FROM_PROGRAM_INCREMENT
      | RecordEventTypeEnum_RECORD_ITERATION_START
      | RecordEventTypeEnum_RECORD_INCOMPLETE_MOVED;
    ITERATION_START: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_ITERATION_START
    >;
    ITERATION_COMPLETED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_ITERATION_COMPLETED
    >;
    ITERATION_CAPACITY_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED
    >;
    RELEASE_CAPACITY_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED
    >;
    EPIC_CAPACITY_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_EPIC_CAPACITY_CHANGED
    >;
    FEATURE_CAPACITY_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED
    >;
    REQUIREMENT_CAPACITY_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED
    >;
    RECORD_WORK_DONE: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_WORK_DONE
    >;
    RECORD_ESTIMATE_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED
    >;
    RECORD_REMAINING_CHANGED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMAINING_CHANGED
    >;
    RECORD_COMPLETED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_COMPLETED
    >;
    RECORD_RESTARTED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_RESTARTED
    >;
    RECORD_ADDED_TO_ITERATION: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION
    >;
    RECORD_REMOVED_FROM_ITERATION: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION
    >;
    RECORD_ADDED_TO_RELEASE: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE
    >;
    RECORD_REMOVED_FROM_RELEASE: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE
    >;
    RECORD_ADDED_TO_EPIC: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_EPIC
    >;
    RECORD_REMOVED_FROM_EPIC: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC
    >;
    RECORD_ADDED_TO_FEATURE: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE
    >;
    RECORD_REMOVED_FROM_FEATURE: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE
    >;
    RECORD_ADDED_TO_TEAM: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_TEAM
    >;
    RECORD_REMOVED_FROM_TEAM: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM
    >;
    RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS
    >;
    RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS
    >;
    RECORD_ADDED_TO_ASSIGNED_USER: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER
    >;
    RECORD_REMOVED_FROM_ASSIGNED_USER: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER
    >;
    RECORD_ADDED_TO_PROGRAM_INCREMENT: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ADDED_TO_PROGRAM_INCREMENT
    >;
    RECORD_REMOVED_FROM_PROGRAM_INCREMENT: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_REMOVED_FROM_PROGRAM_INCREMENT
    >;
    RECORD_ITERATION_START: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_ITERATION_START
    >;
    RECORD_INCOMPLETE_MOVED: EnumValue<
      'RecordEventTypeEnum',
      RecordEventTypeEnum_RECORD_INCOMPLETE_MOVED
    >;
  }

  type RecordEventValueOperationEnum_SUM = 'SUM';
  type RecordEventValueOperationEnum_MIN = 'MIN';
  type RecordEventValueOperationEnum_MAX = 'MAX';
  type RecordEventValueOperationEnum_AVG = 'AVG';
  type RecordEventValueOperationEnum_COUNT = 'COUNT';
  interface RecordEventValueOperationEnum {
    values:
      | RecordEventValueOperationEnum_SUM
      | RecordEventValueOperationEnum_MIN
      | RecordEventValueOperationEnum_MAX
      | RecordEventValueOperationEnum_AVG
      | RecordEventValueOperationEnum_COUNT;
    SUM: EnumValue<
      'RecordEventValueOperationEnum',
      RecordEventValueOperationEnum_SUM
    >;
    MIN: EnumValue<
      'RecordEventValueOperationEnum',
      RecordEventValueOperationEnum_MIN
    >;
    MAX: EnumValue<
      'RecordEventValueOperationEnum',
      RecordEventValueOperationEnum_MAX
    >;
    AVG: EnumValue<
      'RecordEventValueOperationEnum',
      RecordEventValueOperationEnum_AVG
    >;
    COUNT: EnumValue<
      'RecordEventValueOperationEnum',
      RecordEventValueOperationEnum_COUNT
    >;
  }

  type RecordLinkTypeEnum_RELATES_TO = 'RELATES_TO';
  type RecordLinkTypeEnum_DEPENDS_ON = 'DEPENDS_ON';
  type RecordLinkTypeEnum_DUPLICATES = 'DUPLICATES';
  type RecordLinkTypeEnum_CONTAINS = 'CONTAINS';
  type RecordLinkTypeEnum_IMPACTS = 'IMPACTS';
  type RecordLinkTypeEnum_BLOCKS = 'BLOCKS';
  type RecordLinkTypeEnum_RESEARCH_FOR = 'RESEARCH_FOR';
  interface RecordLinkTypeEnum {
    values:
      | RecordLinkTypeEnum_RELATES_TO
      | RecordLinkTypeEnum_DEPENDS_ON
      | RecordLinkTypeEnum_DUPLICATES
      | RecordLinkTypeEnum_CONTAINS
      | RecordLinkTypeEnum_IMPACTS
      | RecordLinkTypeEnum_BLOCKS
      | RecordLinkTypeEnum_RESEARCH_FOR;
    RELATES_TO: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_RELATES_TO>;
    DEPENDS_ON: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_DEPENDS_ON>;
    DUPLICATES: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_DUPLICATES>;
    CONTAINS: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_CONTAINS>;
    IMPACTS: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_IMPACTS>;
    BLOCKS: EnumValue<'RecordLinkTypeEnum', RecordLinkTypeEnum_BLOCKS>;
    RESEARCH_FOR: EnumValue<
      'RecordLinkTypeEnum',
      RecordLinkTypeEnum_RESEARCH_FOR
    >;
  }

  type RecordPlacementEnum_TOP = 'TOP';
  type RecordPlacementEnum_BOTTOM = 'BOTTOM';
  interface RecordPlacementEnum {
    values: RecordPlacementEnum_TOP | RecordPlacementEnum_BOTTOM;
    TOP: EnumValue<'RecordPlacementEnum', RecordPlacementEnum_TOP>;
    BOTTOM: EnumValue<'RecordPlacementEnum', RecordPlacementEnum_BOTTOM>;
  }

  type RecordPlacementPositionEnum_TOP = 'TOP';
  type RecordPlacementPositionEnum_BOTTOM = 'BOTTOM';
  type RecordPlacementPositionEnum_BEFORE = 'BEFORE';
  type RecordPlacementPositionEnum_AFTER = 'AFTER';
  interface RecordPlacementPositionEnum {
    values:
      | RecordPlacementPositionEnum_TOP
      | RecordPlacementPositionEnum_BOTTOM
      | RecordPlacementPositionEnum_BEFORE
      | RecordPlacementPositionEnum_AFTER;
    TOP: EnumValue<
      'RecordPlacementPositionEnum',
      RecordPlacementPositionEnum_TOP
    >;
    BOTTOM: EnumValue<
      'RecordPlacementPositionEnum',
      RecordPlacementPositionEnum_BOTTOM
    >;
    BEFORE: EnumValue<
      'RecordPlacementPositionEnum',
      RecordPlacementPositionEnum_BEFORE
    >;
    AFTER: EnumValue<
      'RecordPlacementPositionEnum',
      RecordPlacementPositionEnum_AFTER
    >;
  }

  type RecordReferenceTypeEnum_Feature = 'Feature';
  type RecordReferenceTypeEnum_Epic = 'Epic';
  type RecordReferenceTypeEnum_Requirement = 'Requirement';
  type RecordReferenceTypeEnum_Idea = 'Idea';
  type RecordReferenceTypeEnum_Initiative = 'Initiative';
  interface RecordReferenceTypeEnum {
    values:
      | RecordReferenceTypeEnum_Feature
      | RecordReferenceTypeEnum_Epic
      | RecordReferenceTypeEnum_Requirement
      | RecordReferenceTypeEnum_Idea
      | RecordReferenceTypeEnum_Initiative;
    Feature: EnumValue<
      'RecordReferenceTypeEnum',
      RecordReferenceTypeEnum_Feature
    >;
    Epic: EnumValue<'RecordReferenceTypeEnum', RecordReferenceTypeEnum_Epic>;
    Requirement: EnumValue<
      'RecordReferenceTypeEnum',
      RecordReferenceTypeEnum_Requirement
    >;
    Idea: EnumValue<'RecordReferenceTypeEnum', RecordReferenceTypeEnum_Idea>;
    Initiative: EnumValue<
      'RecordReferenceTypeEnum',
      RecordReferenceTypeEnum_Initiative
    >;
  }

  type ReleaseOrder_featuresBoardOrder = 'featuresBoardOrder';
  type ReleaseOrder_developmentStartedOn = 'developmentStartedOn';
  interface ReleaseOrder {
    values: ReleaseOrder_featuresBoardOrder | ReleaseOrder_developmentStartedOn;
    featuresBoardOrder: EnumValue<
      'ReleaseOrder',
      ReleaseOrder_featuresBoardOrder
    >;
    developmentStartedOn: EnumValue<
      'ReleaseOrder',
      ReleaseOrder_developmentStartedOn
    >;
  }

  type ReleasePhaseTypeEnum_Milestone = 'Milestone';
  type ReleasePhaseTypeEnum_Phase = 'Phase';
  interface ReleasePhaseTypeEnum {
    values: ReleasePhaseTypeEnum_Milestone | ReleasePhaseTypeEnum_Phase;
    Milestone: EnumValue<
      'ReleasePhaseTypeEnum',
      ReleasePhaseTypeEnum_Milestone
    >;
    Phase: EnumValue<'ReleasePhaseTypeEnum', ReleasePhaseTypeEnum_Phase>;
  }

  type ReprioritizeByTypeEnum_SCORE_FACT = 'SCORE_FACT';
  type ReprioritizeByTypeEnum_SCORE = 'SCORE';
  interface ReprioritizeByTypeEnum {
    values: ReprioritizeByTypeEnum_SCORE_FACT | ReprioritizeByTypeEnum_SCORE;
    SCORE_FACT: EnumValue<
      'ReprioritizeByTypeEnum',
      ReprioritizeByTypeEnum_SCORE_FACT
    >;
    SCORE: EnumValue<'ReprioritizeByTypeEnum', ReprioritizeByTypeEnum_SCORE>;
  }

  type RequirementOrder_workflowBoardPosition = 'workflowBoardPosition';
  type RequirementOrder_createdAt = 'createdAt';
  type RequirementOrder_updatedAt = 'updatedAt';
  type RequirementOrder_position = 'position';
  interface RequirementOrder {
    values:
      | RequirementOrder_workflowBoardPosition
      | RequirementOrder_createdAt
      | RequirementOrder_updatedAt
      | RequirementOrder_position;
    workflowBoardPosition: EnumValue<
      'RequirementOrder',
      RequirementOrder_workflowBoardPosition
    >;
    createdAt: EnumValue<'RequirementOrder', RequirementOrder_createdAt>;
    updatedAt: EnumValue<'RequirementOrder', RequirementOrder_updatedAt>;
    position: EnumValue<'RequirementOrder', RequirementOrder_position>;
  }

  type ReviewerDocumentAccessEnum_inherit = 'inherit';
  type ReviewerDocumentAccessEnum_view = 'view';
  type ReviewerDocumentAccessEnum_edit = 'edit';
  interface ReviewerDocumentAccessEnum {
    values:
      | ReviewerDocumentAccessEnum_inherit
      | ReviewerDocumentAccessEnum_view
      | ReviewerDocumentAccessEnum_edit;
    inherit: EnumValue<
      'ReviewerDocumentAccessEnum',
      ReviewerDocumentAccessEnum_inherit
    >;
    view: EnumValue<
      'ReviewerDocumentAccessEnum',
      ReviewerDocumentAccessEnum_view
    >;
    edit: EnumValue<
      'ReviewerDocumentAccessEnum',
      ReviewerDocumentAccessEnum_edit
    >;
  }

  type ScreenableTypeEnum_Release = 'Release';
  type ScreenableTypeEnum_Epic = 'Epic';
  type ScreenableTypeEnum_Feature = 'Feature';
  type ScreenableTypeEnum_Goal = 'Goal';
  type ScreenableTypeEnum_Initiative = 'Initiative';
  type ScreenableTypeEnum_Requirement = 'Requirement';
  interface ScreenableTypeEnum {
    values:
      | ScreenableTypeEnum_Release
      | ScreenableTypeEnum_Epic
      | ScreenableTypeEnum_Feature
      | ScreenableTypeEnum_Goal
      | ScreenableTypeEnum_Initiative
      | ScreenableTypeEnum_Requirement;
    Release: EnumValue<'ScreenableTypeEnum', ScreenableTypeEnum_Release>;
    Epic: EnumValue<'ScreenableTypeEnum', ScreenableTypeEnum_Epic>;
    Feature: EnumValue<'ScreenableTypeEnum', ScreenableTypeEnum_Feature>;
    Goal: EnumValue<'ScreenableTypeEnum', ScreenableTypeEnum_Goal>;
    Initiative: EnumValue<'ScreenableTypeEnum', ScreenableTypeEnum_Initiative>;
    Requirement: EnumValue<
      'ScreenableTypeEnum',
      ScreenableTypeEnum_Requirement
    >;
  }

  type SharedPageAccessEnum_READ_ONLY = 'READ_ONLY';
  type SharedPageAccessEnum_READ_ANNOTATE = 'READ_ANNOTATE';
  type SharedPageAccessEnum_READ_WRITE = 'READ_WRITE';
  interface SharedPageAccessEnum {
    values:
      | SharedPageAccessEnum_READ_ONLY
      | SharedPageAccessEnum_READ_ANNOTATE
      | SharedPageAccessEnum_READ_WRITE;
    READ_ONLY: EnumValue<
      'SharedPageAccessEnum',
      SharedPageAccessEnum_READ_ONLY
    >;
    READ_ANNOTATE: EnumValue<
      'SharedPageAccessEnum',
      SharedPageAccessEnum_READ_ANNOTATE
    >;
    READ_WRITE: EnumValue<
      'SharedPageAccessEnum',
      SharedPageAccessEnum_READ_WRITE
    >;
  }

  type SharedPageOrder_createdAt = 'createdAt';
  interface SharedPageOrder {
    values: SharedPageOrder_createdAt;
    createdAt: EnumValue<'SharedPageOrder', SharedPageOrder_createdAt>;
  }

  type SortChildPageTypeEnum_createdAt = 'createdAt';
  type SortChildPageTypeEnum_name = 'name';
  interface SortChildPageTypeEnum {
    values: SortChildPageTypeEnum_createdAt | SortChildPageTypeEnum_name;
    createdAt: EnumValue<
      'SortChildPageTypeEnum',
      SortChildPageTypeEnum_createdAt
    >;
    name: EnumValue<'SortChildPageTypeEnum', SortChildPageTypeEnum_name>;
  }

  type TaskOrder_createdAt = 'createdAt';
  type TaskOrder_updatedAt = 'updatedAt';
  type TaskOrder_dueDate = 'dueDate';
  interface TaskOrder {
    values: TaskOrder_createdAt | TaskOrder_updatedAt | TaskOrder_dueDate;
    createdAt: EnumValue<'TaskOrder', TaskOrder_createdAt>;
    updatedAt: EnumValue<'TaskOrder', TaskOrder_updatedAt>;
    dueDate: EnumValue<'TaskOrder', TaskOrder_dueDate>;
  }

  type TaskStatusEnum_PENDING = 'PENDING';
  type TaskStatusEnum_COMPLETE = 'COMPLETE';
  type TaskStatusEnum_APPROVED = 'APPROVED';
  type TaskStatusEnum_APPROVED_CONDITIONALLY = 'APPROVED_CONDITIONALLY';
  type TaskStatusEnum_REJECTED = 'REJECTED';
  type TaskStatusEnum_SKIPPED = 'SKIPPED';
  interface TaskStatusEnum {
    values:
      | TaskStatusEnum_PENDING
      | TaskStatusEnum_COMPLETE
      | TaskStatusEnum_APPROVED
      | TaskStatusEnum_APPROVED_CONDITIONALLY
      | TaskStatusEnum_REJECTED
      | TaskStatusEnum_SKIPPED;
    PENDING: EnumValue<'TaskStatusEnum', TaskStatusEnum_PENDING>;
    COMPLETE: EnumValue<'TaskStatusEnum', TaskStatusEnum_COMPLETE>;
    APPROVED: EnumValue<'TaskStatusEnum', TaskStatusEnum_APPROVED>;
    APPROVED_CONDITIONALLY: EnumValue<
      'TaskStatusEnum',
      TaskStatusEnum_APPROVED_CONDITIONALLY
    >;
    REJECTED: EnumValue<'TaskStatusEnum', TaskStatusEnum_REJECTED>;
    SKIPPED: EnumValue<'TaskStatusEnum', TaskStatusEnum_SKIPPED>;
  }

  type TaskUserOrder_completedDate = 'completedDate';
  interface TaskUserOrder {
    values: TaskUserOrder_completedDate;
    completedDate: EnumValue<'TaskUserOrder', TaskUserOrder_completedDate>;
  }

  type TeamAssignableTypeEnum_Epic = 'Epic';
  type TeamAssignableTypeEnum_Feature = 'Feature';
  type TeamAssignableTypeEnum_Requirement = 'Requirement';
  interface TeamAssignableTypeEnum {
    values:
      | TeamAssignableTypeEnum_Epic
      | TeamAssignableTypeEnum_Feature
      | TeamAssignableTypeEnum_Requirement;
    Epic: EnumValue<'TeamAssignableTypeEnum', TeamAssignableTypeEnum_Epic>;
    Feature: EnumValue<
      'TeamAssignableTypeEnum',
      TeamAssignableTypeEnum_Feature
    >;
    Requirement: EnumValue<
      'TeamAssignableTypeEnum',
      TeamAssignableTypeEnum_Requirement
    >;
  }

  type WorkUnitEnum_MINUTES = 'MINUTES';
  type WorkUnitEnum_POINTS = 'POINTS';
  interface WorkUnitEnum {
    values: WorkUnitEnum_MINUTES | WorkUnitEnum_POINTS;
    MINUTES: EnumValue<'WorkUnitEnum', WorkUnitEnum_MINUTES>;
    POINTS: EnumValue<'WorkUnitEnum', WorkUnitEnum_POINTS>;
  }

  type AiRequestFilters = {
    kind?: AiRequestKindEnum['value'] | EnumValue<'AiRequestKindEnum', any>;
    unique?: boolean;
    hasInputs?: boolean;
  };
  type AiRequestOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: AiRequestOrder['value'] | EnumValue<'AiRequestOrder', any>;
  };
  type TeamAssignableInput = {
    id: RecordId;
    typename:
      | TeamAssignableTypeEnum['value']
      | EnumValue<'TeamAssignableTypeEnum', any>;
  };
  type TeamRelationshipInput = {
    id?: RecordId;
    /**
     * Change team to the team with this name
     */
    name?: string;
    /**
     * Change team to the team with this reference prefix. Example: 'DEV'
     */
    referencePrefix?: string;
  };
  type AssignToTeamAttributes = {
    record: TeamAssignableInput;
    /**
     * Team to assign the record to
     */
    team: TeamRelationshipInput;
  };
  type CommentableInput = {
    id: RecordId;
    typename:
      | CommentableTypeEnum['value']
      | EnumValue<'CommentableTypeEnum', any>;
  };
  type CompetitorFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
  };
  type CustomFieldableInput = {
    id: RecordId;
    typename:
      | CustomFieldableTypeEnum['value']
      | EnumValue<'CustomFieldableTypeEnum', any>;
  };
  type CycleTimeChartAttributes = {
    /**
     * Filters used to customize the chart
     */
    filters?: any;
  };
  type DateTimeRangeFilter = {
    /**
     * Greater than datetime in ISO8601 format
     */
    gt?: string;
    /**
     * Less than datetime in ISO8601 format
     */
    lt?: string;
  };
  type DeliveryRisksChartAttributes = {
    /**
     * Filters used to customize the chart
     */
    filters?: any;
    /**
     * How to group records in the chart
     */
    dataGroup?: string;
  };
  type ScoreFactInput = {
    /**
     * ID of the score fact. A nil value implies the creation of a new score fact
     */
    id?: RecordId;
    /**
     * Value of the score fact
     */
    value: number;
    /**
     * Whether an automated metric should be disabled
     */
    disableEquation?: boolean;
    /**
     * Whether an automated metric should be recomputed
     */
    recomputeEquation?: boolean;
    /**
     * ID of the scoring system metric this score fact belongs to
     */
    scoringSystemMetricId: RecordId;
  };
  type WorkflowStatusRelationshipInput = {
    id?: RecordId;
    /**
     * Change status to the status with this name
     */
    name?: string;
    /**
     * Change status to status with the category: 'initial', 'in_progress', 'done', 'shipped', 'will_not_implement'
     */
    category?: string;
  };
  type TeamWorkflowStatusRelationshipInput = {
    id?: RecordId;
    /**
     * Change status to the status with this name
     */
    name?: string;
    /**
     * Change status to status with the category: 'initial', 'in_progress', 'done', 'shipped', 'will_not_implement'
     */
    category?: string;
  };
  type UserRelationshipInput = {
    id?: RecordId;
    /**
     * Change user to the user with this name
     */
    name?: string;
    /**
     * Change user to the user with this email
     */
    email?: string;
  };
  type ReleaseRelationshipInput = {
    id?: RecordId;
  };
  type IterationRelationshipInput = {
    id?: RecordId;
  };
  type HasBookmarkPositionFilter = {
    bookmarkType:
      | PositionableRecordsBookmarkTypesEnum['value']
      | EnumValue<'PositionableRecordsBookmarkTypesEnum', any>;
    value: boolean;
  };
  type EpicFilters = {
    /**
     * Only show epics in active releases
     */
    active?: boolean;
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
    releaseId?: RecordId;
    teamId?: RecordId;
    iterationId?: RecordId;
    hasBookmarkPosition?: HasBookmarkPositionFilter;
  };
  type EpicOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: EpicOrder['value'] | EnumValue<'EpicOrder', any>;
  };
  type EpicRelationshipInput = {
    id?: RecordId;
  };
  type ExtensionContributionFilters = {
    id?: Array<RecordId> | RecordId;
    /**
     * Filters contributions by identifier. Example: 'aha-develop.github-import.issues'
     */
    identifier?: string;
    /**
     * Filters contributions by contribution type: 'commands', 'endpoints', 'events', 'importers', 'settings', 'views' or 'automationTriggers'
     */
    contributes?: string;
    /**
     * Include contributions that the current user has disabled
     */
    includeDisabled?: boolean;
  };
  type ExtensionRelationshipInput = {
    id?: RecordId;
  };
  type ExtensionFieldFilters = {
    name?: string;
    /**
     * Finds fields for the extension with the specified ID
     */
    extensionId?: RecordId;
    /**
     * Finds fields for the extension with the specified identifier. Example: 'aha-develop.github-import'
     */
    extensionIdentifier?: string;
  };
  type ExtensionFieldsFilters = {
    name?: string;
    names?: Array<string> | string;
    /**
     * The record type that the extension field belongs to.
     */
    extensionFieldableType:
      | ExtensionFieldableTypeEnum['value']
      | EnumValue<'ExtensionFieldableTypeEnum', any>;
    /**
     * Finds fields for the extension with the specified ID
     */
    extensionId?: RecordId;
    /**
     * Finds fields for the extension with the specified identifier. Example: 'aha-develop.github-import'
     */
    extensionIdentifier?: string;
  };
  type ExtensionLogFilters = {
    /**
     * Return only log lines after the specified date (in ISO8601 format)
     */
    createdSince?: string;
    extensionId?: RecordId;
    extensionContributionId?: RecordId;
    extensionInvocationId?: RecordId;
  };
  type ExtensionSettingAttributes = {
    /**
     * The identifier of the extension contribution controlling this setting
     */
    identifier: string;
    value?: any;
    /**
     * The scope to apply the extension to: 'account', 'user', or 'project'
     */
    scope: string;
    /**
     * For 'project' scope, the project the setting applies to
     */
    projectId?: RecordId;
  };
  type FeatureFilters = {
    /**
     * Only show features in active releases
     */
    active?: boolean;
    iterationId?: RecordId;
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
    teamId?: RecordId;
    releaseId?: RecordId;
    assignedToUserId?: RecordId;
    hasBookmarkPosition?: HasBookmarkPositionFilter;
  };
  type FeatureOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: FeatureOrder['value'] | EnumValue<'FeatureOrder', any>;
  };
  type FeatureRelationshipInput = {
    id?: RecordId;
  };
  type GoalFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
  };
  type GoalOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: GoalOrder['value'] | EnumValue<'GoalOrder', any>;
  };
  type IdeaFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
    assignedToUserId?: RecordId;
    /**
     * Filter ideas by whether they have been promoted
     */
    promoted?: boolean;
    workflowStatusId?: Array<RecordId> | RecordId;
    categoryId?: Array<RecordId> | RecordId;
    portalId?: Array<RecordId> | RecordId;
    query?: string;
  };
  type IdeaOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: IdeaOrder['value'] | EnumValue<'IdeaOrder', any>;
  };
  type InitiativeFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
  };
  type InitiativeOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: InitiativeOrder['value'] | EnumValue<'InitiativeOrder', any>;
  };
  type ProjectRelationshipInput = {
    id?: RecordId;
  };
  type IterationBurndownAttributes = {
    /**
     * Filters used to customize the burndown chart
     */
    filters?: any;
  };
  type IterationFilters = {
    projectId?: RecordId;
    programIncrementIterationId?: RecordId;
    /**
     * Limit to iterations in the specified statuses. PLANNING: 10, ACTIVE: 20, COMPLETE: 30
     */
    status?: Array<number> | number;
  };
  type IterationOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: IterationOrder['value'] | EnumValue<'IterationOrder', any>;
  };
  type LineBreakInput = {
    rank: number;
    title: string;
  };
  type PageParentRelationshipInput = {
    id?: RecordId;
  };
  type NoteTemplateFilters = {
    documentType?:
      | Array<DocumentTypeEnum['value'] | EnumValue<'DocumentTypeEnum', any>>
      | DocumentTypeEnum['value']
      | EnumValue<'DocumentTypeEnum', any>;
  };
  type NotificationFilters = {
    read?:
      | NotificationReadEnum['value']
      | EnumValue<'NotificationReadEnum', any>;
    starred?:
      | NotificationStarredEnum['value']
      | EnumValue<'NotificationStarredEnum', any>;
    projectId?: RecordId;
    type?:
      | Array<
          NotificationTypeEnum['value'] | EnumValue<'NotificationTypeEnum', any>
        >
      | NotificationTypeEnum['value']
      | EnumValue<'NotificationTypeEnum', any>;
  };
  type NotificationOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: NotificationOrder['value'] | EnumValue<'NotificationOrder', any>;
  };
  type PageFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
    documentDate?: string | Date;
    documentMonth?: string | Date;
    watched?: boolean;
    personal?: boolean;
    /**
     * Only return pages accessed after this datetime
     */
    accessedAfter?: string;
  };
  type PageOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: PageOrder['value'] | EnumValue<'PageOrder', any>;
  };
  type PageRelationshipInput = {
    id?: RecordId;
  };
  type PersonaFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
  };
  type PivotColumnWidthInput = {
    columnKey: string;
    /**
     * Width of the column in pixels
     */
    width: number;
  };
  type PlaceableRecordInput = {
    id: RecordId;
    typename:
      | PlaceableRecordTypeEnum['value']
      | EnumValue<'PlaceableRecordTypeEnum', any>;
  };
  type RecordReferenceInput = {
    id: RecordId;
    typename:
      | RecordReferenceTypeEnum['value']
      | EnumValue<'RecordReferenceTypeEnum', any>;
  };
  type RecordPlacementInput = {
    /**
     * The relative position used to reference the placement.
     */
    position:
      | RecordPlacementPositionEnum['value']
      | EnumValue<'RecordPlacementPositionEnum', any>;
    /**
     * When the placement is before or after a record, this record used as the relative reference position.
     */
    record?: RecordReferenceInput;
  };
  type PlaceRecordsInPositionAttributes = {
    /**
     * The type of bookmark this record is positioned in
     */
    bookmarkType: string;
    /**
     * The ID of the bookmark this record is positioned in
     */
    bookmarkId: RecordId;
    /**
     * The ID of the subgroup to use for position calculations. For example, records on the workflow board are ordered within their workflow status, so this will be their workflow status ID
     */
    secondaryScopeId: RecordId;
    /**
     * The records that will be placed
     */
    records?: Array<PlaceableRecordInput> | PlaceableRecordInput;
    /**
     * The relative placement of the record
     */
    placement: RecordPlacementInput;
  };
  type PriorityListAttributes = {
    /**
     * The in-order list of columns to be shown on the prioritized list
     */
    columns?: Array<string> | string;
    /**
     * Set to true to reset all filters
     */
    clearFilters?: boolean;
    /**
     * The widths of the report columns
     */
    columnWidths?: Array<PivotColumnWidthInput> | PivotColumnWidthInput;
    /**
     * The line breaks for the report
     */
    lineBreaks?: Array<LineBreakInput> | LineBreakInput;
  };
  type ProductValueChartAttributes = {
    /**
     * Filters used to customize the chart
     */
    filters?: any;
    /**
     * How to group records in the chart
     */
    dataGroup?: string;
    /**
     * How to group records in the chart
     */
    timeGroup?: string;
  };
  type ProgramBoardAttributes = {
    /**
     * Filters used to limit records on the board
     */
    filters?: any;
    programIncrementId?: RecordId;
    /**
     * Whether to show the collapsed card view or not
     */
    showCollapsedView?: boolean;
    /**
     * Whether to show dependency lines between records on the board
     */
    showDependencyLines?: boolean;
    cardLayout?: CardLayoutAttributes;
    sidebarSettings?: any;
  };
  type ProgramIncrementFilters = {
    projectId?: RecordId;
  };
  type ProgramIncrementIterationFilters = {
    programIncrementId?: RecordId;
  };
  type ProgramIncrementIterationOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name:
      | ProgramIncrementIterationOrder['value']
      | EnumValue<'ProgramIncrementIterationOrder', any>;
  };
  type ProgramIncrementOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name:
      | ProgramIncrementOrder['value']
      | EnumValue<'ProgramIncrementOrder', any>;
  };
  type ProgramIncrementRecordFilters = {
    iterationId?: RecordId;
  };
  type ProjectFilters = {
    id?: Array<RecordId> | RecordId;
    /**
     * Only show teams (true) or non-teams (false)
     */
    teams?: boolean;
  };
  type RecordEventSubjectFilter = {
    id?: RecordId;
    typename:
      | RecordEventSubjectEnum['value']
      | EnumValue<'RecordEventSubjectEnum', any>;
  };
  type RecordEventFilters = {
    /**
     * Filter events by a datetime range
     */
    createdAt?: DateTimeRangeFilter;
    /**
     * Only show events initiated by the given user
     */
    userId?: RecordId;
    /**
     * Only show events for the given event subject
     */
    eventSubject?: RecordEventSubjectFilter;
    /**
     * Only show events of the specified type
     */
    eventType?:
      | Array<
          RecordEventTypeEnum['value'] | EnumValue<'RecordEventTypeEnum', any>
        >
      | RecordEventTypeEnum['value']
      | EnumValue<'RecordEventTypeEnum', any>;
    /**
     * Filter events by containing iteration
     */
    iterationId?: Array<RecordId> | RecordId;
    /**
     * Filter events by containing release
     */
    releaseId?: RecordId;
    /**
     * Filter events by containing epic
     */
    epicId?: RecordId;
    /**
     * Filter events by containing feature
     */
    featureId?: RecordId;
    /**
     * Filter events to requirement
     */
    requirementId?: RecordId;
    /**
     * Filter events by containing team
     */
    teamId?: RecordId;
    /**
     * Filter to events associated with a workflow status
     */
    teamWorkflowStatusId?: RecordId;
    /**
     * Filter to events associated with an assigned user
     */
    assignedToUserId?: RecordId;
    /**
     * Filter to events with an estimation unit
     */
    units?: WorkUnitEnum['value'] | EnumValue<'WorkUnitEnum', any>;
    /**
     * Filter to events where the subject is not a feature using estimate from requirements
     */
    includeFeaturesUsingRequirementsEstimates?: boolean;
  };
  type RecordFilters = {
    /**
     * Only show records in active releases
     */
    active?: boolean;
    /**
     * Do not return old completed records
     */
    limitCompletedRecords?: boolean;
  };
  type RecordLinkFilters = {
    /**
     * The record link type
     */
    linkType?:
      | Array<
          RecordLinkTypeEnum['value'] | EnumValue<'RecordLinkTypeEnum', any>
        >
      | RecordLinkTypeEnum['value']
      | EnumValue<'RecordLinkTypeEnum', any>;
    /**
     * The linked record type
     */
    recordType?:
      | Array<
          | LinkableRecordTypesEnum['value']
          | EnumValue<'LinkableRecordTypesEnum', any>
        >
      | LinkableRecordTypesEnum['value']
      | EnumValue<'LinkableRecordTypesEnum', any>;
  };
  type RecordPositionAttributes = {
    /**
     * The type of bookmark this record is positioned in
     */
    bookmarkType: string;
    /**
     * The ID of the bookmark this record is positioned in
     */
    bookmarkId: RecordId;
    /**
     * The type of the record that will be positioned
     */
    recordType: string;
    /**
     * The ID of the record that will be positioned
     */
    recordId: RecordId;
    /**
     * The ID of the subgroup to use for position calculations. For example, records on the workflow board are ordered within their workflow status, so this will be their workflow status ID
     */
    secondaryScopeId: RecordId;
    /**
     * The type of record the positioned record will appear after
     */
    placeAfterType?: string;
    /**
     * The ID of the record the positioned record will appear after
     */
    placeAfterId?: RecordId;
    /**
     * The type of record the positioned record will appear before
     */
    placeBeforeType?: string;
    /**
     * The ID of the record the positioned record will appear after
     */
    placeBeforeId?: RecordId;
    /**
     * Places the record at the top or bottom position in a bookmark
     */
    placement?:
      | RecordPlacementEnum['value']
      | EnumValue<'RecordPlacementEnum', any>;
    /**
     * The rank to set the record to. Rank indexing is 1-based - meaning the first record is rank 1. Ranks below 1 will place the record at rank 1 and ranks above the number of scoped elements will place the record at the end. This method of updating is much slower than using place_before and place_after and you should avoid using this unless you do not have access to the next/prev records
     */
    rank?: number;
  };
  type RecordPositionFilters = {
    /**
     * Only return positions for this type of bookmark
     */
    bookmarkType?: Array<string> | string;
  };
  type ReleaseFilters = {
    id?: Array<RecordId> | RecordId;
    projectId?: RecordId;
    /**
     * Only return active releases
     */
    active?: boolean;
    /**
     * If true will only show parking lots, if false will only show non parking lots
     */
    parkingLot?: boolean;
    workflowStatusInternalMeanings?:
      | Array<InternalMeaning['value'] | EnumValue<'InternalMeaning', any>>
      | InternalMeaning['value']
      | EnumValue<'InternalMeaning', any>;
    /**
     * If true will only show releases with development started on
     */
    hasDevelopmentStartedOn?: boolean;
  };
  type ReleaseOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: ReleaseOrder['value'] | EnumValue<'ReleaseOrder', any>;
  };
  type ReleaseRetrospectiveAttributes = {
    /**
     * Filters used to customize the retrospective report
     */
    filters?: any;
    /**
     * If true, the develop promo will be hidden
     */
    hideDevelopPromo?: boolean;
  };
  type RequirementFilters = {
    /**
     * Only show requirements in active releases
     */
    active?: boolean;
    id?: Array<RecordId> | RecordId;
    releaseId?: RecordId;
    projectId?: RecordId;
    teamId?: RecordId;
    iterationId?: RecordId;
    assignedToUserId?: RecordId;
    hasBookmarkPosition?: HasBookmarkPositionFilter;
  };
  type RequirementOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: RequirementOrder['value'] | EnumValue<'RequirementOrder', any>;
  };
  type RetrospectiveReportAttributes = {
    /**
     * Filters used to customize the retrospective report
     */
    filters?: any;
  };
  type SetCustomFieldValueAttributes = {
    record: CustomFieldableInput;
    key: string;
    value?: any;
  };
  type SharedPageFilters = {
    pageId: RecordId;
    id?: Array<RecordId> | RecordId;
  };
  type SharedPageOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: SharedPageOrder['value'] | EnumValue<'SharedPageOrder', any>;
  };
  type TagFilters = {
    id?: Array<RecordId> | RecordId;
  };
  type TaskRelationshipInput = {
    id: RecordId;
    typename: string;
  };
  type TaskUserAssigneeStatusInput = {
    id: RecordId;
    status: string;
  };
  type TaskFilters = {
    id?: Array<RecordId> | RecordId;
    /**
     * Only include to-dos assigned to the current user. Defaults to true.
     */
    personal?: boolean;
    completed?: boolean;
    hasDueDate?: boolean;
    dueDate?: string | Date;
  };
  type TaskOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: TaskOrder['value'] | EnumValue<'TaskOrder', any>;
  };
  type TaskUserFilters = {
    taskId?: Array<RecordId> | RecordId;
    status?:
      | Array<TaskStatusEnum['value'] | EnumValue<'TaskStatusEnum', any>>
      | TaskStatusEnum['value']
      | EnumValue<'TaskStatusEnum', any>;
  };
  type TaskUserOrderClause = {
    /**
     * Sort direction
     */
    direction: OrderDirection['value'] | EnumValue<'OrderDirection', any>;
    /**
     * Sort type
     */
    name: TaskUserOrder['value'] | EnumValue<'TaskUserOrder', any>;
  };
  type ThroughputChartAttributes = {
    /**
     * Filters used to customize the chart
     */
    filters?: any;
    /**
     * How to group records in the chart
     */
    timeGroup?: string;
  };
  type TriggerExtensionAutomationRecordInput = {
    id: RecordId;
    typename:
      | ExtensionAutomationRecordEnum['value']
      | EnumValue<'ExtensionAutomationRecordEnum', any>;
  };
  type UnsetRecordPositionAttributes = {
    /**
     * The type of bookmark this record is positioned in
     */
    bookmarkType: string;
    /**
     * The ID of the bookmark this record is positioned in
     */
    bookmarkId: RecordId;
    /**
     * The type of the record that will be positioned
     */
    recordType: string;
    /**
     * The ID of the record that will be positioned
     */
    recordId: RecordId;
    /**
     * A secondary scope that records are positioned by
     */
    secondaryScopeId?: RecordId;
  };
  type UserFilters = {
    projectId?: RecordId;
    id?: Array<RecordId> | RecordId;
    /**
     * Include all users with access to the project including from further up the hierarchy
     */
    includeAll?: boolean;
  };
  type UserPreferenceFilters = {
    name?: Array<string> | string;
  };
  type VelocityChartAttributes = {
    /**
     * Filters used to customize the chart
     */
    filters?: any;
  };
  type WipLimitInput = {
    /**
     * The workflow status ID to apply the WIP limit to
     */
    workflowStatusId: RecordId;
    /**
     * The maximum number of records in a status before showing a WIP limit warning
     */
    limit: number;
  };
  type WorkRecordFilters = {
    teamId: RecordId;
    teamWorkflowStatusInternalMeanings?:
      | Array<InternalMeaning['value'] | EnumValue<'InternalMeaning', any>>
      | InternalMeaning['value']
      | EnumValue<'InternalMeaning', any>;
  };
  type WorkflowBoardAttributes = {
    /**
     * How to view the board: 'my_work', 'team_work', or 'none'
     */
    view?: string;
    /**
     * How to group records on the board
     */
    group?: string;
    /**
     * Whether to show the collapsed card view or not
     */
    showCollapsedView?: boolean;
    /**
     * Collapsed columns on the board
     */
    collapsedColumns?: Array<RecordId> | RecordId;
    /**
     * Filters used to limit records on the board
     */
    filters?: any;
    /**
     * Completed records older than this number of seconds are considered 'old' for purposes of hiding
     */
    completedLimit?: number;
    cardLayout?: CardLayoutAttributes;
    sidebarSettings?: any;
    showEmptySwimlanes?: boolean;
  };
  type WorkflowRelationshipInput = {
    id?: RecordId;
  };

  /**
   * Attributes for Account
   * @category Aha! Model Attributes
   */
  interface AccountAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;
  }

  type AccountQuery = Query<Account, never> & QueryFindable<Account>;

  /**
   * Account Aha! model
   *
   * An Aha! account
   *
   * Instance type: [[Account]]
   *
   * @category Aha! Model
   */
  interface AccountConstructor
    extends ApplicationModelConstructor<Account, never, AccountQuery> {}

  /**
   * Account Aha! model
   *
   * An Aha! account
   *
   * Constructor: [[AccountConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Account
    extends ApplicationModel,
      AccountAttributes,
      HasExtensionFields {
    readonly typename: 'Account';

    readonly query: AccountQuery;

    attributes: AccountAttributes;
  }

  /**
   * Attributes for AddPageTo
   * @category Aha! Model Attributes
   */
  interface AddPageToAttributes {
    /**
     * Add page to presentation path
     */
    readonly addToPresentationPath: string;

    /**
     * Add page to whiteboard as image path
     */
    readonly addToWhiteboardAsImagePath: string;
  }

  type AddPageToQuery = Query<AddPageTo, never>;

  /**
   * AddPageTo Aha! model
   *
   * Paths to add page to presentation or whiteboard
   *
   * Instance type: [[AddPageTo]]
   *
   * @category Aha! Model
   */
  interface AddPageToConstructor
    extends ApplicationModelConstructor<AddPageTo, never, AddPageToQuery> {}

  /**
   * AddPageTo Aha! model
   *
   * Paths to add page to presentation or whiteboard
   *
   * Constructor: [[AddPageToConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface AddPageTo extends ApplicationModel, AddPageToAttributes {
    readonly typename: 'AddPageTo';

    readonly query: AddPageToQuery;

    attributes: AddPageToAttributes;
  }

  /**
   * Attributes for AiRequest
   * @category Aha! Model Attributes
   */
  interface AiRequestAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    readonly inputs: any;

    readonly kind: AiRequestKindEnum['value'];

    readonly updatedAt: string;
  }

  type AiRequestQuery = Query<AiRequest, AiRequestFilters> &
    QueryFindable<AiRequest> &
    QueryListable<AiRequest>;

  /**
   * AiRequest Aha! model
   *
   * A log of an AI request
   *
   * Instance type: [[AiRequest]]
   *
   * @category Aha! Model
   */
  interface AiRequestConstructor
    extends ApplicationModelConstructor<
      AiRequest,
      AiRequestFilters,
      AiRequestQuery
    > {}

  /**
   * AiRequest Aha! model
   *
   * A log of an AI request
   *
   * Constructor: [[AiRequestConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface AiRequest extends ApplicationModel, AiRequestAttributes {
    readonly typename: 'AiRequest';

    readonly query: AiRequestQuery;

    attributes: AiRequestAttributes;

    order: AiRequestOrder['value'];
  }

  /**
   * Attributes for Attachment
   * @category Aha! Model Attributes
   */
  interface AttachmentAttributes {
    /**
     * Content type
     */
    readonly contentType: string;

    readonly createdAt: string;

    /**
     * The url for accessing the file data
     */
    readonly downloadUrl: string;

    /**
     * File name
     */
    readonly fileName: string;

    /**
     * File size
     */
    readonly fileSize: number;

    readonly id: RecordId;

    readonly updatedAt: string;

    /**
     * The object this file is attached to
     */
    readonly attachable: AttachmentSubjectUnion;

    /**
     * A caption for the attachment
     */
    readonly caption: Note;

    readonly permissions: ResourcePermissions;
  }

  type AttachmentQuery = Query<Attachment, never> & QueryFindable<Attachment>;

  /**
   * Attachment Aha! model
   *
   * A file attachment
   *
   * Instance type: [[Attachment]]
   *
   * @category Aha! Model
   */
  interface AttachmentConstructor
    extends ApplicationModelConstructor<Attachment, never, AttachmentQuery> {}

  /**
   * Attachment Aha! model
   *
   * A file attachment
   *
   * Constructor: [[AttachmentConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Attachment extends ApplicationModel, AttachmentAttributes {
    readonly typename: 'Attachment';

    readonly query: AttachmentQuery;

    attributes: AttachmentAttributes;
  }

  /**
   * Attributes for Bookmark
   * @category Aha! Model Attributes
   */
  interface BookmarkAttributes {
    readonly createdAt: string;

    /**
     * Filters applied to the bookmark
     */
    filters: any;

    readonly id: RecordId;

    /**
     * Name of the bookmark, if saved
     */
    readonly name: string;

    /**
     * Whether to show the collapsed card view or not, for bookmarks that support it
     */
    showCollapsedView: boolean;

    /**
     * Settings for the sidebar, for bookmarks that support it
     */
    sidebarSettings: any;

    readonly updatedAt: string;

    /**
     * The card layouts for this object
     */
    cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    readonly permissions: ResourcePermissions;
  }

  type BookmarkQuery = Query<Bookmark, never> & QueryFindable<Bookmark>;

  /**
   * Bookmark Aha! model
   *
   * A record that represents common bookmark data
   *
   * Instance type: [[Bookmark]]
   *
   * @category Aha! Model
   */
  interface BookmarkConstructor
    extends ApplicationModelConstructor<Bookmark, never, BookmarkQuery> {}

  /**
   * Bookmark Aha! model
   *
   * A record that represents common bookmark data
   *
   * Constructor: [[BookmarkConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Bookmark extends ApplicationModel, BookmarkAttributes {
    readonly typename: 'Bookmark';

    readonly query: BookmarkQuery;

    attributes: BookmarkAttributes;
  }

  /**
   * Attributes for BookmarksCycleTimeChart
   * @category Aha! Model Attributes
   */
  interface BookmarksCycleTimeChartAttributes {
    /**
     * Currently active filters for the chart
     */
    filters: any;

    readonly id: RecordId;

    /**
     * The project or team id for the chart
     */
    readonly projectId: RecordId;

    /**
     * The project or team for the chart
     */
    readonly project: Project;
  }

  type BookmarksCycleTimeChartQuery = Query<BookmarksCycleTimeChart, never> &
    QueryFindable<BookmarksCycleTimeChart>;

  /**
   * BookmarksCycleTimeChart Aha! model
   *
   *
   *
   * Instance type: [[BookmarksCycleTimeChart]]
   *
   * @category Aha! Model
   */
  interface BookmarksCycleTimeChartConstructor
    extends ApplicationModelConstructor<
      BookmarksCycleTimeChart,
      never,
      BookmarksCycleTimeChartQuery
    > {
    readonly bookmarkName: 'Bookmarks::CycleTimeChart';
  }

  /**
   * BookmarksCycleTimeChart Aha! model
   *
   *
   *
   * Constructor: [[BookmarksCycleTimeChartConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksCycleTimeChart
    extends ApplicationModel,
      BookmarksCycleTimeChartAttributes {
    readonly typename: 'BookmarksCycleTimeChart';

    readonly query: BookmarksCycleTimeChartQuery;

    attributes: BookmarksCycleTimeChartAttributes;
  }

  /**
   * Attributes for BookmarksDeliveryRisksChart
   * @category Aha! Model Attributes
   */
  interface BookmarksDeliveryRisksChartAttributes {
    /**
     * How to group the records
     */
    dataGroup: string;

    /**
     * Currently active filters for the chart
     */
    filters: any;

    readonly id: RecordId;

    readonly projectId: RecordId;

    /**
     * The project or team for the chart
     */
    readonly project: Project;
  }

  type BookmarksDeliveryRisksChartQuery = Query<
    BookmarksDeliveryRisksChart,
    never
  > &
    QueryFindable<BookmarksDeliveryRisksChart>;

  /**
   * BookmarksDeliveryRisksChart Aha! model
   *
   *
   *
   * Instance type: [[BookmarksDeliveryRisksChart]]
   *
   * @category Aha! Model
   */
  interface BookmarksDeliveryRisksChartConstructor
    extends ApplicationModelConstructor<
      BookmarksDeliveryRisksChart,
      never,
      BookmarksDeliveryRisksChartQuery
    > {
    readonly bookmarkName: 'Bookmarks::DeliveryRisksChart';
  }

  /**
   * BookmarksDeliveryRisksChart Aha! model
   *
   *
   *
   * Constructor: [[BookmarksDeliveryRisksChartConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksDeliveryRisksChart
    extends ApplicationModel,
      BookmarksDeliveryRisksChartAttributes {
    readonly typename: 'BookmarksDeliveryRisksChart';

    readonly query: BookmarksDeliveryRisksChartQuery;

    attributes: BookmarksDeliveryRisksChartAttributes;
  }

  /**
   * Attributes for BookmarksEpicPriorityList
   * @category Aha! Model Attributes
   */
  interface BookmarksEpicPriorityListAttributes {
    readonly advancedFilters: boolean;

    /**
     * advanced filters
     */
    readonly advancedFiltersParsed: any;

    /**
     * Column tables used for the edit columns wizard
     */
    readonly columnTables: any;

    /**
     * Currently active filters for unprioritized records
     */
    readonly filters: Array<any>;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    /**
     * Joins used for the edit columns wizard
     */
    readonly joins: any;

    readonly projectId: RecordId;

    /**
     * Count of all positioned records belonging to the bookmark
     */
    readonly totalPrioritizedRecords: number;

    /**
     * Count of all unprioritized records that the bookmark can access
     */
    readonly totalUnprioritizedRecords: number;

    /**
     * If user has access to publish ranks for the report
     */
    readonly userAllowedToPublishRanks: boolean;

    /**
     * The card layouts for this object
     */
    readonly cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * Last custom field that the currently logged in user published ranks to
     */
    readonly lastPublishedField: CustomFieldDefinition;

    readonly prioritizedRow: PivotRow;

    /**
     * Row of user specified data that represents a prioritized record
     */
    readonly prioritizedRows: PivotRowPage;

    /**
     * Project this bookmarks_epic_priority_list belongs to, if present
     */
    readonly project: Project;

    /**
     * Column widths for rendering the report
     */
    columnWidths: Array<PivotColumnWidth>;

    /**
     * Columns to be displayed in the prioritized section
     */
    columns: Array<PivotColumn>;

    /**
     * Line breaks in the priority list
     */
    lineBreaks: Array<LineBreak>;

    /**
     * List of available custom fields to publish ranks to
     */
    readonly publishableCustomFields: Array<CustomFieldDefinition>;

    /**
     * Scoring system metrics associated with projects included in the bookmark
     */
    readonly scoringSystemMetrics: Array<ScoringSystemMetric>;

    /**
     * List of unprioritized records to display on the page
     */
    readonly unprioritizedRecords: Array<PrioritizableRecordUnion>;
  }

  type BookmarksEpicPriorityListQuery = Query<
    BookmarksEpicPriorityList,
    never
  > &
    QueryFindable<BookmarksEpicPriorityList>;

  /**
   * BookmarksEpicPriorityList Aha! model
   *
   *
   *
   * Instance type: [[BookmarksEpicPriorityList]]
   *
   * @category Aha! Model
   */
  interface BookmarksEpicPriorityListConstructor
    extends ApplicationModelConstructor<
      BookmarksEpicPriorityList,
      never,
      BookmarksEpicPriorityListQuery
    > {
    readonly bookmarkName: 'Bookmarks::EpicPriorityList';
  }

  /**
   * BookmarksEpicPriorityList Aha! model
   *
   *
   *
   * Constructor: [[BookmarksEpicPriorityListConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksEpicPriorityList
    extends ApplicationModel,
      BookmarksEpicPriorityListAttributes {
    readonly typename: 'BookmarksEpicPriorityList';

    readonly query: BookmarksEpicPriorityListQuery;

    attributes: BookmarksEpicPriorityListAttributes;
  }

  /**
   * Attributes for BookmarksFeaturePriorityList
   * @category Aha! Model Attributes
   */
  interface BookmarksFeaturePriorityListAttributes {
    readonly advancedFilters: boolean;

    /**
     * advanced filters
     */
    readonly advancedFiltersParsed: any;

    /**
     * Column tables used for the edit columns wizard
     */
    readonly columnTables: any;

    /**
     * Currently active filters for unprioritized records
     */
    readonly filters: Array<any>;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    /**
     * Joins used for the edit columns wizard
     */
    readonly joins: any;

    readonly projectId: RecordId;

    /**
     * Count of all positioned records belonging to the bookmark
     */
    readonly totalPrioritizedRecords: number;

    /**
     * Count of all unprioritized records that the bookmark can access
     */
    readonly totalUnprioritizedRecords: number;

    /**
     * If user has access to publish ranks for the report
     */
    readonly userAllowedToPublishRanks: boolean;

    /**
     * The card layouts for this object
     */
    readonly cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * Last custom field that the currently logged in user published ranks to
     */
    readonly lastPublishedField: CustomFieldDefinition;

    readonly prioritizedRow: PivotRow;

    /**
     * Row of user specified data that represents a prioritized record
     */
    readonly prioritizedRows: PivotRowPage;

    /**
     * Project this bookmarks_feature_priority_list belongs to, if present
     */
    readonly project: Project;

    /**
     * Column widths for rendering the report
     */
    columnWidths: Array<PivotColumnWidth>;

    /**
     * Columns to be displayed in the prioritized section
     */
    columns: Array<PivotColumn>;

    /**
     * Line breaks in the priority list
     */
    lineBreaks: Array<LineBreak>;

    /**
     * List of available custom fields to publish ranks to
     */
    readonly publishableCustomFields: Array<CustomFieldDefinition>;

    /**
     * Scoring system metrics associated with projects included in the bookmark
     */
    readonly scoringSystemMetrics: Array<ScoringSystemMetric>;

    /**
     * List of unprioritized records to display on the page
     */
    readonly unprioritizedRecords: Array<PrioritizableRecordUnion>;
  }

  type BookmarksFeaturePriorityListQuery = Query<
    BookmarksFeaturePriorityList,
    never
  > &
    QueryFindable<BookmarksFeaturePriorityList>;

  /**
   * BookmarksFeaturePriorityList Aha! model
   *
   *
   *
   * Instance type: [[BookmarksFeaturePriorityList]]
   *
   * @category Aha! Model
   */
  interface BookmarksFeaturePriorityListConstructor
    extends ApplicationModelConstructor<
      BookmarksFeaturePriorityList,
      never,
      BookmarksFeaturePriorityListQuery
    > {
    readonly bookmarkName: 'Bookmarks::FeaturePriorityList';
  }

  /**
   * BookmarksFeaturePriorityList Aha! model
   *
   *
   *
   * Constructor: [[BookmarksFeaturePriorityListConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksFeaturePriorityList
    extends ApplicationModel,
      BookmarksFeaturePriorityListAttributes {
    readonly typename: 'BookmarksFeaturePriorityList';

    readonly query: BookmarksFeaturePriorityListQuery;

    attributes: BookmarksFeaturePriorityListAttributes;
  }

  /**
   * Attributes for BookmarksIdeaPriorityList
   * @category Aha! Model Attributes
   */
  interface BookmarksIdeaPriorityListAttributes {
    readonly advancedFilters: boolean;

    /**
     * advanced filters
     */
    readonly advancedFiltersParsed: any;

    /**
     * Column tables used for the edit columns wizard
     */
    readonly columnTables: any;

    /**
     * Currently active filters for unprioritized records
     */
    readonly filters: Array<any>;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    /**
     * Joins used for the edit columns wizard
     */
    readonly joins: any;

    readonly projectId: RecordId;

    /**
     * Count of all positioned records belonging to the bookmark
     */
    readonly totalPrioritizedRecords: number;

    /**
     * Count of all unprioritized records that the bookmark can access
     */
    readonly totalUnprioritizedRecords: number;

    /**
     * If user has access to publish ranks for the report
     */
    readonly userAllowedToPublishRanks: boolean;

    /**
     * Last custom field that the currently logged in user published ranks to
     */
    readonly lastPublishedField: CustomFieldDefinition;

    readonly prioritizedRow: PivotRow;

    /**
     * Row of user specified data that represents a prioritized record
     */
    readonly prioritizedRows: PivotRowPage;

    /**
     * Project this bookmarks_idea_priority_list belongs to, if present
     */
    readonly project: Project;

    /**
     * Column widths for rendering the report
     */
    columnWidths: Array<PivotColumnWidth>;

    /**
     * Columns to be displayed in the prioritized section
     */
    columns: Array<PivotColumn>;

    /**
     * Line breaks in the priority list
     */
    lineBreaks: Array<LineBreak>;

    /**
     * List of available custom fields to publish ranks to
     */
    readonly publishableCustomFields: Array<CustomFieldDefinition>;

    /**
     * Scoring system metrics associated with projects included in the bookmark
     */
    readonly scoringSystemMetrics: Array<ScoringSystemMetric>;

    /**
     * List of unprioritized records to display on the page
     */
    readonly unprioritizedRecords: Array<PrioritizableRecordUnion>;
  }

  type BookmarksIdeaPriorityListQuery = Query<
    BookmarksIdeaPriorityList,
    never
  > &
    QueryFindable<BookmarksIdeaPriorityList>;

  /**
   * BookmarksIdeaPriorityList Aha! model
   *
   *
   *
   * Instance type: [[BookmarksIdeaPriorityList]]
   *
   * @category Aha! Model
   */
  interface BookmarksIdeaPriorityListConstructor
    extends ApplicationModelConstructor<
      BookmarksIdeaPriorityList,
      never,
      BookmarksIdeaPriorityListQuery
    > {
    readonly bookmarkName: 'Bookmarks::IdeaPriorityList';
  }

  /**
   * BookmarksIdeaPriorityList Aha! model
   *
   *
   *
   * Constructor: [[BookmarksIdeaPriorityListConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksIdeaPriorityList
    extends ApplicationModel,
      BookmarksIdeaPriorityListAttributes {
    readonly typename: 'BookmarksIdeaPriorityList';

    readonly query: BookmarksIdeaPriorityListQuery;

    attributes: BookmarksIdeaPriorityListAttributes;
  }

  /**
   * Attributes for BookmarksInitiativePriorityList
   * @category Aha! Model Attributes
   */
  interface BookmarksInitiativePriorityListAttributes {
    readonly advancedFilters: boolean;

    /**
     * advanced filters
     */
    readonly advancedFiltersParsed: any;

    /**
     * Column tables used for the edit columns wizard
     */
    readonly columnTables: any;

    /**
     * Currently active filters for unprioritized records
     */
    readonly filters: Array<any>;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    /**
     * Joins used for the edit columns wizard
     */
    readonly joins: any;

    readonly projectId: RecordId;

    /**
     * Count of all positioned records belonging to the bookmark
     */
    readonly totalPrioritizedRecords: number;

    /**
     * Count of all unprioritized records that the bookmark can access
     */
    readonly totalUnprioritizedRecords: number;

    /**
     * If user has access to publish ranks for the report
     */
    readonly userAllowedToPublishRanks: boolean;

    /**
     * The card layouts for this object
     */
    readonly cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * Last custom field that the currently logged in user published ranks to
     */
    readonly lastPublishedField: CustomFieldDefinition;

    readonly prioritizedRow: PivotRow;

    /**
     * Row of user specified data that represents a prioritized record
     */
    readonly prioritizedRows: PivotRowPage;

    /**
     * Project this bookmarks_initiative_priority_list belongs to, if present
     */
    readonly project: Project;

    /**
     * Column widths for rendering the report
     */
    columnWidths: Array<PivotColumnWidth>;

    /**
     * Columns to be displayed in the prioritized section
     */
    columns: Array<PivotColumn>;

    /**
     * Line breaks in the priority list
     */
    lineBreaks: Array<LineBreak>;

    /**
     * List of available custom fields to publish ranks to
     */
    readonly publishableCustomFields: Array<CustomFieldDefinition>;

    /**
     * Scoring system metrics associated with projects included in the bookmark
     */
    readonly scoringSystemMetrics: Array<ScoringSystemMetric>;

    /**
     * List of unprioritized records to display on the page
     */
    readonly unprioritizedRecords: Array<PrioritizableRecordUnion>;
  }

  type BookmarksInitiativePriorityListQuery = Query<
    BookmarksInitiativePriorityList,
    never
  > &
    QueryFindable<BookmarksInitiativePriorityList>;

  /**
   * BookmarksInitiativePriorityList Aha! model
   *
   *
   *
   * Instance type: [[BookmarksInitiativePriorityList]]
   *
   * @category Aha! Model
   */
  interface BookmarksInitiativePriorityListConstructor
    extends ApplicationModelConstructor<
      BookmarksInitiativePriorityList,
      never,
      BookmarksInitiativePriorityListQuery
    > {
    readonly bookmarkName: 'Bookmarks::InitiativePriorityList';
  }

  /**
   * BookmarksInitiativePriorityList Aha! model
   *
   *
   *
   * Constructor: [[BookmarksInitiativePriorityListConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksInitiativePriorityList
    extends ApplicationModel,
      BookmarksInitiativePriorityListAttributes {
    readonly typename: 'BookmarksInitiativePriorityList';

    readonly query: BookmarksInitiativePriorityListQuery;

    attributes: BookmarksInitiativePriorityListAttributes;
  }

  /**
   * Attributes for BookmarksIterationBurndown
   * @category Aha! Model Attributes
   */
  interface BookmarksIterationBurndownAttributes {
    /**
     * Currently active filters on the board
     */
    filters: any;

    readonly id: RecordId;

    /**
     * The project or team id whose records appear on this board
     */
    readonly projectId: RecordId;

    /**
     * The project or team whose records appear on this board
     */
    readonly project: Project;
  }

  type BookmarksIterationBurndownQuery = Query<
    BookmarksIterationBurndown,
    never
  > &
    QueryFindable<BookmarksIterationBurndown>;

  /**
   * BookmarksIterationBurndown Aha! model
   *
   *
   *
   * Instance type: [[BookmarksIterationBurndown]]
   *
   * @category Aha! Model
   */
  interface BookmarksIterationBurndownConstructor
    extends ApplicationModelConstructor<
      BookmarksIterationBurndown,
      never,
      BookmarksIterationBurndownQuery
    > {
    readonly bookmarkName: 'Bookmarks::IterationBurndown';
  }

  /**
   * BookmarksIterationBurndown Aha! model
   *
   *
   *
   * Constructor: [[BookmarksIterationBurndownConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksIterationBurndown
    extends ApplicationModel,
      BookmarksIterationBurndownAttributes {
    readonly typename: 'BookmarksIterationBurndown';

    readonly query: BookmarksIterationBurndownQuery;

    attributes: BookmarksIterationBurndownAttributes;
  }

  /**
   * Attributes for BookmarksProductValueChart
   * @category Aha! Model Attributes
   */
  interface BookmarksProductValueChartAttributes {
    /**
     * How to group the records
     */
    dataGroup: string;

    /**
     * Currently active filters for the chart
     */
    filters: any;

    readonly id: RecordId;

    readonly projectId: RecordId;

    /**
     * How to group the time axis of the chart
     */
    timeGroup: string;

    /**
     * The project or team for the chart
     */
    readonly project: Project;
  }

  type BookmarksProductValueChartQuery = Query<
    BookmarksProductValueChart,
    never
  > &
    QueryFindable<BookmarksProductValueChart>;

  /**
   * BookmarksProductValueChart Aha! model
   *
   *
   *
   * Instance type: [[BookmarksProductValueChart]]
   *
   * @category Aha! Model
   */
  interface BookmarksProductValueChartConstructor
    extends ApplicationModelConstructor<
      BookmarksProductValueChart,
      never,
      BookmarksProductValueChartQuery
    > {
    readonly bookmarkName: 'Bookmarks::ProductValueChart';
  }

  /**
   * BookmarksProductValueChart Aha! model
   *
   *
   *
   * Constructor: [[BookmarksProductValueChartConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksProductValueChart
    extends ApplicationModel,
      BookmarksProductValueChartAttributes {
    readonly typename: 'BookmarksProductValueChart';

    readonly query: BookmarksProductValueChartQuery;

    attributes: BookmarksProductValueChartAttributes;
  }

  /**
   * Attributes for BookmarksProgramBoard
   * @category Aha! Model Attributes
   */
  interface BookmarksProgramBoardAttributes {
    /**
     * Currently active filters on the board
     */
    filters: any;

    readonly id: RecordId;

    /**
     * The number of iterations
     */
    readonly iterationsCount: number;

    programIncrementId: RecordId;

    readonly projectId: RecordId;

    /**
     * Whether to show the collapsed card view or not
     */
    showCollapsedView: boolean;

    /**
     * Whether to show dependency lines between records on the board
     */
    showDependencyLines: boolean;

    /**
     * Settings for the sidebar, for bookmarks that support it
     */
    sidebarSettings: any;

    /**
     * The card layouts for this object
     */
    cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * ProgramIncrement this bookmarks_program_board belongs to, if present
     */
    readonly programIncrement: ProgramIncrement;

    /**
     * Project this bookmarks_program_board belongs to
     */
    readonly project: Project;

    /**
     * Iterations
     */
    readonly iterations: Array<Iteration>;

    readonly records: Array<RecordUnion>;
  }

  type BookmarksProgramBoardQuery = Query<BookmarksProgramBoard, never> &
    QueryFindable<BookmarksProgramBoard>;

  /**
   * BookmarksProgramBoard Aha! model
   *
   * A program board for managing work in a program increment
   *
   * Instance type: [[BookmarksProgramBoard]]
   *
   * @category Aha! Model
   */
  interface BookmarksProgramBoardConstructor
    extends ApplicationModelConstructor<
      BookmarksProgramBoard,
      never,
      BookmarksProgramBoardQuery
    > {
    readonly bookmarkName: 'Bookmarks::ProgramBoard';
  }

  /**
   * BookmarksProgramBoard Aha! model
   *
   * A program board for managing work in a program increment
   *
   * Constructor: [[BookmarksProgramBoardConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksProgramBoard
    extends ApplicationModel,
      BookmarksProgramBoardAttributes {
    readonly typename: 'BookmarksProgramBoard';

    readonly query: BookmarksProgramBoardQuery;

    attributes: BookmarksProgramBoardAttributes;
  }

  /**
   * Attributes for BookmarksRecordPosition
   * @category Aha! Model Attributes
   */
  interface BookmarksRecordPositionAttributes {
    /**
     * The type of bookmark this position applies to. For example: 'Iteration', 'Bookmarks::WorkflowBoard'
     */
    bookmarkType: string;

    readonly id: RecordId;

    /**
     * The position of the record. Smaller / more negative is higher.
     */
    readonly position: number;

    recordId: RecordId;

    recordType: string;

    readonly secondaryScope: RecordId;
  }

  type BookmarksRecordPositionQuery = Query<BookmarksRecordPosition, never> &
    QueryFindable<BookmarksRecordPosition>;

  /**
   * BookmarksRecordPosition Aha! model
   *
   * The position of a record in a specific bookmark type. This is used to sort records in different ways when they belong to different views.
   *
   * Instance type: [[BookmarksRecordPosition]]
   *
   * @category Aha! Model
   */
  interface BookmarksRecordPositionConstructor
    extends ApplicationModelConstructor<
      BookmarksRecordPosition,
      never,
      BookmarksRecordPositionQuery
    > {
    readonly bookmarkName: 'Bookmarks::RecordPosition';
  }

  /**
   * BookmarksRecordPosition Aha! model
   *
   * The position of a record in a specific bookmark type. This is used to sort records in different ways when they belong to different views.
   *
   * Constructor: [[BookmarksRecordPositionConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksRecordPosition
    extends ApplicationModel,
      BookmarksRecordPositionAttributes {
    readonly typename: 'BookmarksRecordPosition';

    readonly query: BookmarksRecordPositionQuery;

    attributes: BookmarksRecordPositionAttributes;
  }

  /**
   * Attributes for BookmarksReleaseRetrospective
   * @category Aha! Model Attributes
   */
  interface BookmarksReleaseRetrospectiveAttributes {
    /**
     * Currently active filters on the board
     */
    filters: any;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    readonly projectId: RecordId;

    /**
     * The project or team whose records appear on this board
     */
    readonly project: Project;

    readonly burndownEvents: Array<ReleaseBurndownEvent>;

    /**
     * Retrospective data
     */
    readonly recordData: Array<ReleaseRetrospectiveRecord>;

    /**
     * Release date history
     */
    readonly releaseDateHistory: Array<ReleaseDateHistory>;

    /**
     * Team data
     */
    readonly teamData: Array<ReleaseRetrospectiveTeam>;

    /**
     * Collection of teams for the retro
     */
    readonly teams: Array<Project>;

    /**
     * Tooltip data
     */
    readonly tooltipData: Array<RecordEventRaw>;

    /**
     * Collection of users for the retro
     */
    readonly users: Array<User>;
  }

  type BookmarksReleaseRetrospectiveQuery = Query<
    BookmarksReleaseRetrospective,
    never
  > &
    QueryFindable<BookmarksReleaseRetrospective>;

  /**
   * BookmarksReleaseRetrospective Aha! model
   *
   *
   *
   * Instance type: [[BookmarksReleaseRetrospective]]
   *
   * @category Aha! Model
   */
  interface BookmarksReleaseRetrospectiveConstructor
    extends ApplicationModelConstructor<
      BookmarksReleaseRetrospective,
      never,
      BookmarksReleaseRetrospectiveQuery
    > {
    readonly bookmarkName: 'Bookmarks::ReleaseRetrospective';
  }

  /**
   * BookmarksReleaseRetrospective Aha! model
   *
   *
   *
   * Constructor: [[BookmarksReleaseRetrospectiveConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksReleaseRetrospective
    extends ApplicationModel,
      BookmarksReleaseRetrospectiveAttributes {
    readonly typename: 'BookmarksReleaseRetrospective';

    readonly query: BookmarksReleaseRetrospectiveQuery;

    attributes: BookmarksReleaseRetrospectiveAttributes;
  }

  /**
   * Attributes for BookmarksRetrospectiveReport
   * @category Aha! Model Attributes
   */
  interface BookmarksRetrospectiveReportAttributes {
    /**
     * Currently active filters on the board
     */
    filters: any;

    /**
     * ID of the bookmark
     */
    readonly id: RecordId;

    readonly projectId: RecordId;

    /**
     * The project or team whose records appear on this board
     */
    readonly project: Project;
  }

  type BookmarksRetrospectiveReportQuery = Query<
    BookmarksRetrospectiveReport,
    never
  > &
    QueryFindable<BookmarksRetrospectiveReport>;

  /**
   * BookmarksRetrospectiveReport Aha! model
   *
   *
   *
   * Instance type: [[BookmarksRetrospectiveReport]]
   *
   * @category Aha! Model
   */
  interface BookmarksRetrospectiveReportConstructor
    extends ApplicationModelConstructor<
      BookmarksRetrospectiveReport,
      never,
      BookmarksRetrospectiveReportQuery
    > {
    readonly bookmarkName: 'Bookmarks::RetrospectiveReport';
  }

  /**
   * BookmarksRetrospectiveReport Aha! model
   *
   *
   *
   * Constructor: [[BookmarksRetrospectiveReportConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksRetrospectiveReport
    extends ApplicationModel,
      BookmarksRetrospectiveReportAttributes {
    readonly typename: 'BookmarksRetrospectiveReport';

    readonly query: BookmarksRetrospectiveReportQuery;

    attributes: BookmarksRetrospectiveReportAttributes;
  }

  /**
   * Attributes for BookmarksTeamBacklog
   * @category Aha! Model Attributes
   */
  interface BookmarksTeamBacklogAttributes {
    readonly id: RecordId;

    /**
     * The project / team this backlog applies to
     */
    readonly projectId: RecordId;

    readonly records: Array<RecordUnion>;
  }

  type BookmarksTeamBacklogQuery = Query<BookmarksTeamBacklog, never> &
    QueryFindable<BookmarksTeamBacklog>;

  /**
   * BookmarksTeamBacklog Aha! model
   *
   * A reorderable backlog for a team
   *
   * Instance type: [[BookmarksTeamBacklog]]
   *
   * @category Aha! Model
   */
  interface BookmarksTeamBacklogConstructor
    extends ApplicationModelConstructor<
      BookmarksTeamBacklog,
      never,
      BookmarksTeamBacklogQuery
    > {
    readonly bookmarkName: 'Bookmarks::TeamBacklog';
  }

  /**
   * BookmarksTeamBacklog Aha! model
   *
   * A reorderable backlog for a team
   *
   * Constructor: [[BookmarksTeamBacklogConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksTeamBacklog
    extends ApplicationModel,
      BookmarksTeamBacklogAttributes {
    readonly typename: 'BookmarksTeamBacklog';

    readonly query: BookmarksTeamBacklogQuery;

    attributes: BookmarksTeamBacklogAttributes;
  }

  /**
   * Attributes for BookmarksThroughputChart
   * @category Aha! Model Attributes
   */
  interface BookmarksThroughputChartAttributes {
    /**
     * Currently active filters for the chart
     */
    filters: any;

    readonly id: RecordId;

    /**
     * The project or team id for the chart
     */
    readonly projectId: RecordId;

    /**
     * How to group the time axis of the chart
     */
    timeGroup: string;

    /**
     * The project or team for the chart
     */
    readonly project: Project;
  }

  type BookmarksThroughputChartQuery = Query<BookmarksThroughputChart, never> &
    QueryFindable<BookmarksThroughputChart>;

  /**
   * BookmarksThroughputChart Aha! model
   *
   *
   *
   * Instance type: [[BookmarksThroughputChart]]
   *
   * @category Aha! Model
   */
  interface BookmarksThroughputChartConstructor
    extends ApplicationModelConstructor<
      BookmarksThroughputChart,
      never,
      BookmarksThroughputChartQuery
    > {
    readonly bookmarkName: 'Bookmarks::ThroughputChart';
  }

  /**
   * BookmarksThroughputChart Aha! model
   *
   *
   *
   * Constructor: [[BookmarksThroughputChartConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksThroughputChart
    extends ApplicationModel,
      BookmarksThroughputChartAttributes {
    readonly typename: 'BookmarksThroughputChart';

    readonly query: BookmarksThroughputChartQuery;

    attributes: BookmarksThroughputChartAttributes;
  }

  /**
   * Attributes for BookmarksVelocityChart
   * @category Aha! Model Attributes
   */
  interface BookmarksVelocityChartAttributes {
    /**
     * Currently active filters for the chart
     */
    filters: any;

    readonly id: RecordId;

    /**
     * The project or team id for the chart
     */
    readonly projectId: RecordId;

    /**
     * The project or team for the chart
     */
    readonly project: Project;
  }

  type BookmarksVelocityChartQuery = Query<BookmarksVelocityChart, never> &
    QueryFindable<BookmarksVelocityChart>;

  /**
   * BookmarksVelocityChart Aha! model
   *
   *
   *
   * Instance type: [[BookmarksVelocityChart]]
   *
   * @category Aha! Model
   */
  interface BookmarksVelocityChartConstructor
    extends ApplicationModelConstructor<
      BookmarksVelocityChart,
      never,
      BookmarksVelocityChartQuery
    > {
    readonly bookmarkName: 'Bookmarks::VelocityChart';
  }

  /**
   * BookmarksVelocityChart Aha! model
   *
   *
   *
   * Constructor: [[BookmarksVelocityChartConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksVelocityChart
    extends ApplicationModel,
      BookmarksVelocityChartAttributes {
    readonly typename: 'BookmarksVelocityChart';

    readonly query: BookmarksVelocityChartQuery;

    attributes: BookmarksVelocityChartAttributes;
  }

  /**
   * Attributes for BookmarksWorkflowBoard
   * @category Aha! Model Attributes
   */
  interface BookmarksWorkflowBoardAttributes {
    collapsedColumns: Array<RecordId>;

    /**
     * Completed records older than this number of seconds are hidden
     */
    completedLimit: number;

    /**
     * Currently active filters on the board
     */
    filters: any;

    /**
     * How to group the records
     */
    group: string;

    readonly id: RecordId;

    /**
     * The project or team id whose records appear on this board
     */
    readonly projectId: RecordId;

    /**
     * Whether to show the collapsed card view or not
     */
    showCollapsedView: boolean;

    /**
     * Whether to show empty swimlanes or not
     */
    showEmptySwimlanes: boolean;

    /**
     * Settings for the sidebar, for bookmarks that support it
     */
    sidebarSettings: any;

    /**
     * How to view the board: 'my_work', 'team_work', or 'none'
     */
    view: string;

    /**
     * The ID of the workflow of the records on this board
     */
    readonly workflowId: RecordId;

    /**
     * The card layouts for this object
     */
    cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * The iteration whose records appear on this board, if applicable
     */
    readonly iteration: Iteration;

    /**
     * The project or team whose records appear on this board
     */
    readonly project: Project;

    /**
     * The workflow of the records on this board
     */
    readonly workflow: Workflow;

    readonly records: Array<RecordUnion>;
  }

  type BookmarksWorkflowBoardQuery = Query<BookmarksWorkflowBoard, never> &
    QueryFindable<BookmarksWorkflowBoard>;

  /**
   * BookmarksWorkflowBoard Aha! model
   *
   * A workflow board for a team or iteration
   *
   * Instance type: [[BookmarksWorkflowBoard]]
   *
   * @category Aha! Model
   */
  interface BookmarksWorkflowBoardConstructor
    extends ApplicationModelConstructor<
      BookmarksWorkflowBoard,
      never,
      BookmarksWorkflowBoardQuery
    > {
    readonly bookmarkName: 'Bookmarks::WorkflowBoard';
  }

  /**
   * BookmarksWorkflowBoard Aha! model
   *
   * A workflow board for a team or iteration
   *
   * Constructor: [[BookmarksWorkflowBoardConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface BookmarksWorkflowBoard
    extends ApplicationModel,
      BookmarksWorkflowBoardAttributes {
    readonly typename: 'BookmarksWorkflowBoard';

    readonly query: BookmarksWorkflowBoardQuery;

    attributes: BookmarksWorkflowBoardAttributes;
  }

  /**
   * Attributes for CardField
   * @category Aha! Model Attributes
   */
  interface CardFieldAttributes {
    readonly id: RecordId;

    key: string;

    type: CardFieldTypesEnum['value'];

    readonly customFieldDefinition: CustomFieldDefinition;
  }

  type CardFieldQuery = Query<CardField, never> & QueryFindable<CardField>;

  /**
   * CardField Aha! model
   *
   * A field in a card layout
   *
   * Instance type: [[CardField]]
   *
   * @category Aha! Model
   */
  interface CardFieldConstructor
    extends ApplicationModelConstructor<CardField, never, CardFieldQuery> {}

  /**
   * CardField Aha! model
   *
   * A field in a card layout
   *
   * Constructor: [[CardFieldConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardField extends ApplicationModel, CardFieldAttributes {
    readonly typename: 'CardField';

    readonly query: CardFieldQuery;

    attributes: CardFieldAttributes;
  }

  /**
   * Attributes for CardGroup
   * @category Aha! Model Attributes
   */
  interface CardGroupAttributes {
    readonly id: RecordId;

    fields: Array<CardField>;
  }

  type CardGroupQuery = Query<CardGroup, never> & QueryFindable<CardGroup>;

  /**
   * CardGroup Aha! model
   *
   * A row's group in a card layout
   *
   * Instance type: [[CardGroup]]
   *
   * @category Aha! Model
   */
  interface CardGroupConstructor
    extends ApplicationModelConstructor<CardGroup, never, CardGroupQuery> {}

  /**
   * CardGroup Aha! model
   *
   * A row's group in a card layout
   *
   * Constructor: [[CardGroupConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardGroup extends ApplicationModel, CardGroupAttributes {
    readonly typename: 'CardGroup';

    readonly query: CardGroupQuery;

    attributes: CardGroupAttributes;
  }

  /**
   * Attributes for CardLayout
   * @category Aha! Model Attributes
   */
  interface CardLayoutAttributes {
    /**
     * Whether epics are enabled in the current context of the layout (project or project template)
     */
    readonly epicsEnabled: boolean;

    epicRecordLayout: RecordLayout;

    featureRecordLayout: RecordLayout;

    initiativeRecordLayout: RecordLayout;

    releasePhaseRecordLayout: RecordLayout;

    releaseRecordLayout: RecordLayout;

    requirementRecordLayout: RecordLayout;

    taskRecordLayout: RecordLayout;
  }

  type CardLayoutQuery = Query<CardLayout, never>;

  /**
   * CardLayout Aha! model
   *
   * Card layouts for different records
   *
   * Instance type: [[CardLayout]]
   *
   * @category Aha! Model
   */
  interface CardLayoutConstructor
    extends ApplicationModelConstructor<CardLayout, never, CardLayoutQuery> {}

  /**
   * CardLayout Aha! model
   *
   * Card layouts for different records
   *
   * Constructor: [[CardLayoutConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardLayout extends ApplicationModel, CardLayoutAttributes {
    readonly typename: 'CardLayout';

    readonly query: CardLayoutQuery;

    attributes: CardLayoutAttributes;
  }

  /**
   * Attributes for CardRow
   * @category Aha! Model Attributes
   */
  interface CardRowAttributes {
    divider: boolean;

    readonly id: RecordId;

    firstGroup: CardGroup;

    secondGroup: CardGroup;
  }

  type CardRowQuery = Query<CardRow, never> & QueryFindable<CardRow>;

  /**
   * CardRow Aha! model
   *
   * A row in a card layout
   *
   * Instance type: [[CardRow]]
   *
   * @category Aha! Model
   */
  interface CardRowConstructor
    extends ApplicationModelConstructor<CardRow, never, CardRowQuery> {}

  /**
   * CardRow Aha! model
   *
   * A row in a card layout
   *
   * Constructor: [[CardRowConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardRow extends ApplicationModel, CardRowAttributes {
    readonly typename: 'CardRow';

    readonly query: CardRowQuery;

    attributes: CardRowAttributes;
  }

  /**
   * Attributes for CardStyling
   * @category Aha! Model Attributes
   */
  interface CardStylingAttributes {
    readonly id: RecordId;

    type: CardStylingTypesEnum['value'];
  }

  type CardStylingQuery = Query<CardStyling, never> &
    QueryFindable<CardStyling>;

  /**
   * CardStyling Aha! model
   *
   * Special styling to apply to a card
   *
   * Instance type: [[CardStyling]]
   *
   * @category Aha! Model
   */
  interface CardStylingConstructor
    extends ApplicationModelConstructor<CardStyling, never, CardStylingQuery> {}

  /**
   * CardStyling Aha! model
   *
   * Special styling to apply to a card
   *
   * Constructor: [[CardStylingConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardStyling extends ApplicationModel, CardStylingAttributes {
    readonly typename: 'CardStyling';

    readonly query: CardStylingQuery;

    attributes: CardStylingAttributes;
  }

  /**
   * Attributes for CardView
   * @category Aha! Model Attributes
   */
  interface CardViewAttributes {
    coverImages: boolean;

    inherited: boolean;

    showParentRecord: boolean;

    cardStyling: CardStyling;

    rows: Array<CardRow>;
  }

  type CardViewQuery = Query<CardView, never>;

  /**
   * CardView Aha! model
   *
   * A view for cards
   *
   * Instance type: [[CardView]]
   *
   * @category Aha! Model
   */
  interface CardViewConstructor
    extends ApplicationModelConstructor<CardView, never, CardViewQuery> {}

  /**
   * CardView Aha! model
   *
   * A view for cards
   *
   * Constructor: [[CardViewConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CardView extends ApplicationModel, CardViewAttributes {
    readonly typename: 'CardView';

    readonly query: CardViewQuery;

    attributes: CardViewAttributes;
  }

  /**
   * Attributes for Comment
   * @category Aha! Model Attributes
   */
  interface CommentAttributes {
    /**
     * Long-form body in HTML
     */
    body: string;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    /**
     * The record that is being commented on
     */
    commentable: CommentableSubjectUnion;

    readonly permissions: ResourcePermissions;

    /**
     * The user who made the comment
     */
    readonly user: User;
  }

  type CommentQuery = Query<Comment, never> & QueryFindable<Comment>;

  /**
   * Comment Aha! model
   *
   * A comment on a record
   *
   * Instance type: [[Comment]]
   *
   * @category Aha! Model
   */
  interface CommentConstructor
    extends ApplicationModelConstructor<Comment, never, CommentQuery> {}

  /**
   * Comment Aha! model
   *
   * A comment on a record
   *
   * Constructor: [[CommentConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Comment extends ApplicationModel, CommentAttributes {
    readonly typename: 'Comment';

    readonly query: CommentQuery;

    attributes: CommentAttributes;
  }

  /**
   * Attributes for Competitor
   * @category Aha! Model Attributes
   */
  interface CompetitorAttributes {
    readonly id: RecordId;

    readonly name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    readonly projectId: RecordId;

    /**
     * Project this competitor belongs to
     */
    readonly project: Project;
  }

  type CompetitorQuery = Query<Competitor, CompetitorFilters> &
    QueryFindable<Competitor> &
    QueryListable<Competitor>;

  /**
   * Competitor Aha! model
   *
   *
   *
   * Instance type: [[Competitor]]
   *
   * @category Aha! Model
   */
  interface CompetitorConstructor
    extends ApplicationModelConstructor<
      Competitor,
      CompetitorFilters,
      CompetitorQuery
    > {}

  /**
   * Competitor Aha! model
   *
   *
   *
   * Constructor: [[CompetitorConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Competitor extends ApplicationModel, CompetitorAttributes {
    readonly typename: 'Competitor';

    readonly query: CompetitorQuery;

    attributes: CompetitorAttributes;
  }

  /**
   * Attributes for ConnectedPage
   * @category Aha! Model Attributes
   */
  interface ConnectedPageAttributes {
    readonly createdAt: string;

    documentType: DocumentTypeEnum['value'];

    readonly id: RecordId;

    readonly lastAccessedAt: string;

    name: string;

    readonly updatedAt: string;
  }

  type ConnectedPageQuery = Query<ConnectedPage, never> &
    QueryFindable<ConnectedPage> &
    QueryListable<ConnectedPage>;

  /**
   * ConnectedPage Aha! model
   *
   * A reference to a page shared from a different account
   *
   * Instance type: [[ConnectedPage]]
   *
   * @category Aha! Model
   */
  interface ConnectedPageConstructor
    extends ApplicationModelConstructor<
      ConnectedPage,
      never,
      ConnectedPageQuery
    > {}

  /**
   * ConnectedPage Aha! model
   *
   * A reference to a page shared from a different account
   *
   * Constructor: [[ConnectedPageConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ConnectedPage extends ApplicationModel, ConnectedPageAttributes {
    readonly typename: 'ConnectedPage';

    readonly query: ConnectedPageQuery;

    attributes: ConnectedPageAttributes;
  }

  /**
   * Attributes for CustomFieldDefinition
   * @category Aha! Model Attributes
   */
  interface CustomFieldDefinitionAttributes {
    readonly id: RecordId;

    readonly key: string;

    readonly name: string;

    readonly type: CustomFieldDefinitionTypeEnum['value'];

    readonly permissions: ResourcePermissions;
  }

  type CustomFieldDefinitionQuery = Query<CustomFieldDefinition, never> &
    QueryFindable<CustomFieldDefinition>;

  /**
   * CustomFieldDefinition Aha! model
   *
   * A custom field definition.
   *
   * Instance type: [[CustomFieldDefinition]]
   *
   * @category Aha! Model
   */
  interface CustomFieldDefinitionConstructor
    extends ApplicationModelConstructor<
      CustomFieldDefinition,
      never,
      CustomFieldDefinitionQuery
    > {}

  /**
   * CustomFieldDefinition Aha! model
   *
   * A custom field definition.
   *
   * Constructor: [[CustomFieldDefinitionConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CustomFieldDefinition
    extends ApplicationModel,
      CustomFieldDefinitionAttributes {
    readonly typename: 'CustomFieldDefinition';

    readonly query: CustomFieldDefinitionQuery;

    attributes: CustomFieldDefinitionAttributes;
  }

  /**
   * Attributes for CustomFieldValue
   * @category Aha! Model Attributes
   */
  interface CustomFieldValueAttributes {
    readonly color: number;

    readonly createdAt: string;

    /**
     * The human readable value for the custom field
     */
    readonly humanValue: string;

    /**
     * The ID for the custom field value
     */
    readonly id: RecordId;

    /**
     * The API key for the custom field
     */
    readonly key: string;

    /**
     * The position of the selected option (only for single-choice fields)
     */
    readonly position: number;

    readonly updatedAt: string;

    /**
     * The value for the custom field
     */
    readonly value: any;

    readonly permissions: ResourcePermissions;

    /**
     * The record the custom field value belongs to
     */
    readonly record: CustomFieldValueRecordSubjectUnion;
  }

  type CustomFieldValueQuery = Query<CustomFieldValue, never> &
    QueryFindable<CustomFieldValue>;

  /**
   * CustomFieldValue Aha! model
   *
   * A custom field value on a record
   *
   * Instance type: [[CustomFieldValue]]
   *
   * @category Aha! Model
   */
  interface CustomFieldValueConstructor
    extends ApplicationModelConstructor<
      CustomFieldValue,
      never,
      CustomFieldValueQuery
    > {}

  /**
   * CustomFieldValue Aha! model
   *
   * A custom field value on a record
   *
   * Constructor: [[CustomFieldValueConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface CustomFieldValue
    extends ApplicationModel,
      CustomFieldValueAttributes {
    readonly typename: 'CustomFieldValue';

    readonly query: CustomFieldValueQuery;

    attributes: CustomFieldValueAttributes;
  }

  /**
   * Attributes for DateTimeRange
   * @category Aha! Model Attributes
   */
  interface DateTimeRangeAttributes {
    /**
     * Start of the range
     */
    readonly from: string;

    /**
     * End of the range
     */
    readonly to: string;
  }

  type DateTimeRangeQuery = Query<DateTimeRange, never>;

  /**
   * DateTimeRange Aha! model
   *
   *
   *
   * Instance type: [[DateTimeRange]]
   *
   * @category Aha! Model
   */
  interface DateTimeRangeConstructor
    extends ApplicationModelConstructor<
      DateTimeRange,
      never,
      DateTimeRangeQuery
    > {}

  /**
   * DateTimeRange Aha! model
   *
   *
   *
   * Constructor: [[DateTimeRangeConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface DateTimeRange extends ApplicationModel, DateTimeRangeAttributes {
    readonly typename: 'DateTimeRange';

    readonly query: DateTimeRangeQuery;

    attributes: DateTimeRangeAttributes;
  }

  /**
   * Attributes for Epic
   * @category Aha! Model Attributes
   */
  interface EpicAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly dependenciesCount: number;

    readonly dueDate: string | Date;

    /**
     * Length of time, in seconds, that record has been in the current team workflow status
     */
    readonly durationInTeamWorkflowStatus: number;

    /**
     * The number of features
     */
    readonly featuresCount: number;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    readonly initiativeId: RecordId;

    readonly iterationId: RecordId;

    /**
     * Null if the record isn't manually flagged, otherwise the comment attached to it (Empty string means flagged without comment)
     */
    manualRiskComment: string;

    name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * Position of the epic when a record_position does not apply
     */
    position: number;

    readonly programIncrementId: RecordId;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly projectId: RecordId;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly releaseId: RecordId;

    readonly riskFactors: any;

    readonly riskFactorsCount: number;

    readonly score: number;

    readonly scoringSystemId: RecordId;

    readonly startDate: string | Date;

    /**
     * Comma-separated list of tag names
     */
    readonly tagList: string;

    readonly teamId: RecordId;

    readonly teamWorkflowStatusId: RecordId;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    readonly workflowStatusId: RecordId;

    assignedToUser: User;

    /**
     * Best estimated amount of work
     */
    readonly bestEstimate: Estimate;

    readonly createdByUser: User;

    /**
     * Description note
     */
    description: Note;

    /**
     * Initial estimated amount of work
     */
    readonly initialEstimate: Estimate;

    /**
     * Initiative this epic belongs to, if present
     */
    readonly initiative: Initiative;

    /**
     * Iteration this record belongs to
     */
    iteration: Iteration;

    /**
     * Detailed estimated amount of work
     */
    readonly originalEstimate: Estimate;

    readonly permissions: ResourcePermissions;

    /**
     * Program increment this record is assigned to
     */
    readonly programIncrement: ProgramIncrement;

    /**
     * Project this epic belongs to
     */
    readonly project: Project;

    /**
     * Release this epic belongs to
     */
    release: Release;

    /**
     * Current estimate of work left to do
     */
    readonly remainingEstimate: Estimate;

    /**
     * Team this record belongs to
     */
    team: Project;

    /**
     * Current team workflow status
     */
    teamWorkflowStatus: WorkflowStatus;

    readonly terminology: TerminologyItem;

    /**
     * Amount of work done so far
     */
    readonly workDone: Estimate;

    /**
     * Current overall workflow status
     */
    workflowStatus: WorkflowStatus;

    /**
     * The position of a record when it is listed in a specific bookmark type
     */
    readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Features
     */
    readonly features: Array<Feature>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    scoreFacts: Array<ScoreFact>;

    readonly tags: Array<Tag>;

    readonly tasks: Array<Task>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type EpicQuery = Query<Epic, EpicFilters> &
    QueryFindable<Epic> &
    QueryListable<Epic>;

  /**
   * Epic Aha! model
   *
   * A high-level record that can contain multiple related features
   *
   * Instance type: [[Epic]]
   *
   * @category Aha! Model
   */
  interface EpicConstructor
    extends ApplicationModelConstructor<Epic, EpicFilters, EpicQuery> {}

  /**
   * Epic Aha! model
   *
   * A high-level record that can contain multiple related features
   *
   * Constructor: [[EpicConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Epic extends ApplicationModel, EpicAttributes, HasExtensionFields {
    readonly typename: 'Epic';

    readonly terminologyName: 'Epic';

    readonly query: EpicQuery;

    attributes: EpicAttributes;

    order: EpicOrder['value'];
  }

  /**
   * Attributes for Epoch
   * @category Aha! Model Attributes
   */
  interface EpochAttributes {
    readonly archived: boolean;

    readonly createdAt: string;

    readonly name: string;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;
  }

  type EpochQuery = Query<Epoch, never>;

  /**
   * Epoch Aha! model
   *
   * A time frame used for strategic models
   *
   * Instance type: [[Epoch]]
   *
   * @category Aha! Model
   */
  interface EpochConstructor
    extends ApplicationModelConstructor<Epoch, never, EpochQuery> {}

  /**
   * Epoch Aha! model
   *
   * A time frame used for strategic models
   *
   * Constructor: [[EpochConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Epoch extends ApplicationModel, EpochAttributes {
    readonly typename: 'Epoch';

    readonly query: EpochQuery;

    attributes: EpochAttributes;
  }

  /**
   * Attributes for ExportPage
   * @category Aha! Model Attributes
   */
  interface ExportPageAttributes {
    /**
     * Export HTTP method
     */
    readonly httpMethod: string;

    /**
     * Export path
     */
    readonly path: string;
  }

  type ExportPageQuery = Query<ExportPage, never>;

  /**
   * ExportPage Aha! model
   *
   * Path and HTTP method for exporting a page as a PNG or PDF
   *
   * Instance type: [[ExportPage]]
   *
   * @category Aha! Model
   */
  interface ExportPageConstructor
    extends ApplicationModelConstructor<ExportPage, never, ExportPageQuery> {}

  /**
   * ExportPage Aha! model
   *
   * Path and HTTP method for exporting a page as a PNG or PDF
   *
   * Constructor: [[ExportPageConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ExportPage extends ApplicationModel, ExportPageAttributes {
    readonly typename: 'ExportPage';

    readonly query: ExportPageQuery;

    attributes: ExportPageAttributes;
  }

  /**
   * Attributes for Extension
   * @category Aha! Model Attributes
   */
  interface ExtensionAttributes {
    readonly createdAt: string;

    readonly enabled: boolean;

    readonly id: RecordId;

    readonly identifier: string;

    readonly name: string;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    readonly extensionContributions: Array<ExtensionContribution>;
  }

  type ExtensionQuery = Query<Extension, never> & QueryFindable<Extension>;

  /**
   * Extension Aha! model
   *
   *
   *
   * Instance type: [[Extension]]
   *
   * @category Aha! Model
   */
  interface ExtensionConstructor
    extends ApplicationModelConstructor<Extension, never, ExtensionQuery> {}

  /**
   * Extension Aha! model
   *
   *
   *
   * Constructor: [[ExtensionConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Extension extends ApplicationModel, ExtensionAttributes {
    readonly typename: 'Extension';

    readonly query: ExtensionQuery;

    attributes: ExtensionAttributes;
  }

  /**
   * Attributes for ExtensionContribution
   * @category Aha! Model Attributes
   */
  interface ExtensionContributionAttributes {
    readonly createdAt: string;

    readonly endpoint: string;

    readonly id: RecordId;

    /**
     * The identifier of the extensin contribution. Example: 'aha-develop.github-import.issues'
     */
    readonly identifier: string;

    readonly name: string;

    readonly updatedAt: string;

    /**
     * The extension providing this contribution
     */
    readonly extension: Extension;

    readonly permissions: ResourcePermissions;
  }

  type ExtensionContributionQuery = Query<
    ExtensionContribution,
    ExtensionContributionFilters
  > &
    QueryFindable<ExtensionContribution> &
    QueryListable<ExtensionContribution>;

  /**
   * ExtensionContribution Aha! model
   *
   * A contribution provided by an extension
   *
   * Instance type: [[ExtensionContribution]]
   *
   * @category Aha! Model
   */
  interface ExtensionContributionConstructor
    extends ApplicationModelConstructor<
      ExtensionContribution,
      ExtensionContributionFilters,
      ExtensionContributionQuery
    > {}

  /**
   * ExtensionContribution Aha! model
   *
   * A contribution provided by an extension
   *
   * Constructor: [[ExtensionContributionConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ExtensionContribution
    extends ApplicationModel,
      ExtensionContributionAttributes {
    readonly typename: 'ExtensionContribution';

    readonly query: ExtensionContributionQuery;

    attributes: ExtensionContributionAttributes;
  }

  /**
   * Attributes for ExtensionField
   * @category Aha! Model Attributes
   */
  interface ExtensionFieldAttributes {
    readonly createdAt: string;

    /**
     * The ID of the object the field is attached to
     */
    extensionFieldableId: RecordId;

    /**
     * The type of object the field is attached to
     */
    extensionFieldableType: string;

    readonly id: RecordId;

    name: string;

    readonly updatedAt: string;

    value: any;

    /**
     * The extension responsible for this field
     */
    extension: Extension;

    readonly extensionFieldable: ExtensionFieldableSubjectUnion;

    readonly permissions: ResourcePermissions;
  }

  type ExtensionFieldQuery = Query<ExtensionField, ExtensionFieldsFilters> &
    QueryFindable<ExtensionField> &
    QueryListable<ExtensionField>;

  /**
   * ExtensionField Aha! model
   *
   * Holds data related to an extension
   *
   * Instance type: [[ExtensionField]]
   *
   * @category Aha! Model
   */
  interface ExtensionFieldConstructor
    extends ApplicationModelConstructor<
      ExtensionField,
      ExtensionFieldsFilters,
      ExtensionFieldQuery
    > {}

  /**
   * ExtensionField Aha! model
   *
   * Holds data related to an extension
   *
   * Constructor: [[ExtensionFieldConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ExtensionField extends ApplicationModel, ExtensionFieldAttributes {
    readonly typename: 'ExtensionField';

    readonly query: ExtensionFieldQuery;

    attributes: ExtensionFieldAttributes;
  }

  /**
   * Attributes for ExtensionInvocation
   * @category Aha! Model Attributes
   */
  interface ExtensionInvocationAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    /**
     * The contribution that was invoked
     */
    readonly extensionContribution: ExtensionContribution;

    /**
     * Log messages written during this invocation
     */
    readonly extensionLogs: ExtensionLog;
  }

  type ExtensionInvocationQuery = Query<ExtensionInvocation, never> &
    QueryFindable<ExtensionInvocation>;

  /**
   * ExtensionInvocation Aha! model
   *
   * A single invocation of an extension contribution
   *
   * Instance type: [[ExtensionInvocation]]
   *
   * @category Aha! Model
   */
  interface ExtensionInvocationConstructor
    extends ApplicationModelConstructor<
      ExtensionInvocation,
      never,
      ExtensionInvocationQuery
    > {}

  /**
   * ExtensionInvocation Aha! model
   *
   * A single invocation of an extension contribution
   *
   * Constructor: [[ExtensionInvocationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ExtensionInvocation
    extends ApplicationModel,
      ExtensionInvocationAttributes {
    readonly typename: 'ExtensionInvocation';

    readonly query: ExtensionInvocationQuery;

    attributes: ExtensionInvocationAttributes;
  }

  /**
   * Attributes for ExtensionLog
   * @category Aha! Model Attributes
   */
  interface ExtensionLogAttributes {
    /**
     * Structured log messages
     */
    readonly content: any;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    /**
     * The contribution that was invoked
     */
    readonly extensionContribution: ExtensionContribution;

    /**
     * The invocation writing these log messages
     */
    readonly extensionInvocation: ExtensionInvocation;

    readonly permissions: ResourcePermissions;
  }

  type ExtensionLogQuery = Query<ExtensionLog, ExtensionLogFilters> &
    QueryFindable<ExtensionLog> &
    QueryListable<ExtensionLog>;

  /**
   * ExtensionLog Aha! model
   *
   * Log messages for a single invocation of an extension contribution
   *
   * Instance type: [[ExtensionLog]]
   *
   * @category Aha! Model
   */
  interface ExtensionLogConstructor
    extends ApplicationModelConstructor<
      ExtensionLog,
      ExtensionLogFilters,
      ExtensionLogQuery
    > {}

  /**
   * ExtensionLog Aha! model
   *
   * Log messages for a single invocation of an extension contribution
   *
   * Constructor: [[ExtensionLogConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ExtensionLog extends ApplicationModel, ExtensionLogAttributes {
    readonly typename: 'ExtensionLog';

    readonly query: ExtensionLogQuery;

    attributes: ExtensionLogAttributes;
  }

  /**
   * Attributes for Feature
   * @category Aha! Model Attributes
   */
  interface FeatureAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly dependenciesCount: number;

    readonly dueDate: string | Date;

    /**
     * Length of time, in seconds, that record has been in the current team workflow status
     */
    readonly durationInTeamWorkflowStatus: number;

    readonly epicId: RecordId;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    readonly initiativeId: RecordId;

    readonly iterationId: RecordId;

    /**
     * Null if the record isn't manually flagged, otherwise the comment attached to it (Empty string means flagged without comment)
     */
    manualRiskComment: string;

    name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * Position of the feature when a record_position does not apply
     */
    position: number;

    readonly programIncrementId: RecordId;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly projectId: RecordId;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly releaseId: RecordId;

    readonly releasePhaseId: RecordId;

    /**
     * The number of requirements
     */
    readonly requirementsCount: number;

    readonly riskFactors: any;

    readonly riskFactorsCount: number;

    readonly score: number;

    readonly scoringSystemId: RecordId;

    readonly showFeatureRemainingEstimate: boolean;

    readonly startDate: string | Date;

    /**
     * Comma-separated list of tag names
     */
    tagList: string;

    readonly teamId: RecordId;

    readonly teamWorkflowStatusId: RecordId;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    readonly workflowKindId: RecordId;

    readonly workflowStatusId: RecordId;

    assignedToUser: User;

    /**
     * Best estimated amount of work
     */
    readonly bestEstimate: Estimate;

    readonly createdByUser: User;

    /**
     * Description note
     */
    description: Note;

    /**
     * Epic this feature belongs to, if present
     */
    epic: Epic;

    /**
     * Initial estimated amount of work
     */
    readonly initialEstimate: Estimate;

    /**
     * Initiative this feature belongs to, if present
     */
    readonly initiative: Initiative;

    /**
     * Iteration this record belongs to
     */
    iteration: Iteration;

    /**
     * Detailed estimated amount of work
     */
    readonly originalEstimate: Estimate;

    readonly permissions: ResourcePermissions;

    /**
     * Program increment this record is assigned to
     */
    readonly programIncrement: ProgramIncrement;

    /**
     * Project this feature belongs to
     */
    readonly project: Project;

    /**
     * Release this feature belongs to
     */
    release: Release;

    /**
     * ReleasePhase this feature belongs to, if present
     */
    readonly releasePhase: ReleasePhase;

    /**
     * Current estimate of work left to do
     */
    readonly remainingEstimate: Estimate;

    /**
     * Team this record belongs to
     */
    team: Project;

    /**
     * Current team workflow status
     */
    teamWorkflowStatus: WorkflowStatus;

    readonly terminology: TerminologyItem;

    /**
     * Amount of work done so far
     */
    readonly workDone: Estimate;

    /**
     * The feature type
     */
    readonly workflowKind: WorkflowKind;

    /**
     * Current overall workflow status
     */
    workflowStatus: WorkflowStatus;

    /**
     * The position of a record when it is listed in a specific bookmark type
     */
    readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    /**
     * Requirements
     */
    readonly requirements: Array<Requirement>;

    scoreFacts: Array<ScoreFact>;

    readonly tags: Array<Tag>;

    readonly tasks: Array<Task>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type FeatureQuery = Query<Feature, FeatureFilters> &
    QueryFindable<Feature> &
    QueryListable<Feature>;

  /**
   * Feature Aha! model
   *
   * A basic record representing work to be done
   *
   * Instance type: [[Feature]]
   *
   * @category Aha! Model
   */
  interface FeatureConstructor
    extends ApplicationModelConstructor<
      Feature,
      FeatureFilters,
      FeatureQuery
    > {}

  /**
   * Feature Aha! model
   *
   * A basic record representing work to be done
   *
   * Constructor: [[FeatureConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Feature
    extends ApplicationModel,
      FeatureAttributes,
      HasExtensionFields {
    readonly typename: 'Feature';

    readonly terminologyName: 'Feature';

    readonly query: FeatureQuery;

    attributes: FeatureAttributes;

    order: FeatureOrder['value'];
  }

  /**
   * Attributes for Goal
   * @category Aha! Model Attributes
   */
  interface GoalAttributes {
    /**
     * The number of children
     */
    readonly childrenCount: number;

    /**
     * Hex color converted to decimal
     */
    readonly color: number;

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    /**
     * The number of epics
     */
    readonly epicsCount: number;

    /**
     * The number of features
     */
    readonly featuresCount: number;

    readonly id: RecordId;

    /**
     * The number of initiatives
     */
    readonly initiativesCount: number;

    readonly name: string;

    readonly parentId: RecordId;

    /**
     * Path to the details page
     */
    readonly path: string;

    readonly projectId: RecordId;

    readonly referenceNum: string;

    /**
     * The number of releases
     */
    readonly releasesCount: number;

    readonly updatedAt: string;

    readonly workflowStatusId: RecordId;

    readonly createdByUser: User;

    readonly epoch: Epoch;

    /**
     * Parent this goal belongs to, if present
     */
    readonly parent: Goal;

    readonly permissions: ResourcePermissions;

    /**
     * Project this goal belongs to
     */
    readonly project: Project;

    readonly terminology: TerminologyItem;

    /**
     * The workflow status for this goal
     */
    readonly workflowStatus: WorkflowStatus;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Children
     */
    readonly children: Array<Goal>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Epics
     */
    readonly epics: Array<Epic>;

    /**
     * Features
     */
    readonly features: Array<Feature>;

    /**
     * Initiatives
     */
    readonly initiatives: Array<Initiative>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    /**
     * Releases
     */
    readonly releases: Array<Release>;
  }

  type GoalQuery = Query<Goal, GoalFilters> &
    QueryFindable<Goal> &
    QueryListable<Goal>;

  /**
   * Goal Aha! model
   *
   *
   *
   * Instance type: [[Goal]]
   *
   * @category Aha! Model
   */
  interface GoalConstructor
    extends ApplicationModelConstructor<Goal, GoalFilters, GoalQuery> {}

  /**
   * Goal Aha! model
   *
   *
   *
   * Constructor: [[GoalConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Goal extends ApplicationModel, GoalAttributes {
    readonly typename: 'Goal';

    readonly terminologyName: 'Goal';

    readonly query: GoalQuery;

    attributes: GoalAttributes;

    order: GoalOrder['value'];
  }

  /**
   * Attributes for Idea
   * @category Aha! Model Attributes
   */
  interface IdeaAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly name: string;

    readonly numEndorsements: number;

    /**
     * Path to the details page
     */
    readonly path: string;

    readonly projectId: RecordId;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly score: number;

    readonly scoringSystemId: RecordId;

    /**
     * Comma-separated list of tag names
     */
    readonly tagList: string;

    readonly updatedAt: string;

    /**
     * The total number of votes for an idea
     */
    readonly votes: number;

    assignedToUser: User;

    /**
     * Description note
     */
    readonly description: Note;

    readonly permissions: ResourcePermissions;

    /**
     * Project this idea belongs to
     */
    readonly project: Project;

    readonly submittedIdeaPortal: IdeasIdeaPortal;

    readonly terminology: TerminologyItem;

    /**
     * Current overall workflow status
     */
    workflowStatus: WorkflowStatus;

    /**
     * The position of a record when it is listed in a specific bookmark type
     */
    readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    readonly ideaCategories: Array<IdeaCategory>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    scoreFacts: Array<ScoreFact>;

    readonly tags: Array<Tag>;

    readonly tasks: Array<Task>;
  }

  type IdeaQuery = Query<Idea, IdeaFilters> &
    QueryFindable<Idea> &
    QueryListable<Idea>;

  /**
   * Idea Aha! model
   *
   * An idea
   *
   * Instance type: [[Idea]]
   *
   * @category Aha! Model
   */
  interface IdeaConstructor
    extends ApplicationModelConstructor<Idea, IdeaFilters, IdeaQuery> {}

  /**
   * Idea Aha! model
   *
   * An idea
   *
   * Constructor: [[IdeaConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Idea extends ApplicationModel, IdeaAttributes {
    readonly typename: 'Idea';

    readonly terminologyName: 'Idea';

    readonly query: IdeaQuery;

    attributes: IdeaAttributes;

    order: IdeaOrder['value'];
  }

  /**
   * Attributes for IdeaCategory
   * @category Aha! Model Attributes
   */
  interface IdeaCategoryAttributes {
    readonly createdAt: string;

    /**
     * Idea category ID
     */
    readonly id: RecordId;

    /**
     * Name of idea category
     */
    readonly name: string;

    readonly updatedAt: string;

    /**
     * Parent category
     */
    readonly parentCategory: IdeaCategory;

    readonly permissions: ResourcePermissions;

    readonly project: Project;

    readonly categories: Array<IdeaCategory>;
  }

  type IdeaCategoryQuery = Query<IdeaCategory, never> &
    QueryFindable<IdeaCategory>;

  /**
   * IdeaCategory Aha! model
   *
   * An idea category
   *
   * Instance type: [[IdeaCategory]]
   *
   * @category Aha! Model
   */
  interface IdeaCategoryConstructor
    extends ApplicationModelConstructor<
      IdeaCategory,
      never,
      IdeaCategoryQuery
    > {}

  /**
   * IdeaCategory Aha! model
   *
   * An idea category
   *
   * Constructor: [[IdeaCategoryConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface IdeaCategory extends ApplicationModel, IdeaCategoryAttributes {
    readonly typename: 'IdeaCategory';

    readonly query: IdeaCategoryQuery;

    attributes: IdeaCategoryAttributes;
  }

  /**
   * Attributes for IdeasIdeaPortal
   * @category Aha! Model Attributes
   */
  interface IdeasIdeaPortalAttributes {
    readonly id: RecordId;

    readonly pagesPath: string;

    readonly title: string;
  }

  type IdeasIdeaPortalQuery = Query<IdeasIdeaPortal, never> &
    QueryFindable<IdeasIdeaPortal>;

  /**
   * IdeasIdeaPortal Aha! model
   *
   *
   *
   * Instance type: [[IdeasIdeaPortal]]
   *
   * @category Aha! Model
   */
  interface IdeasIdeaPortalConstructor
    extends ApplicationModelConstructor<
      IdeasIdeaPortal,
      never,
      IdeasIdeaPortalQuery
    > {}

  /**
   * IdeasIdeaPortal Aha! model
   *
   *
   *
   * Constructor: [[IdeasIdeaPortalConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface IdeasIdeaPortal
    extends ApplicationModel,
      IdeasIdeaPortalAttributes {
    readonly typename: 'IdeasIdeaPortal';

    readonly query: IdeasIdeaPortalQuery;

    attributes: IdeasIdeaPortalAttributes;
  }

  /**
   * Attributes for Initiative
   * @category Aha! Model Attributes
   */
  interface InitiativeAttributes {
    /**
     * The number of children
     */
    readonly childrenCount: number;

    /**
     * Hex color converted to decimal
     */
    readonly color: number;

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly endDate: string | Date;

    /**
     * The number of epics
     */
    readonly epicsCount: number;

    /**
     * The number of features
     */
    readonly featuresCount: number;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    /**
     * The number of ideas
     */
    readonly ideasCount: number;

    name: string;

    readonly parentId: RecordId;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly projectId: RecordId;

    readonly referenceNum: string;

    /**
     * The number of releases
     */
    readonly releasesCount: number;

    readonly score: number;

    readonly scoringSystemId: RecordId;

    readonly startDate: string | Date;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    readonly workflowStatusId: RecordId;

    assignedToUser: User;

    /**
     * Best estimated amount of work
     */
    readonly bestEstimate: Estimate;

    readonly createdByUser: User;

    /**
     * Description note
     */
    description: Note;

    readonly epoch: Epoch;

    /**
     * Initial estimated amount of work
     */
    readonly initialEstimate: Estimate;

    /**
     * Detailed estimated amount of work
     */
    readonly originalEstimate: Estimate;

    /**
     * Parent this initiative belongs to, if present
     */
    readonly parent: Initiative;

    readonly permissions: ResourcePermissions;

    /**
     * Project this initiative belongs to
     */
    readonly project: Project;

    /**
     * Current estimate of work left to do
     */
    readonly remainingEstimate: Estimate;

    readonly terminology: TerminologyItem;

    /**
     * Amount of work done so far
     */
    readonly workDone: Estimate;

    /**
     * The workflow status for this initiative
     */
    workflowStatus: WorkflowStatus;

    /**
     * The position of a record when it is listed in a specific bookmark type
     */
    readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Children
     */
    readonly children: Array<Initiative>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * Epics
     */
    readonly epics: Array<Epic>;

    /**
     * Features
     */
    readonly features: Array<Feature>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Ideas
     */
    readonly ideas: Array<Idea>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    /**
     * Releases
     */
    readonly releases: Array<Release>;

    scoreFacts: Array<ScoreFact>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type InitiativeQuery = Query<Initiative, InitiativeFilters> &
    QueryFindable<Initiative> &
    QueryListable<Initiative>;

  /**
   * Initiative Aha! model
   *
   *
   *
   * Instance type: [[Initiative]]
   *
   * @category Aha! Model
   */
  interface InitiativeConstructor
    extends ApplicationModelConstructor<
      Initiative,
      InitiativeFilters,
      InitiativeQuery
    > {}

  /**
   * Initiative Aha! model
   *
   *
   *
   * Constructor: [[InitiativeConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Initiative extends ApplicationModel, InitiativeAttributes {
    readonly typename: 'Initiative';

    readonly terminologyName: 'Initiative';

    readonly query: InitiativeQuery;

    attributes: InitiativeAttributes;

    order: InitiativeOrder['value'];
  }

  /**
   * Attributes for Iteration
   * @category Aha! Model Attributes
   */
  interface IterationAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    /**
     * Duration of the iteration, in days
     */
    duration: number;

    readonly id: RecordId;

    name: string;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly riskFactorsCount: number;

    startDate: string | Date;

    /**
     * The iteration status. PLANNING: 10, ACTIVE: 20, COMPLETE: 30
     */
    status: number;

    readonly updatedAt: string;

    /**
     * Capacity of the iteration
     */
    capacity: Estimate;

    /**
     * Description note
     */
    description: Note;

    /**
     * Total amount of work planned when the iteration started
     */
    readonly originalEstimate: Estimate;

    readonly permissions: ResourcePermissions;

    readonly programIncrement: ProgramIncrement;

    readonly programIncrementIteration: ProgramIncrementIteration;

    project: Project;

    readonly terminology: TerminologyItem;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Records scheduled in this iteration
     */
    readonly records: Array<RecordUnion>;

    readonly tasks: Array<Task>;

    readonly teamMembers: Array<IterationTeamMember>;
  }

  type IterationQuery = Query<Iteration, IterationFilters> &
    QueryFindable<Iteration> &
    QueryListable<Iteration>;

  /**
   * Iteration Aha! model
   *
   * A group of records scheduled during a particular time period
   *
   * Instance type: [[Iteration]]
   *
   * @category Aha! Model
   */
  interface IterationConstructor
    extends ApplicationModelConstructor<
      Iteration,
      IterationFilters,
      IterationQuery
    > {}

  /**
   * Iteration Aha! model
   *
   * A group of records scheduled during a particular time period
   *
   * Constructor: [[IterationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Iteration extends ApplicationModel, IterationAttributes {
    readonly typename: 'Iteration';

    readonly terminologyName: 'Iteration';

    readonly query: IterationQuery;

    attributes: IterationAttributes;

    order: IterationOrder['value'];
  }

  /**
   * Attributes for IterationTeamMember
   * @category Aha! Model Attributes
   */
  interface IterationTeamMemberAttributes {
    readonly hasNonWorkingDays: boolean;

    readonly id: RecordId;

    readonly path: string;

    readonly storyPoints: number;

    readonly workingHours: number;

    readonly iteration: Iteration;

    readonly user: User;
  }

  type IterationTeamMemberQuery = Query<IterationTeamMember, never> &
    QueryFindable<IterationTeamMember>;

  /**
   * IterationTeamMember Aha! model
   *
   *
   *
   * Instance type: [[IterationTeamMember]]
   *
   * @category Aha! Model
   */
  interface IterationTeamMemberConstructor
    extends ApplicationModelConstructor<
      IterationTeamMember,
      never,
      IterationTeamMemberQuery
    > {}

  /**
   * IterationTeamMember Aha! model
   *
   *
   *
   * Constructor: [[IterationTeamMemberConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface IterationTeamMember
    extends ApplicationModel,
      IterationTeamMemberAttributes {
    readonly typename: 'IterationTeamMember';

    readonly query: IterationTeamMemberQuery;

    attributes: IterationTeamMemberAttributes;
  }

  /**
   * Attributes for LineBreak
   * @category Aha! Model Attributes
   */
  interface LineBreakAttributes {
    readonly rank: number;

    readonly title: string;
  }

  type LineBreakQuery = Query<LineBreak, never>;

  /**
   * LineBreak Aha! model
   *
   * Line breaks for a priority list
   *
   * Instance type: [[LineBreak]]
   *
   * @category Aha! Model
   */
  interface LineBreakConstructor
    extends ApplicationModelConstructor<LineBreak, never, LineBreakQuery> {}

  /**
   * LineBreak Aha! model
   *
   * Line breaks for a priority list
   *
   * Constructor: [[LineBreakConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface LineBreak extends ApplicationModel, LineBreakAttributes {
    readonly typename: 'LineBreak';

    readonly query: LineBreakQuery;

    attributes: LineBreakAttributes;
  }

  /**
   * Attributes for Note
   * @category Aha! Model Attributes
   */
  interface NoteAttributes {
    readonly canReviewNote: boolean;

    readonly canUpdateNote: boolean;

    /**
     * Attributes to pass to the editor components
     */
    readonly editorProperties: any;

    readonly htmlBody: string;

    readonly id: RecordId;

    readonly usedTemplateIds: Array<RecordId>;

    readonly notable: NotableSubjectUnion;

    readonly permissions: ResourcePermissions;

    readonly attachments: Array<Attachment>;

    readonly authors: Array<User>;
  }

  type NoteQuery = Query<Note, never> & QueryFindable<Note>;

  /**
   * Note Aha! model
   *
   *
   *
   * Instance type: [[Note]]
   *
   * @category Aha! Model
   */
  interface NoteConstructor
    extends ApplicationModelConstructor<Note, never, NoteQuery> {}

  /**
   * Note Aha! model
   *
   *
   *
   * Constructor: [[NoteConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Note extends ApplicationModel, NoteAttributes {
    readonly typename: 'Note';

    readonly query: NoteQuery;

    attributes: NoteAttributes;
  }

  /**
   * Attributes for NoteTemplate
   * @category Aha! Model Attributes
   */
  interface NoteTemplateAttributes {
    readonly categories: Array<string>;

    readonly createdAt: string;

    readonly documentType: DocumentTypeEnum['value'];

    readonly emojiValue: string;

    readonly hasLongDescription: boolean;

    readonly id: RecordId;

    readonly name: string;

    readonly slug: string;

    readonly thumbnail: string;

    /**
     * Thumbnail url
     */
    readonly thumbnailUrl: string;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    readonly whiteboardId: RecordId;

    readonly createdByUser: User;

    /**
     * Description note
     */
    readonly description: Note;

    readonly guideDescription: Note;

    readonly longDescription: Note;

    readonly permissions: ResourcePermissions;

    readonly shortDescription: Note;

    readonly user: User;

    /**
     * Whiteboard this note_template belongs to, if present
     */
    readonly whiteboard: Whiteboard;

    readonly tasks: Array<Task>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type NoteTemplateQuery = Query<NoteTemplate, NoteTemplateFilters> &
    QueryFindable<NoteTemplate> &
    QueryListable<NoteTemplate>;

  /**
   * NoteTemplate Aha! model
   *
   * A custom document template for a project
   *
   * Instance type: [[NoteTemplate]]
   *
   * @category Aha! Model
   */
  interface NoteTemplateConstructor
    extends ApplicationModelConstructor<
      NoteTemplate,
      NoteTemplateFilters,
      NoteTemplateQuery
    > {}

  /**
   * NoteTemplate Aha! model
   *
   * A custom document template for a project
   *
   * Constructor: [[NoteTemplateConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface NoteTemplate extends ApplicationModel, NoteTemplateAttributes {
    readonly typename: 'NoteTemplate';

    readonly query: NoteTemplateQuery;

    attributes: NoteTemplateAttributes;
  }

  /**
   * Attributes for Notification
   * @category Aha! Model Attributes
   */
  interface NotificationAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    /**
     * Notification is marked as read
     */
    readonly read: boolean;

    /**
     * Notification scope is participating or watching
     */
    readonly scope: NotificationScopeEnum['value'];

    /**
     * Notification is starred
     */
    readonly starred: boolean;

    readonly updatedAt: string;

    /**
     * The record that is subject to the notification
     */
    readonly notifiable: NotifiableSubjectUnion;

    readonly project: Project;
  }

  type NotificationQuery = Query<Notification, NotificationFilters> &
    QueryFindable<Notification> &
    QueryListable<Notification>;

  /**
   * Notification Aha! model
   *
   * A notification of changes
   *
   * Instance type: [[Notification]]
   *
   * @category Aha! Model
   */
  interface NotificationConstructor
    extends ApplicationModelConstructor<
      Notification,
      NotificationFilters,
      NotificationQuery
    > {}

  /**
   * Notification Aha! model
   *
   * A notification of changes
   *
   * Constructor: [[NotificationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Notification extends ApplicationModel, NotificationAttributes {
    readonly typename: 'Notification';

    readonly query: NotificationQuery;

    attributes: NotificationAttributes;

    order: NotificationOrder['value'];
  }

  /**
   * Attributes for Page
   * @category Aha! Model Attributes
   */
  interface PageAttributes {
    /**
     * The number of children
     */
    readonly childrenCount: number;

    readonly createdAt: string;

    documentDate: string | Date;

    documentType: DocumentTypeEnum['value'];

    editorWidth: EditorWidthEnum['value'];

    emojiValue: string;

    readonly id: RecordId;

    /**
     * True if the page is shared
     */
    readonly isShared: boolean;

    readonly lastAccessedAt: string;

    name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    position: number;

    /**
     * True if the page is read-only
     */
    readonly readOnly: boolean;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    reviewerDocumentAccess: ReviewerDocumentAccessEnum['value'];

    /**
     * The number of shared pages
     */
    readonly sharedPagesCount: number;

    /**
     * True if a table of contents should be shown in the page
     */
    readonly showContents: boolean;

    readonly thumbnailUrl: string;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    /**
     * The ActiveShareLink for this page, if present
     */
    readonly activeShareLink: PageShareLink;

    readonly addTo: AddPageTo;

    /**
     * Description note
     */
    readonly description: Note;

    readonly export: ExportPage;

    parent: Page;

    readonly permissions: ResourcePermissions;

    project: Project;

    readonly user: User;

    readonly whiteboard: Whiteboard;

    /**
     * Children
     */
    readonly children: Array<Page>;

    readonly ideaPortals: Array<IdeasIdeaPortal>;

    /**
     * Shared pages
     */
    readonly sharedPages: Array<SharedPage>;

    readonly tasks: Array<Task>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type PageQuery = Query<Page, PageFilters> &
    QueryFindable<Page> &
    QueryListable<Page>;

  /**
   * Page Aha! model
   *
   * A page in the notes section of the UI
   *
   * Instance type: [[Page]]
   *
   * @category Aha! Model
   */
  interface PageConstructor
    extends ApplicationModelConstructor<Page, PageFilters, PageQuery> {}

  /**
   * Page Aha! model
   *
   * A page in the notes section of the UI
   *
   * Constructor: [[PageConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Page extends ApplicationModel, PageAttributes {
    readonly typename: 'Page';

    readonly query: PageQuery;

    attributes: PageAttributes;

    order: PageOrder['value'];
  }

  /**
   * Attributes for PageShareLink
   * @category Aha! Model Attributes
   */
  interface PageShareLinkAttributes {
    access: SharedPageAccessEnum['value'];

    readonly createdAt: string;

    readonly expiresAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    readonly url: string;

    page: Page;
  }

  type PageShareLinkQuery = Query<PageShareLink, never> &
    QueryFindable<PageShareLink>;

  /**
   * PageShareLink Aha! model
   *
   * A sharing link to a page
   *
   * Instance type: [[PageShareLink]]
   *
   * @category Aha! Model
   */
  interface PageShareLinkConstructor
    extends ApplicationModelConstructor<
      PageShareLink,
      never,
      PageShareLinkQuery
    > {}

  /**
   * PageShareLink Aha! model
   *
   * A sharing link to a page
   *
   * Constructor: [[PageShareLinkConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface PageShareLink extends ApplicationModel, PageShareLinkAttributes {
    readonly typename: 'PageShareLink';

    readonly query: PageShareLinkQuery;

    attributes: PageShareLinkAttributes;
  }

  /**
   * Attributes for Persona
   * @category Aha! Model Attributes
   */
  interface PersonaAttributes {
    readonly id: RecordId;

    readonly name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    readonly projectId: RecordId;

    /**
     * Project this persona belongs to
     */
    readonly project: Project;
  }

  type PersonaQuery = Query<Persona, PersonaFilters> &
    QueryFindable<Persona> &
    QueryListable<Persona>;

  /**
   * Persona Aha! model
   *
   *
   *
   * Instance type: [[Persona]]
   *
   * @category Aha! Model
   */
  interface PersonaConstructor
    extends ApplicationModelConstructor<
      Persona,
      PersonaFilters,
      PersonaQuery
    > {}

  /**
   * Persona Aha! model
   *
   *
   *
   * Constructor: [[PersonaConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Persona extends ApplicationModel, PersonaAttributes {
    readonly typename: 'Persona';

    readonly query: PersonaQuery;

    attributes: PersonaAttributes;
  }

  /**
   * Attributes for PivotCell
   * @category Aha! Model Attributes
   */
  interface PivotCellAttributes {
    readonly value: string;

    readonly pivotColumn: PivotColumn;
  }

  type PivotCellQuery = Query<PivotCell, never>;

  /**
   * PivotCell Aha! model
   *
   * A cell of a PivotRow belonging to a PivotColumn
   *
   * Instance type: [[PivotCell]]
   *
   * @category Aha! Model
   */
  interface PivotCellConstructor
    extends ApplicationModelConstructor<PivotCell, never, PivotCellQuery> {}

  /**
   * PivotCell Aha! model
   *
   * A cell of a PivotRow belonging to a PivotColumn
   *
   * Constructor: [[PivotCellConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface PivotCell extends ApplicationModel, PivotCellAttributes {
    readonly typename: 'PivotCell';

    readonly query: PivotCellQuery;

    attributes: PivotCellAttributes;
  }

  /**
   * Attributes for PivotColumn
   * @category Aha! Model Attributes
   */
  interface PivotColumnAttributes {
    readonly key: string;

    readonly sortType: string;

    readonly title: string;
  }

  type PivotColumnQuery = Query<PivotColumn, never>;

  /**
   * PivotColumn Aha! model
   *
   * Info describing a pivot column
   *
   * Instance type: [[PivotColumn]]
   *
   * @category Aha! Model
   */
  interface PivotColumnConstructor
    extends ApplicationModelConstructor<PivotColumn, never, PivotColumnQuery> {}

  /**
   * PivotColumn Aha! model
   *
   * Info describing a pivot column
   *
   * Constructor: [[PivotColumnConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface PivotColumn extends ApplicationModel, PivotColumnAttributes {
    readonly typename: 'PivotColumn';

    readonly query: PivotColumnQuery;

    attributes: PivotColumnAttributes;
  }

  /**
   * Attributes for PivotColumnWidth
   * @category Aha! Model Attributes
   */
  interface PivotColumnWidthAttributes {
    readonly columnKey: string;

    /**
     * The width of the column in pixels
     */
    readonly width: number;
  }

  type PivotColumnWidthQuery = Query<PivotColumnWidth, never>;

  /**
   * PivotColumnWidth Aha! model
   *
   * The width of a column on a pivot report
   *
   * Instance type: [[PivotColumnWidth]]
   *
   * @category Aha! Model
   */
  interface PivotColumnWidthConstructor
    extends ApplicationModelConstructor<
      PivotColumnWidth,
      never,
      PivotColumnWidthQuery
    > {}

  /**
   * PivotColumnWidth Aha! model
   *
   * The width of a column on a pivot report
   *
   * Constructor: [[PivotColumnWidthConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface PivotColumnWidth
    extends ApplicationModel,
      PivotColumnWidthAttributes {
    readonly typename: 'PivotColumnWidth';

    readonly query: PivotColumnWidthQuery;

    attributes: PivotColumnWidthAttributes;
  }

  /**
   * Attributes for PivotRow
   * @category Aha! Model Attributes
   */
  interface PivotRowAttributes {
    /**
     * The plain record this row represents
     */
    readonly record: PrioritizableRecordUnion;

    /**
     * List of cells containing data for the row
     */
    readonly cells: Array<PivotCell>;
  }

  type PivotRowQuery = Query<PivotRow, never>;

  /**
   * PivotRow Aha! model
   *
   * Returns data analagous to a row of a pivot report
   *
   * Instance type: [[PivotRow]]
   *
   * @category Aha! Model
   */
  interface PivotRowConstructor
    extends ApplicationModelConstructor<PivotRow, never, PivotRowQuery> {}

  /**
   * PivotRow Aha! model
   *
   * Returns data analagous to a row of a pivot report
   *
   * Constructor: [[PivotRowConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface PivotRow extends ApplicationModel, PivotRowAttributes {
    readonly typename: 'PivotRow';

    readonly query: PivotRowQuery;

    attributes: PivotRowAttributes;
  }

  /**
   * Attributes for ProgramIncrement
   * @category Aha! Model Attributes
   */
  interface ProgramIncrementAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly endDate: string | Date;

    readonly id: RecordId;

    readonly name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * The number of program increment iterations
     */
    readonly programIncrementIterationsCount: number;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly projectId: RecordId;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly riskFactorsCount: number;

    readonly startDate: string | Date;

    readonly updatedAt: string;

    readonly workflowStatusId: RecordId;

    /**
     * Description note
     */
    readonly description: Note;

    readonly permissions: ResourcePermissions;

    /**
     * Project this program_increment belongs to
     */
    readonly project: Project;

    readonly terminology: TerminologyItem;

    /**
     * Current overall workflow status
     */
    readonly workflowStatus: WorkflowStatus;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Program increment iterations
     */
    readonly programIncrementIterations: Array<ProgramIncrementIteration>;

    /**
     * Records assigned to this program increment
     */
    readonly records: Array<RecordUnion>;
  }

  type ProgramIncrementQuery = Query<
    ProgramIncrement,
    ProgramIncrementFilters
  > &
    QueryFindable<ProgramIncrement> &
    QueryListable<ProgramIncrement>;

  /**
   * ProgramIncrement Aha! model
   *
   * Program increment
   *
   * Instance type: [[ProgramIncrement]]
   *
   * @category Aha! Model
   */
  interface ProgramIncrementConstructor
    extends ApplicationModelConstructor<
      ProgramIncrement,
      ProgramIncrementFilters,
      ProgramIncrementQuery
    > {}

  /**
   * ProgramIncrement Aha! model
   *
   * Program increment
   *
   * Constructor: [[ProgramIncrementConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProgramIncrement
    extends ApplicationModel,
      ProgramIncrementAttributes {
    readonly typename: 'ProgramIncrement';

    readonly terminologyName: 'Program increment';

    readonly query: ProgramIncrementQuery;

    attributes: ProgramIncrementAttributes;

    order: ProgramIncrementOrder['value'];
  }

  /**
   * Attributes for ProgramIncrementIteration
   * @category Aha! Model Attributes
   */
  interface ProgramIncrementIterationAttributes {
    readonly createdAt: string;

    /**
     * Duration of the iteration, in days
     */
    duration: number;

    readonly id: RecordId;

    /**
     * The number of iterations
     */
    readonly iterationsCount: number;

    name: string;

    readonly programIncrementId: RecordId;

    startDate: string | Date;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    /**
     * ProgramIncrement this program_increment_iteration belongs to
     */
    readonly programIncrement: ProgramIncrement;

    /**
     * Iterations
     */
    readonly iterations: Array<Iteration>;
  }

  type ProgramIncrementIterationQuery = Query<
    ProgramIncrementIteration,
    ProgramIncrementIterationFilters
  > &
    QueryFindable<ProgramIncrementIteration> &
    QueryListable<ProgramIncrementIteration>;

  /**
   * ProgramIncrementIteration Aha! model
   *
   * Program increment iteration
   *
   * Instance type: [[ProgramIncrementIteration]]
   *
   * @category Aha! Model
   */
  interface ProgramIncrementIterationConstructor
    extends ApplicationModelConstructor<
      ProgramIncrementIteration,
      ProgramIncrementIterationFilters,
      ProgramIncrementIterationQuery
    > {}

  /**
   * ProgramIncrementIteration Aha! model
   *
   * Program increment iteration
   *
   * Constructor: [[ProgramIncrementIterationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProgramIncrementIteration
    extends ApplicationModel,
      ProgramIncrementIterationAttributes {
    readonly typename: 'ProgramIncrementIteration';

    readonly query: ProgramIncrementIterationQuery;

    attributes: ProgramIncrementIterationAttributes;

    order: ProgramIncrementIterationOrder['value'];
  }

  /**
   * Attributes for Project
   * @category Aha! Model Attributes
   */
  interface ProjectAttributes {
    /**
     * ID of the BookmarksBacklogBoard corresponding to this team
     */
    readonly backlogBookmarkId: RecordId;

    /**
     * True if backlog management is enabled for this team
     */
    readonly backlogManagementEnabled: boolean;

    readonly canCreatePages: boolean;

    /**
     * The number of children
     */
    readonly childrenCount: number;

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly defaultCapacityUnits: WorkUnitEnum['value'];

    /**
     * Specify teams can import ideas from this project
     */
    readonly developTeamsCanImportIdeas: boolean;

    /**
     * The number of develop teams
     */
    readonly developTeamsCount: number;

    readonly epicWorkflowId: RecordId;

    /**
     * Whether epics are enabled for the project or team.
     */
    readonly epicsEnabled: boolean;

    readonly featureWorkflowId: RecordId;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    /**
     * The number of idea categories
     */
    readonly ideaCategoriesCount: number;

    /**
     * The number of idea portals
     */
    readonly ideaPortalsCount: number;

    readonly ideaWorkflowId: RecordId;

    /**
     * The number of ideas
     */
    readonly ideasCount: number;

    readonly initiativeWorkflowId: RecordId;

    /**
     * The number of initiatives
     */
    readonly initiativesCount: number;

    /**
     * True if the project is a product line
     */
    readonly isProductLine: boolean;

    /**
     * True if the project is a team, false if it is a workspace
     */
    readonly isTeam: boolean;

    /**
     * True if iteration planning is enabled for this team
     */
    readonly iterationsEnabled: boolean;

    name: string;

    readonly parentId: RecordId;

    /**
     * The number of program increments
     */
    readonly programIncrementsCount: number;

    /**
     * The number of projects
     */
    readonly projectsCount: number;

    /**
     * The reference prefix for the project or team
     */
    readonly referencePrefix: string;

    /**
     * The number of releases
     */
    readonly releasesCount: number;

    readonly requirementWorkflowId: RecordId;

    readonly updatedAt: string;

    /**
     * The active iteration for this project, if applicable
     */
    readonly currentIteration: Iteration;

    /**
     * Release new records are created in, by default
     */
    readonly defaultRelease: Release;

    /**
     * User assigned to records if none is specified
     */
    readonly defaultUser: User;

    /**
     * Description note
     */
    readonly description: Note;

    /**
     * EpicWorkflow this product belongs to
     */
    readonly epicWorkflow: Workflow;

    /**
     * FeatureWorkflow this product belongs to
     */
    readonly featureWorkflow: Workflow;

    /**
     * Ideas::IdeaWorkflow this product belongs to, if present
     */
    readonly ideaWorkflow: Workflow;

    /**
     * InitiativeWorkflow this product belongs to
     */
    readonly initiativeWorkflow: Workflow;

    /**
     * The parent of this workspace
     */
    readonly parent: Project;

    readonly permissions: ResourcePermissions;

    projectConfiguration: ProjectConfiguration;

    /**
     * The user's permissions for performing actions in a specific workspace/team.
     */
    readonly projectPermissions: ProjectPermissions;

    readonly projectTerminology: Terminology;

    /**
     * RequirementWorkflow this product belongs to
     */
    readonly requirementWorkflow: Workflow;

    readonly terminology: TerminologyItem;

    /**
     * The BookmarksWorkflowBoard corresponding to this team for the current user
     */
    readonly workflowBoardBookmark: BookmarksWorkflowBoard;

    /**
     * Children
     */
    readonly children: Array<Project>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * The develop teams that are linked to this project
     */
    readonly developTeams: Array<Project>;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Idea categories
     */
    readonly ideaCategories: Array<IdeaCategory>;

    /**
     * Idea portals
     */
    readonly ideaPortals: Array<IdeasIdeaPortal>;

    /**
     * Ideas
     */
    readonly ideas: Array<Idea>;

    /**
     * Initiatives
     */
    readonly initiatives: Array<Initiative>;

    /**
     * Program increments
     */
    readonly programIncrements: Array<ProgramIncrement>;

    /**
     * The projects that are linked to this develop team
     */
    readonly projects: Array<Project>;

    /**
     * Releases
     */
    readonly releases: Array<Release>;

    /**
     * Users belonging to the project or team
     */
    readonly users: Array<User>;

    readonly wipLimits: Array<WipLimit>;
  }

  type ProjectQuery = Query<Project, ProjectFilters> &
    QueryFindable<Project> &
    QueryListable<Project>;

  /**
   * Project Aha! model
   *
   * An Aha! workspace or team
   *
   * Instance type: [[Project]]
   *
   * @category Aha! Model
   */
  interface ProjectConstructor
    extends ApplicationModelConstructor<
      Project,
      ProjectFilters,
      ProjectQuery
    > {}

  /**
   * Project Aha! model
   *
   * An Aha! workspace or team
   *
   * Constructor: [[ProjectConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Project
    extends ApplicationModel,
      ProjectAttributes,
      HasExtensionFields {
    readonly typename: 'Project';

    readonly terminologyName: 'Product';

    readonly query: ProjectQuery;

    attributes: ProjectAttributes;
  }

  /**
   * Attributes for ProjectConfiguration
   * @category Aha! Model Attributes
   */
  interface ProjectConfigurationAttributes {
    readonly createdAt: string;

    /**
     * Whether epics are enabled for the configuration.
     */
    readonly epicsEnabled: boolean;

    readonly reviewerDocumentAccess: ReviewerDocumentAccessEnum['value'];

    readonly updatedAt: string;

    /**
     * The card layouts for this object
     */
    cardLayout: CardLayout;

    /**
     * The default card layout, inherited from the project or project line
     */
    readonly defaultCardLayout: CardLayout;

    /**
     * The ProjectRisksConfiguration for this project_configuration, if present
     */
    readonly projectRisksConfiguration: ProjectRisksConfiguration;

    readonly projectScreens: ProjectScreens;
  }

  type ProjectConfigurationQuery = Query<ProjectConfiguration, never>;

  /**
   * ProjectConfiguration Aha! model
   *
   * The configuration for a project (workspace) template
   *
   * Instance type: [[ProjectConfiguration]]
   *
   * @category Aha! Model
   */
  interface ProjectConfigurationConstructor
    extends ApplicationModelConstructor<
      ProjectConfiguration,
      never,
      ProjectConfigurationQuery
    > {}

  /**
   * ProjectConfiguration Aha! model
   *
   * The configuration for a project (workspace) template
   *
   * Constructor: [[ProjectConfigurationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProjectConfiguration
    extends ApplicationModel,
      ProjectConfigurationAttributes {
    readonly typename: 'ProjectConfiguration';

    readonly query: ProjectConfigurationQuery;

    attributes: ProjectConfigurationAttributes;
  }

  /**
   * Attributes for ProjectPermissions
   * @category Aha! Model Attributes
   */
  interface ProjectPermissionsAttributes {
    /**
     * Whether the user is allowed to create epics in this workspace/team
     */
    readonly createEpics: boolean;

    /**
     * Whether the user is allowed to create features in this workspace/team
     */
    readonly createFeatures: boolean;

    /**
     * Whether the user is allowed to create iterations in this workspace/team
     */
    readonly createIterations: boolean;

    /**
     * Whether the user is allowed to create a note template in this workspace/team
     */
    readonly createNoteTemplates: boolean;

    /**
     * Whether the user is allowed to create pages in this workspace/team
     */
    readonly createPages: boolean;

    /**
     * Whether the user is allowed to create requirements in this workspace/team
     */
    readonly createRequirements: boolean;

    /**
     * Whether the user is allowed to create workflow_statuses in this workspace/team
     */
    readonly createWorkflowStatuses: boolean;
  }

  type ProjectPermissionsQuery = Query<ProjectPermissions, never>;

  /**
   * ProjectPermissions Aha! model
   *
   * The user's permissions for performing actions in a specific workspace/team.
   *
   * Instance type: [[ProjectPermissions]]
   *
   * @category Aha! Model
   */
  interface ProjectPermissionsConstructor
    extends ApplicationModelConstructor<
      ProjectPermissions,
      never,
      ProjectPermissionsQuery
    > {}

  /**
   * ProjectPermissions Aha! model
   *
   * The user's permissions for performing actions in a specific workspace/team.
   *
   * Constructor: [[ProjectPermissionsConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProjectPermissions
    extends ApplicationModel,
      ProjectPermissionsAttributes {
    readonly typename: 'ProjectPermissions';

    readonly query: ProjectPermissionsQuery;

    attributes: ProjectPermissionsAttributes;
  }

  /**
   * Attributes for ProjectRisksConfiguration
   * @category Aha! Model Attributes
   */
  interface ProjectRisksConfigurationAttributes {
    readonly createdAt: string;

    readonly dependenciesNotStarted: boolean;

    readonly dependenciesPastDue: boolean;

    readonly dependenciesPastDueConfig: number;

    readonly disableOnParkingLots: boolean;

    readonly enabled: boolean;

    readonly exceedingDueDate: boolean;

    readonly exceedingDueDateConfig: number;

    readonly exceedingReleaseDate: boolean;

    readonly exceedingReleaseDateConfig: number;

    readonly id: RecordId;

    readonly iterationChurn: boolean;

    readonly iterationChurnConfig: number;

    readonly manuallyFlagged: boolean;

    readonly nearingDueDate: boolean;

    readonly nearingDueDateConfig: number;

    readonly nearingReleaseDate: boolean;

    readonly nearingReleaseDateConfig: number;

    readonly noAssignee: boolean;

    readonly noDetailedEstimate: boolean;

    readonly noIteration: boolean;

    readonly noProgramIncrement: boolean;

    readonly noTeam: boolean;

    readonly notScheduled: boolean;

    readonly projectId: RecordId;

    readonly startedLate: boolean;

    readonly startedLateConfig: number;

    readonly statusChurn: boolean;

    readonly statusChurnConfig: number;

    readonly updatedAt: string;

    readonly workStalled: boolean;

    readonly workStalledConfig: number;

    /**
     * Project this project_risks_configuration belongs to
     */
    readonly project: Project;
  }

  type ProjectRisksConfigurationQuery = Query<
    ProjectRisksConfiguration,
    never
  > &
    QueryFindable<ProjectRisksConfiguration>;

  /**
   * ProjectRisksConfiguration Aha! model
   *
   * An Aha! workspace delivery risks configuration
   *
   * Instance type: [[ProjectRisksConfiguration]]
   *
   * @category Aha! Model
   */
  interface ProjectRisksConfigurationConstructor
    extends ApplicationModelConstructor<
      ProjectRisksConfiguration,
      never,
      ProjectRisksConfigurationQuery
    > {}

  /**
   * ProjectRisksConfiguration Aha! model
   *
   * An Aha! workspace delivery risks configuration
   *
   * Constructor: [[ProjectRisksConfigurationConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProjectRisksConfiguration
    extends ApplicationModel,
      ProjectRisksConfigurationAttributes {
    readonly typename: 'ProjectRisksConfiguration';

    readonly query: ProjectRisksConfigurationQuery;

    attributes: ProjectRisksConfigurationAttributes;
  }

  /**
   * Attributes for ProjectScreens
   * @category Aha! Model Attributes
   */
  interface ProjectScreensAttributes {
    readonly epicScreenDefinition: ScreenDefinition;

    readonly featureScreenDefinition: ScreenDefinition;

    readonly goalScreenDefinition: ScreenDefinition;

    readonly initiativeScreenDefinition: ScreenDefinition;

    readonly releaseScreenDefinition: ScreenDefinition;

    readonly requirementScreenDefinition: ScreenDefinition;
  }

  type ProjectScreensQuery = Query<ProjectScreens, never>;

  /**
   * ProjectScreens Aha! model
   *
   * The screen definitions for a project.
   *
   * Instance type: [[ProjectScreens]]
   *
   * @category Aha! Model
   */
  interface ProjectScreensConstructor
    extends ApplicationModelConstructor<
      ProjectScreens,
      never,
      ProjectScreensQuery
    > {}

  /**
   * ProjectScreens Aha! model
   *
   * The screen definitions for a project.
   *
   * Constructor: [[ProjectScreensConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProjectScreens extends ApplicationModel, ProjectScreensAttributes {
    readonly typename: 'ProjectScreens';

    readonly query: ProjectScreensQuery;

    attributes: ProjectScreensAttributes;
  }

  /**
   * Attributes for ProjectTemplate
   * @category Aha! Model Attributes
   */
  interface ProjectTemplateAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    readonly projectTemplateConfiguration: ProjectConfiguration;

    projectTemplateWorkingConfiguration: ProjectConfiguration;
  }

  type ProjectTemplateQuery = Query<ProjectTemplate, never> &
    QueryFindable<ProjectTemplate>;

  /**
   * ProjectTemplate Aha! model
   *
   * A workspace template
   *
   * Instance type: [[ProjectTemplate]]
   *
   * @category Aha! Model
   */
  interface ProjectTemplateConstructor
    extends ApplicationModelConstructor<
      ProjectTemplate,
      never,
      ProjectTemplateQuery
    > {}

  /**
   * ProjectTemplate Aha! model
   *
   * A workspace template
   *
   * Constructor: [[ProjectTemplateConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ProjectTemplate
    extends ApplicationModel,
      ProjectTemplateAttributes {
    readonly typename: 'ProjectTemplate';

    readonly query: ProjectTemplateQuery;

    attributes: ProjectTemplateAttributes;
  }

  /**
   * Attributes for RecordEvent
   * @category Aha! Model Attributes
   */
  interface RecordEventAttributes {
    /**
     * Collection of epics from the raw events
     */
    readonly epics: Array<Epic>;

    /**
     * Collection of features from the raw events
     */
    readonly features: Array<Feature>;

    /**
     * Group events by a selected attribute
     */
    readonly grouped: Array<RecordEventGroup>;

    /**
     * Collection of iterations from the raw events
     */
    readonly iterations: Array<Iteration>;

    /**
     * List of raw events
     */
    readonly raw: Array<RecordEventRaw>;

    /**
     * Collection of releases from the raw events
     */
    readonly releases: Array<Release>;

    /**
     * Collection of requirements from the raw events
     */
    readonly requirements: Array<Requirement>;

    /**
     * Collection of teams from the raw events
     */
    readonly teams: Array<Project>;

    /**
     * Group events by a time series group
     */
    readonly timeSeries: Array<RecordEventTimeSeries>;

    /**
     * Collection of users from the raw events
     */
    readonly users: Array<User>;

    /**
     * Collection of workflow statuses from the raw events
     */
    readonly workflowStatuses: Array<WorkflowStatus>;
  }

  type RecordEventQuery = Query<RecordEvent, RecordEventFilters> &
    QueryListable<RecordEvent>;

  /**
   * RecordEvent Aha! model
   *
   * A set of record events that can be fetched in raw, grouped or time series formats
   *
   * Instance type: [[RecordEvent]]
   *
   * @category Aha! Model
   */
  interface RecordEventConstructor
    extends ApplicationModelConstructor<
      RecordEvent,
      RecordEventFilters,
      RecordEventQuery
    > {}

  /**
   * RecordEvent Aha! model
   *
   * A set of record events that can be fetched in raw, grouped or time series formats
   *
   * Constructor: [[RecordEventConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordEvent extends ApplicationModel, RecordEventAttributes {
    readonly typename: 'RecordEvent';

    readonly query: RecordEventQuery;

    attributes: RecordEventAttributes;
  }

  /**
   * Attributes for RecordEventGroup
   * @category Aha! Model Attributes
   */
  interface RecordEventGroupAttributes {
    readonly count: number;

    readonly eventType: RecordEventTypeEnum['value'];

    readonly groupByValue: string;

    readonly originalEstimate: number;

    readonly remainingEstimate: number;

    readonly units: WorkUnitEnum['value'];

    readonly workDone: number;
  }

  type RecordEventGroupQuery = Query<RecordEventGroup, never>;

  /**
   * RecordEventGroup Aha! model
   *
   *
   *
   * Instance type: [[RecordEventGroup]]
   *
   * @category Aha! Model
   */
  interface RecordEventGroupConstructor
    extends ApplicationModelConstructor<
      RecordEventGroup,
      never,
      RecordEventGroupQuery
    > {}

  /**
   * RecordEventGroup Aha! model
   *
   *
   *
   * Constructor: [[RecordEventGroupConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordEventGroup
    extends ApplicationModel,
      RecordEventGroupAttributes {
    readonly typename: 'RecordEventGroup';

    readonly query: RecordEventGroupQuery;

    attributes: RecordEventGroupAttributes;
  }

  /**
   * Attributes for RecordEventRaw
   * @category Aha! Model Attributes
   */
  interface RecordEventRawAttributes {
    readonly assignedToUserId: RecordId;

    readonly createdAt: string;

    readonly epicId: RecordId;

    readonly eventSubjectId: RecordId;

    readonly eventSubjectType: RecordEventSubjectEnum['value'];

    readonly eventType: RecordEventTypeEnum['value'];

    readonly featureId: RecordId;

    readonly id: RecordId;

    readonly iterationId: RecordId;

    readonly originalEstimate: number;

    readonly releaseId: RecordId;

    readonly remainingEstimate: number;

    readonly requirementId: RecordId;

    readonly teamId: RecordId;

    readonly teamWorkflowStatusId: RecordId;

    readonly units: WorkUnitEnum['value'];

    readonly updatedAt: string;

    readonly userId: RecordId;

    readonly workDone: number;

    /**
     * AssignedToUser this estimation_event belongs to, if present
     */
    readonly assignedToUser: User;

    /**
     * Epic this estimation_event belongs to, if present
     */
    readonly epic: Epic;

    readonly eventSubject: RecordEventSubjectUnion;

    /**
     * Feature this estimation_event belongs to, if present
     */
    readonly feature: Feature;

    /**
     * Iteration this estimation_event belongs to, if present
     */
    readonly iteration: Iteration;

    /**
     * Release this estimation_event belongs to, if present
     */
    readonly release: Release;

    /**
     * Requirement this estimation_event belongs to, if present
     */
    readonly requirement: Requirement;

    /**
     * Team this estimation_event belongs to, if present
     */
    readonly team: Project;

    /**
     * TeamWorkflowStatus this estimation_event belongs to, if present
     */
    readonly teamWorkflowStatus: WorkflowStatus;

    /**
     * User this estimation_event belongs to
     */
    readonly user: User;
  }

  type RecordEventRawQuery = Query<RecordEventRaw, never> &
    QueryFindable<RecordEventRaw>;

  /**
   * RecordEventRaw Aha! model
   *
   *
   *
   * Instance type: [[RecordEventRaw]]
   *
   * @category Aha! Model
   */
  interface RecordEventRawConstructor
    extends ApplicationModelConstructor<
      RecordEventRaw,
      never,
      RecordEventRawQuery
    > {}

  /**
   * RecordEventRaw Aha! model
   *
   *
   *
   * Constructor: [[RecordEventRawConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordEventRaw extends ApplicationModel, RecordEventRawAttributes {
    readonly typename: 'RecordEventRaw';

    readonly query: RecordEventRawQuery;

    attributes: RecordEventRawAttributes;
  }

  /**
   * Attributes for RecordEventTimeSeries
   * @category Aha! Model Attributes
   */
  interface RecordEventTimeSeriesAttributes {
    readonly eventTimeIndex: number;

    readonly eventType: RecordEventTypeEnum['value'];

    readonly originalEstimate: number;

    readonly remainingEstimate: number;

    readonly units: WorkUnitEnum['value'];

    readonly workDone: number;

    readonly seriesRange: DateTimeRange;
  }

  type RecordEventTimeSeriesQuery = Query<RecordEventTimeSeries, never>;

  /**
   * RecordEventTimeSeries Aha! model
   *
   *
   *
   * Instance type: [[RecordEventTimeSeries]]
   *
   * @category Aha! Model
   */
  interface RecordEventTimeSeriesConstructor
    extends ApplicationModelConstructor<
      RecordEventTimeSeries,
      never,
      RecordEventTimeSeriesQuery
    > {}

  /**
   * RecordEventTimeSeries Aha! model
   *
   *
   *
   * Constructor: [[RecordEventTimeSeriesConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordEventTimeSeries
    extends ApplicationModel,
      RecordEventTimeSeriesAttributes {
    readonly typename: 'RecordEventTimeSeries';

    readonly query: RecordEventTimeSeriesQuery;

    attributes: RecordEventTimeSeriesAttributes;
  }

  /**
   * Attributes for RecordLayout
   * @category Aha! Model Attributes
   */
  interface RecordLayoutAttributes {
    readonly recordType: CardLayoutRecordTypesEnum['value'];

    collapsed: CardView;

    expanded: CardView;
  }

  type RecordLayoutQuery = Query<RecordLayout, never>;

  /**
   * RecordLayout Aha! model
   *
   * A layout for a record
   *
   * Instance type: [[RecordLayout]]
   *
   * @category Aha! Model
   */
  interface RecordLayoutConstructor
    extends ApplicationModelConstructor<
      RecordLayout,
      never,
      RecordLayoutQuery
    > {}

  /**
   * RecordLayout Aha! model
   *
   * A layout for a record
   *
   * Constructor: [[RecordLayoutConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordLayout extends ApplicationModel, RecordLayoutAttributes {
    readonly typename: 'RecordLayout';

    readonly query: RecordLayoutQuery;

    attributes: RecordLayoutAttributes;
  }

  /**
   * Attributes for RecordLink
   * @category Aha! Model Attributes
   */
  interface RecordLinkAttributes {
    readonly childRecordId: RecordId;

    readonly childRecordType: string;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly inverted: boolean;

    readonly linkType: RecordLinkTypeEnum['value'];

    readonly parentRecordId: RecordId;

    readonly parentRecordType: string;

    readonly relationDescription: string;

    readonly updatedAt: string;

    /**
     * ChildRecord this record_link belongs to, if present
     */
    readonly childRecord: LinkableRecordUnion;

    /**
     * ParentRecord this record_link belongs to, if present
     */
    readonly parentRecord: LinkableRecordUnion;

    readonly permissions: ResourcePermissions;
  }

  type RecordLinkQuery = Query<RecordLink, never> & QueryFindable<RecordLink>;

  /**
   * RecordLink Aha! model
   *
   * A relationship between two records
   *
   * Instance type: [[RecordLink]]
   *
   * @category Aha! Model
   */
  interface RecordLinkConstructor
    extends ApplicationModelConstructor<RecordLink, never, RecordLinkQuery> {}

  /**
   * RecordLink Aha! model
   *
   * A relationship between two records
   *
   * Constructor: [[RecordLinkConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface RecordLink extends ApplicationModel, RecordLinkAttributes {
    readonly typename: 'RecordLink';

    readonly query: RecordLinkQuery;

    attributes: RecordLinkAttributes;
  }

  /**
   * Attributes for Release
   * @category Aha! Model Attributes
   */
  interface ReleaseAttributes {
    readonly capacityUnits: WorkUnitEnum['value'];

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly daysToRelease: number;

    developmentStartedOn: string | Date;

    readonly endOn: string | Date;

    /**
     * The number of epics
     */
    readonly epicsCount: number;

    /**
     * The formatted external release date for the release
     */
    readonly externalReleaseDate: string;

    /**
     * The number of features
     */
    readonly featuresCount: number;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    /**
     * The number of initiatives
     */
    readonly initiativesCount: number;

    readonly name: string;

    /**
     * True if the release appears in the parking lot, false if it is a scheduled release
     */
    readonly parkingLot: boolean;

    /**
     * Path to the details page
     */
    readonly path: string;

    readonly position: number;

    /**
     * The record's progress
     */
    readonly progress: number;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly releaseDate: string | Date;

    /**
     * The number of release phases
     */
    readonly releasePhasesCount: number;

    readonly startOn: string | Date;

    readonly updatedAt: string;

    /**
     * The number of watchers
     */
    readonly watchersCount: number;

    readonly workflowStatusId: RecordId;

    readonly owner: User;

    readonly permissions: ResourcePermissions;

    readonly project: Project;

    readonly terminology: TerminologyItem;

    readonly theme: Note;

    /**
     * Current workflow status
     */
    readonly workflowStatus: WorkflowStatus;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * Epics
     */
    readonly epics: Array<Epic>;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Features
     */
    readonly features: Array<Feature>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Initiatives
     */
    readonly initiatives: Array<Initiative>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    /**
     * Release phases
     */
    readonly releasePhases: Array<ReleasePhase>;

    readonly tasks: Array<Task>;

    /**
     * Watchers
     */
    readonly watchers: Array<User>;
  }

  type ReleaseQuery = Query<Release, ReleaseFilters> &
    QueryFindable<Release> &
    QueryListable<Release>;

  /**
   * Release Aha! model
   *
   * A group of records with a release date or theme
   *
   * Instance type: [[Release]]
   *
   * @category Aha! Model
   */
  interface ReleaseConstructor
    extends ApplicationModelConstructor<
      Release,
      ReleaseFilters,
      ReleaseQuery
    > {}

  /**
   * Release Aha! model
   *
   * A group of records with a release date or theme
   *
   * Constructor: [[ReleaseConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Release
    extends ApplicationModel,
      ReleaseAttributes,
      HasExtensionFields {
    readonly typename: 'Release';

    readonly terminologyName: 'Release';

    readonly query: ReleaseQuery;

    attributes: ReleaseAttributes;

    order: ReleaseOrder['value'];
  }

  /**
   * Attributes for ReleaseBurndownEvent
   * @category Aha! Model Attributes
   */
  interface ReleaseBurndownEventAttributes {
    /**
     * X value
     */
    readonly x: number;

    /**
     * Y value
     */
    readonly y: number;
  }

  type ReleaseBurndownEventQuery = Query<ReleaseBurndownEvent, never>;

  /**
   * ReleaseBurndownEvent Aha! model
   *
   *
   *
   * Instance type: [[ReleaseBurndownEvent]]
   *
   * @category Aha! Model
   */
  interface ReleaseBurndownEventConstructor
    extends ApplicationModelConstructor<
      ReleaseBurndownEvent,
      never,
      ReleaseBurndownEventQuery
    > {}

  /**
   * ReleaseBurndownEvent Aha! model
   *
   *
   *
   * Constructor: [[ReleaseBurndownEventConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ReleaseBurndownEvent
    extends ApplicationModel,
      ReleaseBurndownEventAttributes {
    readonly typename: 'ReleaseBurndownEvent';

    readonly query: ReleaseBurndownEventQuery;

    attributes: ReleaseBurndownEventAttributes;
  }

  /**
   * Attributes for ReleaseDateHistory
   * @category Aha! Model Attributes
   */
  interface ReleaseDateHistoryAttributes {
    /**
     * Previous value
     */
    readonly changedFrom: string | Date;

    /**
     * Date of change
     */
    readonly changedOn: string | Date;

    /**
     * New value
     */
    readonly changedTo: string | Date;

    /**
     * Title of date field
     */
    readonly title: string;

    /**
     * User who made the change
     */
    readonly changedBy: User;
  }

  type ReleaseDateHistoryQuery = Query<ReleaseDateHistory, never>;

  /**
   * ReleaseDateHistory Aha! model
   *
   *
   *
   * Instance type: [[ReleaseDateHistory]]
   *
   * @category Aha! Model
   */
  interface ReleaseDateHistoryConstructor
    extends ApplicationModelConstructor<
      ReleaseDateHistory,
      never,
      ReleaseDateHistoryQuery
    > {}

  /**
   * ReleaseDateHistory Aha! model
   *
   *
   *
   * Constructor: [[ReleaseDateHistoryConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ReleaseDateHistory
    extends ApplicationModel,
      ReleaseDateHistoryAttributes {
    readonly typename: 'ReleaseDateHistory';

    readonly query: ReleaseDateHistoryQuery;

    attributes: ReleaseDateHistoryAttributes;
  }

  /**
   * Attributes for ReleasePhase
   * @category Aha! Model Attributes
   */
  interface ReleasePhaseAttributes {
    /**
     * Hex color converted to decimal
     */
    readonly color: number;

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    readonly endOn: string | Date;

    /**
     * The number of features
     */
    readonly featuresCount: number;

    readonly id: RecordId;

    readonly name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * The record's progress
     */
    readonly progress: number;

    readonly projectId: RecordId;

    readonly releaseId: RecordId;

    readonly startOn: string | Date;

    readonly type: ReleasePhaseTypeEnum['value'];

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    /**
     * Project this release_phase belongs to
     */
    readonly project: Project;

    /**
     * Release this release_phase belongs to
     */
    readonly release: Release;

    readonly terminology: TerminologyItem;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Features
     */
    readonly features: Array<Feature>;
  }

  type ReleasePhaseQuery = Query<ReleasePhase, never> &
    QueryFindable<ReleasePhase>;

  /**
   * ReleasePhase Aha! model
   *
   *
   *
   * Instance type: [[ReleasePhase]]
   *
   * @category Aha! Model
   */
  interface ReleasePhaseConstructor
    extends ApplicationModelConstructor<
      ReleasePhase,
      never,
      ReleasePhaseQuery
    > {}

  /**
   * ReleasePhase Aha! model
   *
   *
   *
   * Constructor: [[ReleasePhaseConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ReleasePhase extends ApplicationModel, ReleasePhaseAttributes {
    readonly typename: 'ReleasePhase';

    readonly terminologyName: 'Release phase';

    readonly query: ReleasePhaseQuery;

    attributes: ReleasePhaseAttributes;
  }

  /**
   * Attributes for ReleaseRetrospectiveRecord
   * @category Aha! Model Attributes
   */
  interface ReleaseRetrospectiveRecordAttributes {
    /**
     * When the record was added to the release
     */
    readonly addedOn: string | Date;

    readonly assignedToUserId: RecordId;

    /**
     * If the record was present at the start of the release
     */
    readonly committed: boolean;

    /**
     * If the record is completed
     */
    readonly completed: boolean;

    /**
     * ID of the record
     */
    readonly id: RecordId;

    /**
     * Name of the record
     */
    readonly name: string;

    /**
     * Original estimate of the record
     */
    readonly originalEstimate: number;

    /**
     * Type of the record
     */
    readonly recordType: string;

    /**
     * Remaining estimate of the record
     */
    readonly remainingEstimate: number;

    /**
     * If the record was removed from the release
     */
    readonly removed: boolean;

    /**
     * When the record was removed from the release
     */
    readonly removedOn: string | Date;

    /**
     * Whether or nor the estimates are rolled up for this record
     */
    readonly rollup: boolean;

    /**
     * Drawer URL of the record
     */
    readonly url: string;

    /**
     * Work done of the record
     */
    readonly workDone: number;
  }

  type ReleaseRetrospectiveRecordQuery = Query<
    ReleaseRetrospectiveRecord,
    never
  > &
    QueryFindable<ReleaseRetrospectiveRecord>;

  /**
   * ReleaseRetrospectiveRecord Aha! model
   *
   * The cumulative data for a single record in a release retrospective
   *
   * Instance type: [[ReleaseRetrospectiveRecord]]
   *
   * @category Aha! Model
   */
  interface ReleaseRetrospectiveRecordConstructor
    extends ApplicationModelConstructor<
      ReleaseRetrospectiveRecord,
      never,
      ReleaseRetrospectiveRecordQuery
    > {}

  /**
   * ReleaseRetrospectiveRecord Aha! model
   *
   * The cumulative data for a single record in a release retrospective
   *
   * Constructor: [[ReleaseRetrospectiveRecordConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ReleaseRetrospectiveRecord
    extends ApplicationModel,
      ReleaseRetrospectiveRecordAttributes {
    readonly typename: 'ReleaseRetrospectiveRecord';

    readonly query: ReleaseRetrospectiveRecordQuery;

    attributes: ReleaseRetrospectiveRecordAttributes;
  }

  /**
   * Attributes for ReleaseRetrospectiveTeam
   * @category Aha! Model Attributes
   */
  interface ReleaseRetrospectiveTeamAttributes {
    /**
     * Number of added records
     */
    readonly addedCount: number;

    /**
     * Added estimate
     */
    readonly addedEstimate: number;

    /**
     * Number of committed records
     */
    readonly committedCount: number;

    /**
     * Committed estimate
     */
    readonly committedEstimate: number;

    /**
     * Number of completed records
     */
    readonly completedCount: number;

    /**
     * Completed estimate
     */
    readonly completedEstimate: number;

    /**
     * Number of removed records
     */
    readonly removedCount: number;

    /**
     * Removed estimate
     */
    readonly removedEstimate: number;

    /**
     * ID of the team
     */
    readonly teamId: RecordId;
  }

  type ReleaseRetrospectiveTeamQuery = Query<ReleaseRetrospectiveTeam, never>;

  /**
   * ReleaseRetrospectiveTeam Aha! model
   *
   * Information for the team progress panel about a team
   *
   * Instance type: [[ReleaseRetrospectiveTeam]]
   *
   * @category Aha! Model
   */
  interface ReleaseRetrospectiveTeamConstructor
    extends ApplicationModelConstructor<
      ReleaseRetrospectiveTeam,
      never,
      ReleaseRetrospectiveTeamQuery
    > {}

  /**
   * ReleaseRetrospectiveTeam Aha! model
   *
   * Information for the team progress panel about a team
   *
   * Constructor: [[ReleaseRetrospectiveTeamConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ReleaseRetrospectiveTeam
    extends ApplicationModel,
      ReleaseRetrospectiveTeamAttributes {
    readonly typename: 'ReleaseRetrospectiveTeam';

    readonly query: ReleaseRetrospectiveTeamQuery;

    attributes: ReleaseRetrospectiveTeamAttributes;
  }

  /**
   * Attributes for Requirement
   * @category Aha! Model Attributes
   */
  interface RequirementAttributes {
    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly createdAt: string;

    /**
     * Length of time, in seconds, that record has been in the current team workflow status
     */
    readonly durationInTeamWorkflowStatus: number;

    readonly epicId: RecordId;

    readonly featureId: RecordId;

    /**
     * The number of goals
     */
    readonly goalsCount: number;

    readonly id: RecordId;

    readonly initiativeId: RecordId;

    readonly iterationId: RecordId;

    /**
     * Null if the record isn't manually flagged, otherwise the comment attached to it (Empty string means flagged without comment)
     */
    manualRiskComment: string;

    name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    /**
     * Position of the requirement when a record_position does not apply
     */
    position: number;

    readonly programIncrementId: RecordId;

    readonly projectId: RecordId;

    /**
     * Reference number of the record. Example: DEV-123
     */
    readonly referenceNum: string;

    readonly releaseId: RecordId;

    readonly releasePhaseId: RecordId;

    readonly riskFactors: any;

    readonly riskFactorsCount: number;

    /**
     * Comma-separated list of tag names
     */
    readonly tagList: string;

    readonly teamId: RecordId;

    readonly teamWorkflowStatusId: RecordId;

    readonly updatedAt: string;

    readonly workflowStatusId: RecordId;

    assignedToUser: User;

    /**
     * Best estimated amount of work
     */
    readonly bestEstimate: Estimate;

    readonly createdByUser: User;

    /**
     * Description note
     */
    description: Note;

    /**
     * Epic this requirement belongs to, if present
     */
    readonly epic: Epic;

    /**
     * Feature this requirement belongs to
     */
    feature: Feature;

    /**
     * Initial estimated amount of work
     */
    readonly initialEstimate: Estimate;

    /**
     * The initiative for the requirement, inherited from its feature.
     */
    readonly initiative: Initiative;

    /**
     * Iteration this record belongs to
     */
    iteration: Iteration;

    /**
     * Detailed estimated amount of work
     */
    readonly originalEstimate: Estimate;

    readonly permissions: ResourcePermissions;

    /**
     * Program increment this record is assigned to
     */
    readonly programIncrement: ProgramIncrement;

    /**
     * Project this requirement belongs to
     */
    readonly project: Project;

    /**
     * Release this requirement belongs to
     */
    readonly release: Release;

    /**
     * The release phase for the requirement, inherited from its feature.
     */
    readonly releasePhase: ReleasePhase;

    /**
     * Current estimate of work left to do
     */
    readonly remainingEstimate: Estimate;

    /**
     * Team this record belongs to
     */
    team: Project;

    /**
     * Current team workflow status
     */
    teamWorkflowStatus: WorkflowStatus;

    readonly terminology: TerminologyItem;

    /**
     * Amount of work done so far
     */
    readonly workDone: Estimate;

    /**
     * Current overall workflow status
     */
    workflowStatus: WorkflowStatus;

    /**
     * The position of a record when it is listed in a specific bookmark type
     */
    readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;

    /**
     * Child relationship links to other records
     */
    readonly childRecordLinks: Array<RecordLink>;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Custom field values
     */
    readonly customFieldValues: Array<CustomFieldValue>;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Goals
     */
    readonly goals: Array<Goal>;

    /**
     * Parent relationship links to other records
     */
    readonly parentRecordLinks: Array<RecordLink>;

    readonly tags: Array<Tag>;

    readonly tasks: Array<Task>;
  }

  type RequirementQuery = Query<Requirement, RequirementFilters> &
    QueryFindable<Requirement> &
    QueryListable<Requirement>;

  /**
   * Requirement Aha! model
   *
   * A record representing one part of a larger feature
   *
   * Instance type: [[Requirement]]
   *
   * @category Aha! Model
   */
  interface RequirementConstructor
    extends ApplicationModelConstructor<
      Requirement,
      RequirementFilters,
      RequirementQuery
    > {}

  /**
   * Requirement Aha! model
   *
   * A record representing one part of a larger feature
   *
   * Constructor: [[RequirementConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Requirement
    extends ApplicationModel,
      RequirementAttributes,
      HasExtensionFields {
    readonly typename: 'Requirement';

    readonly terminologyName: 'Requirement';

    readonly query: RequirementQuery;

    attributes: RequirementAttributes;

    order: RequirementOrder['value'];
  }

  /**
   * Attributes for ResourcePermissions
   * @category Aha! Model Attributes
   */
  interface ResourcePermissionsAttributes {
    /**
     * Whether the user is allowed to perform the 'destroy' action for this resource
     */
    readonly destroy: boolean;

    /**
     * Whether the user is allowed to perform the 'duplicate' action for this resource
     */
    readonly duplicate: boolean;

    /**
     * Whether the user is allowed to perform the 'show' action for this resource
     */
    readonly show: boolean;

    /**
     * Whether the user is allowed to perform the 'update' action for this resource
     */
    readonly update: boolean;
  }

  type ResourcePermissionsQuery = Query<ResourcePermissions, never>;

  /**
   * ResourcePermissions Aha! model
   *
   * The user's permissions for this specific resource.
   *
   * Instance type: [[ResourcePermissions]]
   *
   * @category Aha! Model
   */
  interface ResourcePermissionsConstructor
    extends ApplicationModelConstructor<
      ResourcePermissions,
      never,
      ResourcePermissionsQuery
    > {}

  /**
   * ResourcePermissions Aha! model
   *
   * The user's permissions for this specific resource.
   *
   * Constructor: [[ResourcePermissionsConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ResourcePermissions
    extends ApplicationModel,
      ResourcePermissionsAttributes {
    readonly typename: 'ResourcePermissions';

    readonly query: ResourcePermissionsQuery;

    attributes: ResourcePermissionsAttributes;
  }

  /**
   * Attributes for ScoreFact
   * @category Aha! Model Attributes
   */
  interface ScoreFactAttributes {
    /**
     * If an automatable score fact is currently automated or not
     */
    readonly equationActive: boolean;

    /**
     * If a score fact is automatable
     */
    readonly equationType: boolean;

    readonly id: RecordId;

    readonly value: number;

    readonly scoringSystemMetric: ScoringSystemMetric;
  }

  type ScoreFactQuery = Query<ScoreFact, never> & QueryFindable<ScoreFact>;

  /**
   * ScoreFact Aha! model
   *
   *
   *
   * Instance type: [[ScoreFact]]
   *
   * @category Aha! Model
   */
  interface ScoreFactConstructor
    extends ApplicationModelConstructor<ScoreFact, never, ScoreFactQuery> {}

  /**
   * ScoreFact Aha! model
   *
   *
   *
   * Constructor: [[ScoreFactConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ScoreFact extends ApplicationModel, ScoreFactAttributes {
    readonly typename: 'ScoreFact';

    readonly query: ScoreFactQuery;

    attributes: ScoreFactAttributes;
  }

  /**
   * Attributes for ScoringSystemMetric
   * @category Aha! Model Attributes
   */
  interface ScoringSystemMetricAttributes {
    readonly controlType: string;

    readonly equation: string;

    readonly equationDefaultValue: number;

    readonly equationRecordClasses: Array<string>;

    readonly equationStructure: any;

    readonly id: RecordId;

    readonly maximumValue: number;

    readonly minimumValue: number;

    readonly name: string;

    readonly position: number;

    readonly prefixUnits: boolean;

    readonly scoringSystemId: RecordId;

    readonly sequenceType: number;

    readonly sequenceValues: string;

    readonly stepValue: number;

    readonly units: string;

    readonly value: number;

    readonly values: Array<number>;

    readonly weight: number;

    /**
     * Description note
     */
    readonly description: Note;

    readonly permissions: ResourcePermissions;
  }

  type ScoringSystemMetricQuery = Query<ScoringSystemMetric, never> &
    QueryFindable<ScoringSystemMetric>;

  /**
   * ScoringSystemMetric Aha! model
   *
   *
   *
   * Instance type: [[ScoringSystemMetric]]
   *
   * @category Aha! Model
   */
  interface ScoringSystemMetricConstructor
    extends ApplicationModelConstructor<
      ScoringSystemMetric,
      never,
      ScoringSystemMetricQuery
    > {}

  /**
   * ScoringSystemMetric Aha! model
   *
   *
   *
   * Constructor: [[ScoringSystemMetricConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ScoringSystemMetric
    extends ApplicationModel,
      ScoringSystemMetricAttributes {
    readonly typename: 'ScoringSystemMetric';

    readonly query: ScoringSystemMetricQuery;

    attributes: ScoringSystemMetricAttributes;
  }

  /**
   * Attributes for ScreenDefinition
   * @category Aha! Model Attributes
   */
  interface ScreenDefinitionAttributes {
    readonly id: RecordId;

    /**
     * The screen definition's record type.
     */
    readonly screenableType: ScreenableTypeEnum['value'];

    readonly permissions: ResourcePermissions;

    readonly customFieldDefinitions: Array<CustomFieldDefinition>;
  }

  type ScreenDefinitionQuery = Query<ScreenDefinition, never> &
    QueryFindable<ScreenDefinition>;

  /**
   * ScreenDefinition Aha! model
   *
   * A screen definition (custom layout).
   *
   * Instance type: [[ScreenDefinition]]
   *
   * @category Aha! Model
   */
  interface ScreenDefinitionConstructor
    extends ApplicationModelConstructor<
      ScreenDefinition,
      never,
      ScreenDefinitionQuery
    > {}

  /**
   * ScreenDefinition Aha! model
   *
   * A screen definition (custom layout).
   *
   * Constructor: [[ScreenDefinitionConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface ScreenDefinition
    extends ApplicationModel,
      ScreenDefinitionAttributes {
    readonly typename: 'ScreenDefinition';

    readonly query: ScreenDefinitionQuery;

    attributes: ScreenDefinitionAttributes;
  }

  /**
   * Attributes for SharedPage
   * @category Aha! Model Attributes
   */
  interface SharedPageAttributes {
    access: SharedPageAccessEnum['value'];

    readonly createdAt: string;

    readonly id: RecordId;

    readonly updatedAt: string;

    readonly page: Page;

    readonly user: User;
  }

  type SharedPageQuery = Query<SharedPage, SharedPageFilters> &
    QueryFindable<SharedPage> &
    QueryListable<SharedPage>;

  /**
   * SharedPage Aha! model
   *
   * A sharing connection between a page and a user
   *
   * Instance type: [[SharedPage]]
   *
   * @category Aha! Model
   */
  interface SharedPageConstructor
    extends ApplicationModelConstructor<
      SharedPage,
      SharedPageFilters,
      SharedPageQuery
    > {}

  /**
   * SharedPage Aha! model
   *
   * A sharing connection between a page and a user
   *
   * Constructor: [[SharedPageConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface SharedPage extends ApplicationModel, SharedPageAttributes {
    readonly typename: 'SharedPage';

    readonly query: SharedPageQuery;

    attributes: SharedPageAttributes;

    order: SharedPageOrder['value'];
  }

  /**
   * Attributes for Tag
   * @category Aha! Model Attributes
   */
  interface TagAttributes {
    /**
     * Hex color converted to decimal
     */
    readonly color: number;

    readonly id: RecordId;

    readonly name: string;

    readonly permissions: ResourcePermissions;
  }

  type TagQuery = Query<Tag, TagFilters> &
    QueryFindable<Tag> &
    QueryListable<Tag>;

  /**
   * Tag Aha! model
   *
   * A tag on a record
   *
   * Instance type: [[Tag]]
   *
   * @category Aha! Model
   */
  interface TagConstructor
    extends ApplicationModelConstructor<Tag, TagFilters, TagQuery> {}

  /**
   * Tag Aha! model
   *
   * A tag on a record
   *
   * Constructor: [[TagConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Tag extends ApplicationModel, TagAttributes {
    readonly typename: 'Tag';

    readonly query: TagQuery;

    attributes: TagAttributes;
  }

  /**
   * Attributes for Task
   * @category Aha! Model Attributes
   */
  interface TaskAttributes {
    body: string;

    /**
     * The number of comments
     */
    readonly commentsCount: number;

    readonly completedByMe: boolean;

    readonly completedDate: string | Date;

    readonly createdAt: string;

    dueDate: string | Date;

    readonly id: RecordId;

    name: string;

    /**
     * Path to the details page
     */
    readonly path: string;

    position: number;

    readonly recurrenceRule: string;

    status: TaskStatusEnum['value'];

    /**
     * The number of task users
     */
    readonly taskUsersCount: number;

    readonly updatedAt: string;

    /**
     * The number of users
     */
    readonly usersCount: number;

    readonly createdByUser: User;

    readonly permissions: ResourcePermissions;

    record: TaskableSubjectUnion;

    readonly terminology: TerminologyItem;

    /**
     * Comments
     */
    readonly comments: Array<Comment>;

    /**
     * Task users
     */
    readonly taskUsers: Array<TaskUser>;

    /**
     * Users
     */
    readonly users: Array<User>;
  }

  type TaskQuery = Query<Task, TaskFilters> &
    QueryFindable<Task> &
    QueryListable<Task>;

  /**
   * Task Aha! model
   *
   *
   *
   * Instance type: [[Task]]
   *
   * @category Aha! Model
   */
  interface TaskConstructor
    extends ApplicationModelConstructor<Task, TaskFilters, TaskQuery> {}

  /**
   * Task Aha! model
   *
   *
   *
   * Constructor: [[TaskConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Task extends ApplicationModel, TaskAttributes {
    readonly typename: 'Task';

    readonly terminologyName: 'Task';

    readonly query: TaskQuery;

    attributes: TaskAttributes;

    order: TaskOrder['value'];
  }

  /**
   * Attributes for TaskUser
   * @category Aha! Model Attributes
   */
  interface TaskUserAttributes {
    readonly completedDate: string | Date;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly status: TaskStatusEnum['value'];

    readonly updatedAt: string;

    readonly assignee: TaskUserAssigneeUnion;

    readonly permissions: ResourcePermissions;

    readonly task: Task;

    readonly user: User;
  }

  type TaskUserQuery = Query<TaskUser, never> & QueryFindable<TaskUser>;

  /**
   * TaskUser Aha! model
   *
   *
   *
   * Instance type: [[TaskUser]]
   *
   * @category Aha! Model
   */
  interface TaskUserConstructor
    extends ApplicationModelConstructor<TaskUser, never, TaskUserQuery> {}

  /**
   * TaskUser Aha! model
   *
   *
   *
   * Constructor: [[TaskUserConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface TaskUser extends ApplicationModel, TaskUserAttributes {
    readonly typename: 'TaskUser';

    readonly query: TaskUserQuery;

    attributes: TaskUserAttributes;
  }

  /**
   * Attributes for Terminology
   * @category Aha! Model Attributes
   */
  interface TerminologyAttributes {
    readonly epic: TerminologyItem;

    readonly epoch: TerminologyItem;

    readonly feature: TerminologyItem;

    readonly goal: TerminologyItem;

    readonly idea: TerminologyItem;

    readonly ideaEndorsement: TerminologyItem;

    readonly ideaOrganization: TerminologyItem;

    readonly initiative: TerminologyItem;

    readonly iteration: TerminologyItem;

    readonly masterRelease: TerminologyItem;

    readonly product: TerminologyItem;

    readonly productLine: TerminologyItem;

    readonly productOwner: TerminologyItem;

    readonly programIncrement: TerminologyItem;

    readonly release: TerminologyItem;

    readonly releaseDate: TerminologyItem;

    readonly releaseMilestone: TerminologyItem;

    readonly releasePhase: TerminologyItem;

    readonly requirement: TerminologyItem;

    readonly subRelease: TerminologyItem;

    readonly task: TerminologyItem;
  }

  type TerminologyQuery = Query<Terminology, never>;

  /**
   * Terminology Aha! model
   *
   *
   *
   * Instance type: [[Terminology]]
   *
   * @category Aha! Model
   */
  interface TerminologyConstructor
    extends ApplicationModelConstructor<Terminology, never, TerminologyQuery> {}

  /**
   * Terminology Aha! model
   *
   *
   *
   * Constructor: [[TerminologyConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Terminology extends ApplicationModel, TerminologyAttributes {
    readonly typename: 'Terminology';

    readonly query: TerminologyQuery;

    attributes: TerminologyAttributes;
  }

  /**
   * Attributes for TerminologyItem
   * @category Aha! Model Attributes
   */
  interface TerminologyItemAttributes {
    readonly normal: string;

    readonly plural: string;
  }

  type TerminologyItemQuery = Query<TerminologyItem, never>;

  /**
   * TerminologyItem Aha! model
   *
   *
   *
   * Instance type: [[TerminologyItem]]
   *
   * @category Aha! Model
   */
  interface TerminologyItemConstructor
    extends ApplicationModelConstructor<
      TerminologyItem,
      never,
      TerminologyItemQuery
    > {}

  /**
   * TerminologyItem Aha! model
   *
   *
   *
   * Constructor: [[TerminologyItemConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface TerminologyItem
    extends ApplicationModel,
      TerminologyItemAttributes {
    readonly typename: 'TerminologyItem';

    readonly query: TerminologyItemQuery;

    attributes: TerminologyItemAttributes;
  }

  /**
   * Attributes for Unimplemented
   * @category Aha! Model Attributes
   */
  interface UnimplementedAttributes {
    readonly id: RecordId;

    readonly name: string;
  }

  type UnimplementedQuery = Query<Unimplemented, never> &
    QueryFindable<Unimplemented>;

  /**
   * Unimplemented Aha! model
   *
   *
   *
   * Instance type: [[Unimplemented]]
   *
   * @category Aha! Model
   */
  interface UnimplementedConstructor
    extends ApplicationModelConstructor<
      Unimplemented,
      never,
      UnimplementedQuery
    > {}

  /**
   * Unimplemented Aha! model
   *
   *
   *
   * Constructor: [[UnimplementedConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Unimplemented extends ApplicationModel, UnimplementedAttributes {
    readonly typename: 'Unimplemented';

    readonly query: UnimplementedQuery;

    attributes: UnimplementedAttributes;
  }

  /**
   * Attributes for User
   * @category Aha! Model Attributes
   */
  interface UserAttributes {
    /**
     * URL to the user's avatar. Defaults to 32px
     */
    readonly avatarUrl: string;

    readonly createdAt: string;

    readonly email: string;

    readonly id: RecordId;

    readonly initials: string;

    readonly name: string;

    /**
     * User's selected time zone as IANA time zone database name
     */
    readonly timezone: string;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    /**
     * Additional data stored by extensions
     */
    readonly extensionFields: Array<ExtensionField>;

    /**
     * Projects this user belongs to
     */
    readonly projects: Array<Project>;

    readonly taskUsers: Array<TaskUser>;
  }

  type UserQuery = Query<User, UserFilters> &
    QueryFindable<User> &
    QueryListable<User>;

  /**
   * User Aha! model
   *
   *
   *
   * Instance type: [[User]]
   *
   * @category Aha! Model
   */
  interface UserConstructor
    extends ApplicationModelConstructor<User, UserFilters, UserQuery> {}

  /**
   * User Aha! model
   *
   *
   *
   * Constructor: [[UserConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface User extends ApplicationModel, UserAttributes, HasExtensionFields {
    readonly typename: 'User';

    readonly query: UserQuery;

    attributes: UserAttributes;
  }

  /**
   * Attributes for UserPreference
   * @category Aha! Model Attributes
   */
  interface UserPreferenceAttributes {
    readonly name: string;

    readonly value: any;
  }

  type UserPreferenceQuery = Query<UserPreference, UserPreferenceFilters> &
    QueryListable<UserPreference>;

  /**
   * UserPreference Aha! model
   *
   * A user preference
   *
   * Instance type: [[UserPreference]]
   *
   * @category Aha! Model
   */
  interface UserPreferenceConstructor
    extends ApplicationModelConstructor<
      UserPreference,
      UserPreferenceFilters,
      UserPreferenceQuery
    > {}

  /**
   * UserPreference Aha! model
   *
   * A user preference
   *
   * Constructor: [[UserPreferenceConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface UserPreference extends ApplicationModel, UserPreferenceAttributes {
    readonly typename: 'UserPreference';

    readonly query: UserPreferenceQuery;

    attributes: UserPreferenceAttributes;
  }

  /**
   * Attributes for Whiteboard
   * @category Aha! Model Attributes
   */
  interface WhiteboardAttributes {
    readonly collaborativeVersion: number;

    /**
     * Content of the whiteboard
     */
    readonly editorContent: any;

    /**
     * Attributes to pass to the whiteboard component
     */
    readonly editorProperties: any;

    readonly id: RecordId;

    readonly usedTemplateIds: Array<RecordId>;

    readonly permissions: ResourcePermissions;

    readonly project: Project;

    readonly user: User;

    readonly whiteboardable: WhiteboardableSubjectUnion;

    readonly authors: Array<User>;
  }

  type WhiteboardQuery = Query<Whiteboard, never> & QueryFindable<Whiteboard>;

  /**
   * Whiteboard Aha! model
   *
   *
   *
   * Instance type: [[Whiteboard]]
   *
   * @category Aha! Model
   */
  interface WhiteboardConstructor
    extends ApplicationModelConstructor<Whiteboard, never, WhiteboardQuery> {}

  /**
   * Whiteboard Aha! model
   *
   *
   *
   * Constructor: [[WhiteboardConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Whiteboard extends ApplicationModel, WhiteboardAttributes {
    readonly typename: 'Whiteboard';

    readonly query: WhiteboardQuery;

    attributes: WhiteboardAttributes;
  }

  /**
   * Attributes for WipLimit
   * @category Aha! Model Attributes
   */
  interface WipLimitAttributes {
    /**
     * The maximum number of records in a status before showing a WIP limit warning
     */
    readonly limit: number;

    /**
     * Workflow status that the WIP limit applies to
     */
    readonly workflowStatusId: RecordId;
  }

  type WipLimitQuery = Query<WipLimit, never>;

  /**
   * WipLimit Aha! model
   *
   *
   *
   * Instance type: [[WipLimit]]
   *
   * @category Aha! Model
   */
  interface WipLimitConstructor
    extends ApplicationModelConstructor<WipLimit, never, WipLimitQuery> {}

  /**
   * WipLimit Aha! model
   *
   *
   *
   * Constructor: [[WipLimitConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface WipLimit extends ApplicationModel, WipLimitAttributes {
    readonly typename: 'WipLimit';

    readonly query: WipLimitQuery;

    attributes: WipLimitAttributes;
  }

  /**
   * Attributes for Workflow
   * @category Aha! Model Attributes
   */
  interface WorkflowAttributes {
    /**
     * If true, this is a global status that cannot be edited
     */
    readonly builtIn: boolean;

    readonly createdAt: string;

    readonly id: RecordId;

    readonly name: string;

    /**
     * Whether a workflow is fixed or not
     */
    readonly transitionsOnly: boolean;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    readonly workflowStatuses: Array<WorkflowStatus>;
  }

  type WorkflowQuery = Query<Workflow, never> & QueryFindable<Workflow>;

  /**
   * Workflow Aha! model
   *
   * A record workflow
   *
   * Instance type: [[Workflow]]
   *
   * @category Aha! Model
   */
  interface WorkflowConstructor
    extends ApplicationModelConstructor<Workflow, never, WorkflowQuery> {}

  /**
   * Workflow Aha! model
   *
   * A record workflow
   *
   * Constructor: [[WorkflowConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface Workflow extends ApplicationModel, WorkflowAttributes {
    readonly typename: 'Workflow';

    readonly query: WorkflowQuery;

    attributes: WorkflowAttributes;
  }

  /**
   * Attributes for WorkflowKind
   * @category Aha! Model Attributes
   */
  interface WorkflowKindAttributes {
    readonly createdAt: string;

    readonly id: RecordId;

    readonly name: string;

    readonly position: number;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    /**
     * Workflow containing this kind
     */
    readonly workflow: Workflow;
  }

  type WorkflowKindQuery = Query<WorkflowKind, never> &
    QueryFindable<WorkflowKind>;

  /**
   * WorkflowKind Aha! model
   *
   * A type of a record
   *
   * Instance type: [[WorkflowKind]]
   *
   * @category Aha! Model
   */
  interface WorkflowKindConstructor
    extends ApplicationModelConstructor<
      WorkflowKind,
      never,
      WorkflowKindQuery
    > {}

  /**
   * WorkflowKind Aha! model
   *
   * A type of a record
   *
   * Constructor: [[WorkflowKindConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface WorkflowKind extends ApplicationModel, WorkflowKindAttributes {
    readonly typename: 'WorkflowKind';

    readonly query: WorkflowKindQuery;

    attributes: WorkflowKindAttributes;
  }

  /**
   * Attributes for WorkflowStatus
   * @category Aha! Model Attributes
   */
  interface WorkflowStatusAttributes {
    /**
     * If true, this is a global status that cannot be edited
     */
    readonly builtIn: boolean;

    /**
     * Hex color converted to decimal
     */
    color: number;

    readonly createdAt: string;

    readonly id: RecordId;

    internalMeaning: InternalMeaning['value'];

    name: string;

    position: number;

    readonly updatedAt: string;

    readonly permissions: ResourcePermissions;

    /**
     * Workflow containing this status
     */
    workflow: Workflow;
  }

  type WorkflowStatusQuery = Query<WorkflowStatus, never> &
    QueryFindable<WorkflowStatus>;

  /**
   * WorkflowStatus Aha! model
   *
   * A single status within a workflow
   *
   * Instance type: [[WorkflowStatus]]
   *
   * @category Aha! Model
   */
  interface WorkflowStatusConstructor
    extends ApplicationModelConstructor<
      WorkflowStatus,
      never,
      WorkflowStatusQuery
    > {}

  /**
   * WorkflowStatus Aha! model
   *
   * A single status within a workflow
   *
   * Constructor: [[WorkflowStatusConstructor]]
   *
   * @category Aha! Model Instance
   */
  interface WorkflowStatus extends ApplicationModel, WorkflowStatusAttributes {
    readonly typename: 'WorkflowStatus';

    readonly query: WorkflowStatusQuery;

    attributes: WorkflowStatusAttributes;
  }

  type AiRequestPage = Aha.Pagination<AiRequest>;
  type PivotRowPage = Aha.Pagination<PivotRow>;
  type CompetitorPage = Aha.Pagination<Competitor>;
  type ConnectedPagePage = Aha.Pagination<ConnectedPage>;
  type Estimate = {
    /**
     * A string representation of the estimate. Example: 14p for 14 points
     */
    text: string;
    units: WorkUnitEnum['value'];
    value: number;
  };
  type EpicPage = Aha.Pagination<Epic>;
  type ExtensionContributionPage = Aha.Pagination<ExtensionContribution>;
  type ExtensionFieldPage = Aha.Pagination<ExtensionField>;
  type ExtensionLogPage = Aha.Pagination<ExtensionLog>;
  type FeaturePage = Aha.Pagination<Feature>;
  type GoalPage = Aha.Pagination<Goal>;
  type IdeaPage = Aha.Pagination<Idea>;
  type InitiativePage = Aha.Pagination<Initiative>;
  type IterationPage = Aha.Pagination<Iteration>;
  type NoteTemplatePage = Aha.Pagination<NoteTemplate>;
  type NotificationPage = Aha.Pagination<Notification>;
  type PagePage = Aha.Pagination<Page>;
  type PersonaPage = Aha.Pagination<Persona>;
  type ProgramIncrementPage = Aha.Pagination<ProgramIncrement>;
  type ProgramIncrementIterationPage =
    Aha.Pagination<ProgramIncrementIteration>;
  type ProjectPage = Aha.Pagination<Project>;
  type ReleasePage = Aha.Pagination<Release>;
  type RequirementPage = Aha.Pagination<Requirement>;
  type SharedPagePage = Aha.Pagination<SharedPage>;
  type TagPage = Aha.Pagination<Tag>;
  type TaskPage = Aha.Pagination<Task>;
  type UserPage = Aha.Pagination<User>;
  type UserPreferencePage = Aha.Pagination<UserPreference>;
  interface Models {
    Account: AccountConstructor;
    AddPageTo: AddPageToConstructor;
    AiRequest: AiRequestConstructor;
    Attachment: AttachmentConstructor;
    Bookmark: BookmarkConstructor;
    BookmarksCycleTimeChart: BookmarksCycleTimeChartConstructor;
    BookmarksDeliveryRisksChart: BookmarksDeliveryRisksChartConstructor;
    BookmarksEpicPriorityList: BookmarksEpicPriorityListConstructor;
    BookmarksFeaturePriorityList: BookmarksFeaturePriorityListConstructor;
    BookmarksIdeaPriorityList: BookmarksIdeaPriorityListConstructor;
    BookmarksInitiativePriorityList: BookmarksInitiativePriorityListConstructor;
    BookmarksIterationBurndown: BookmarksIterationBurndownConstructor;
    BookmarksProductValueChart: BookmarksProductValueChartConstructor;
    BookmarksProgramBoard: BookmarksProgramBoardConstructor;
    BookmarksRecordPosition: BookmarksRecordPositionConstructor;
    BookmarksReleaseRetrospective: BookmarksReleaseRetrospectiveConstructor;
    BookmarksRetrospectiveReport: BookmarksRetrospectiveReportConstructor;
    BookmarksTeamBacklog: BookmarksTeamBacklogConstructor;
    BookmarksThroughputChart: BookmarksThroughputChartConstructor;
    BookmarksVelocityChart: BookmarksVelocityChartConstructor;
    BookmarksWorkflowBoard: BookmarksWorkflowBoardConstructor;
    CardField: CardFieldConstructor;
    CardGroup: CardGroupConstructor;
    CardLayout: CardLayoutConstructor;
    CardRow: CardRowConstructor;
    CardStyling: CardStylingConstructor;
    CardView: CardViewConstructor;
    Comment: CommentConstructor;
    Competitor: CompetitorConstructor;
    ConnectedPage: ConnectedPageConstructor;
    CustomFieldDefinition: CustomFieldDefinitionConstructor;
    CustomFieldValue: CustomFieldValueConstructor;
    DateTimeRange: DateTimeRangeConstructor;
    Epic: EpicConstructor;
    Epoch: EpochConstructor;
    ExportPage: ExportPageConstructor;
    Extension: ExtensionConstructor;
    ExtensionContribution: ExtensionContributionConstructor;
    ExtensionField: ExtensionFieldConstructor;
    ExtensionInvocation: ExtensionInvocationConstructor;
    ExtensionLog: ExtensionLogConstructor;
    Feature: FeatureConstructor;
    Goal: GoalConstructor;
    Idea: IdeaConstructor;
    IdeaCategory: IdeaCategoryConstructor;
    IdeasIdeaPortal: IdeasIdeaPortalConstructor;
    Initiative: InitiativeConstructor;
    Iteration: IterationConstructor;
    IterationTeamMember: IterationTeamMemberConstructor;
    LineBreak: LineBreakConstructor;
    Note: NoteConstructor;
    NoteTemplate: NoteTemplateConstructor;
    Notification: NotificationConstructor;
    Page: PageConstructor;
    PageShareLink: PageShareLinkConstructor;
    Persona: PersonaConstructor;
    PivotCell: PivotCellConstructor;
    PivotColumn: PivotColumnConstructor;
    PivotColumnWidth: PivotColumnWidthConstructor;
    PivotRow: PivotRowConstructor;
    ProgramIncrement: ProgramIncrementConstructor;
    ProgramIncrementIteration: ProgramIncrementIterationConstructor;
    Project: ProjectConstructor;
    ProjectConfiguration: ProjectConfigurationConstructor;
    ProjectPermissions: ProjectPermissionsConstructor;
    ProjectRisksConfiguration: ProjectRisksConfigurationConstructor;
    ProjectScreens: ProjectScreensConstructor;
    ProjectTemplate: ProjectTemplateConstructor;
    RecordEvent: RecordEventConstructor;
    RecordEventGroup: RecordEventGroupConstructor;
    RecordEventRaw: RecordEventRawConstructor;
    RecordEventTimeSeries: RecordEventTimeSeriesConstructor;
    RecordLayout: RecordLayoutConstructor;
    RecordLink: RecordLinkConstructor;
    Release: ReleaseConstructor;
    ReleaseBurndownEvent: ReleaseBurndownEventConstructor;
    ReleaseDateHistory: ReleaseDateHistoryConstructor;
    ReleasePhase: ReleasePhaseConstructor;
    ReleaseRetrospectiveRecord: ReleaseRetrospectiveRecordConstructor;
    ReleaseRetrospectiveTeam: ReleaseRetrospectiveTeamConstructor;
    Requirement: RequirementConstructor;
    ResourcePermissions: ResourcePermissionsConstructor;
    ScoreFact: ScoreFactConstructor;
    ScoringSystemMetric: ScoringSystemMetricConstructor;
    ScreenDefinition: ScreenDefinitionConstructor;
    SharedPage: SharedPageConstructor;
    Tag: TagConstructor;
    Task: TaskConstructor;
    TaskUser: TaskUserConstructor;
    Terminology: TerminologyConstructor;
    TerminologyItem: TerminologyItemConstructor;
    Unimplemented: UnimplementedConstructor;
    User: UserConstructor;
    UserPreference: UserPreferenceConstructor;
    Whiteboard: WhiteboardConstructor;
    WipLimit: WipLimitConstructor;
    Workflow: WorkflowConstructor;
    WorkflowKind: WorkflowKindConstructor;
    WorkflowStatus: WorkflowStatusConstructor;
  }
  type ModelUnion =
    | Account
    | AddPageTo
    | AiRequest
    | Attachment
    | Bookmark
    | BookmarksCycleTimeChart
    | BookmarksDeliveryRisksChart
    | BookmarksEpicPriorityList
    | BookmarksFeaturePriorityList
    | BookmarksIdeaPriorityList
    | BookmarksInitiativePriorityList
    | BookmarksIterationBurndown
    | BookmarksProductValueChart
    | BookmarksProgramBoard
    | BookmarksRecordPosition
    | BookmarksReleaseRetrospective
    | BookmarksRetrospectiveReport
    | BookmarksTeamBacklog
    | BookmarksThroughputChart
    | BookmarksVelocityChart
    | BookmarksWorkflowBoard
    | CardField
    | CardGroup
    | CardLayout
    | CardRow
    | CardStyling
    | CardView
    | Comment
    | Competitor
    | ConnectedPage
    | CustomFieldDefinition
    | CustomFieldValue
    | DateTimeRange
    | Epic
    | Epoch
    | ExportPage
    | Extension
    | ExtensionContribution
    | ExtensionField
    | ExtensionInvocation
    | ExtensionLog
    | Feature
    | Goal
    | Idea
    | IdeaCategory
    | IdeasIdeaPortal
    | Initiative
    | Iteration
    | IterationTeamMember
    | LineBreak
    | Note
    | NoteTemplate
    | Notification
    | Page
    | PageShareLink
    | Persona
    | PivotCell
    | PivotColumn
    | PivotColumnWidth
    | PivotRow
    | ProgramIncrement
    | ProgramIncrementIteration
    | Project
    | ProjectConfiguration
    | ProjectPermissions
    | ProjectRisksConfiguration
    | ProjectScreens
    | ProjectTemplate
    | RecordEvent
    | RecordEventGroup
    | RecordEventRaw
    | RecordEventTimeSeries
    | RecordLayout
    | RecordLink
    | Release
    | ReleaseBurndownEvent
    | ReleaseDateHistory
    | ReleasePhase
    | ReleaseRetrospectiveRecord
    | ReleaseRetrospectiveTeam
    | Requirement
    | ResourcePermissions
    | ScoreFact
    | ScoringSystemMetric
    | ScreenDefinition
    | SharedPage
    | Tag
    | Task
    | TaskUser
    | Terminology
    | TerminologyItem
    | Unimplemented
    | User
    | UserPreference
    | Whiteboard
    | WipLimit
    | Workflow
    | WorkflowKind
    | WorkflowStatus;
  interface EnumMap {
    AiRequestKindEnum: AiRequestKindEnum;
    AiRequestOrder: AiRequestOrder;
    AttachmentSizeEnum: AttachmentSizeEnum;
    AvatarSizeEnum: AvatarSizeEnum;
    CardFieldTypesEnum: CardFieldTypesEnum;
    CardLayoutRecordTypesEnum: CardLayoutRecordTypesEnum;
    CardStylingTypesEnum: CardStylingTypesEnum;
    CommentableTypeEnum: CommentableTypeEnum;
    CustomFieldDefinitionTypeEnum: CustomFieldDefinitionTypeEnum;
    CustomFieldableTypeEnum: CustomFieldableTypeEnum;
    DocumentTypeEnum: DocumentTypeEnum;
    EditorWidthEnum: EditorWidthEnum;
    EpicOrder: EpicOrder;
    ExtensionAutomationRecordEnum: ExtensionAutomationRecordEnum;
    ExtensionFieldableTypeEnum: ExtensionFieldableTypeEnum;
    FeatureOrder: FeatureOrder;
    GoalOrder: GoalOrder;
    IdeaOrder: IdeaOrder;
    IdeaPromotableTypeEnum: IdeaPromotableTypeEnum;
    InitiativeOrder: InitiativeOrder;
    InternalMeaning: InternalMeaning;
    IterationOrder: IterationOrder;
    LinkableRecordTypesEnum: LinkableRecordTypesEnum;
    NotificationOrder: NotificationOrder;
    NotificationReadEnum: NotificationReadEnum;
    NotificationScopeEnum: NotificationScopeEnum;
    NotificationStarredEnum: NotificationStarredEnum;
    NotificationTypeEnum: NotificationTypeEnum;
    OrderDirection: OrderDirection;
    PageOrder: PageOrder;
    PlaceableRecordTypeEnum: PlaceableRecordTypeEnum;
    PositionableRecordsBookmarkTypesEnum: PositionableRecordsBookmarkTypesEnum;
    ProgramIncrementIterationOrder: ProgramIncrementIterationOrder;
    ProgramIncrementOrder: ProgramIncrementOrder;
    RecordEventGroupByEnum: RecordEventGroupByEnum;
    RecordEventSubjectEnum: RecordEventSubjectEnum;
    RecordEventTimeSeriesGroupEnum: RecordEventTimeSeriesGroupEnum;
    RecordEventTypeEnum: RecordEventTypeEnum;
    RecordEventValueOperationEnum: RecordEventValueOperationEnum;
    RecordLinkTypeEnum: RecordLinkTypeEnum;
    RecordPlacementEnum: RecordPlacementEnum;
    RecordPlacementPositionEnum: RecordPlacementPositionEnum;
    RecordReferenceTypeEnum: RecordReferenceTypeEnum;
    ReleaseOrder: ReleaseOrder;
    ReleasePhaseTypeEnum: ReleasePhaseTypeEnum;
    ReprioritizeByTypeEnum: ReprioritizeByTypeEnum;
    RequirementOrder: RequirementOrder;
    ReviewerDocumentAccessEnum: ReviewerDocumentAccessEnum;
    ScreenableTypeEnum: ScreenableTypeEnum;
    SharedPageAccessEnum: SharedPageAccessEnum;
    SharedPageOrder: SharedPageOrder;
    SortChildPageTypeEnum: SortChildPageTypeEnum;
    TaskOrder: TaskOrder;
    TaskStatusEnum: TaskStatusEnum;
    TaskUserOrder: TaskUserOrder;
    TeamAssignableTypeEnum: TeamAssignableTypeEnum;
    WorkUnitEnum: WorkUnitEnum;
  }

  type Model = keyof Models;

  interface IterationConstructor {
    STATUS_PLANNING: 10;
    STATUS_STARTED: 20;
    STATUS_COMPLETED: 30;

    UNITS_COUNT: 'COUNT';
    UNITS_POINTS: 'POINTS';
    UNITS_MINUTES: 'MINUTES';
  }

  interface Iteration {
    filteredRecords: RecordUnion[];
    filteredUserId: string | null | undefined;
    userFiltered(userId: string): boolean;
    capacityDetails(estimationType: 'originalEstimate' | 'remainingEstimate'): {
      available: number;
      capacity: number;
      completed: number;
      over: number;
      planned: number;
      total: number;
    };
    eventsStartEnd(): Promise<any>;
    readonly started: boolean;
    readonly planning: boolean;
    readonly completed: boolean;
  }

  interface UserPreferenceConstructor {
    /** @hidden */
    setUserPreference(name: string, value: string | boolean): Promise<boolean>;
    /** @hidden */
    deleteUserPreference(name: string): Promise<boolean>;
  }

  interface BookmarksIterationBurndown {
    user(): Promise<User>;
    iteration(): Promise<Iteration>;
    recordEvents(filters: Record<string, any>): Promise<any>;
    recordEventsTimeSeries(
      startDate: string,
      filters: Record<string, any>
    ): Promise<any>;
    units(): Promise<'COUNT' | Aha.Estimate['units']>;
    availableIterations(): Promise<Iteration[]>;
    availableUsers(): Promise<User[]>;
    createFilters(): Promise<void>;
  }
}

interface Aha {
  models: Aha.Models;
  enums: Aha.EnumMap;
}

declare namespace Aha {
  type GetElementType<T extends Array<any>> = T extends (infer U)[] ? U : never;
  type GetRecordType<T extends Record<string, any>> = T extends Record<
    string,
    infer U
  >
    ? U
    : never;

  type BelongsTos<T extends ApplicationModel> = {
    [P in keyof T['attributes'] as T['attributes'][P] extends ApplicationModel
      ? P
      : never]: T['attributes'][P] extends ApplicationModel
      ? T['attributes'][P]
      : never;
  };
  type HasManys<T extends ApplicationModel> = {
    [P in keyof T['attributes'] as T['attributes'][P] extends ApplicationModel[]
      ? P
      : never]: T['attributes'][P] extends ApplicationModel[]
      ? GetElementType<T['attributes'][P]>
      : never;
  };
  type Relations<T extends ApplicationModel> = BelongsTos<T> & HasManys<T>;

  type NonRelations<T extends ApplicationModel> = Omit<
    T['attributes'],
    keyof Relations<T>
  >;

  type Subquery<
    T extends ApplicationModel,
    K extends Relations<T> = Relations<T>
  > = {
    [P in keyof K]?: Query<K[P]> | Array<keyof K[P]['attributes']>;
  };

  type Filters<Q extends Query<any, any>> = Q extends Query<any, infer F>
    ? F
    : never;
  type QueryModel<Q extends Query<any, any>> = Q extends Query<infer M, any>
    ? M
    : never;

  interface QueryFindable<M extends ApplicationModel, Filters = never> {
    /**
     * Executes this query, finding a single record by ID.
     */
    find(id: string): Promise<M>;
    /**
     * Executes this query, finding a single record by filter.
     *
     * @returns The requested model, or undefined if it couldn't be found.
     */
    findBy(filters: Partial<Filters>): Promise<M>;
  }

  interface QueryListable<M extends ApplicationModel> {
    /**
     * Executes this query.
     *
     * @returns The requested models, or undefined if it couldn't be found.
     */
    all(): Promise<M[]>;
    /**
     * Fetch *all* records from multiple pages. `pageCallback` will be
     * called for each page as it arrives. If no callback is specified,
     * will return all of the records found. If a callback is specified,
     * it is assumed that the caller will handle the records, and the
     * return value will be empty.
     *
     * @param [pageCallback] a callback called with a list of records for every page as it arrives
     * @returns An array of the requested records, if no callback is given
     */
    findInBatches(pageCallback?: (page: M[]) => void): Promise<M[]>;
  }

  interface Query<M extends ApplicationModel, Filters = never> {
    /**
     * Unions this query with another query, using GraphQL union
     * types. Should only be used in subqueries.
     *
     * ```
     * Epic.select(['id', 'name'])
     *   .union(Feature.select(['id', 'name']));
     * ```
     */
    union(query: Query<M>): this;
    /**
     * Adds a subquery to select deeply nested records.
     *
     * ```
     * Workflow.select(['id']).merge({
     *   workflowStatuses: WorkflowStatus.select([
     *     'id',
     *     'name',
     *     'color',
     *     'position',
     *   ]),
     * });
     * ```
     *
     * @param subqueries The subqueries to merge into this query, where the key is an attribute name and the value is a Query object.
     */
    merge(subqueries: Subquery<M>): this;
    /**
     * Adds filters to the query
     *
     * ```
     * query.where({projectId: 15})
     * ```
     */
    where(filters: Partial<Filters>): this;
    /**
     * Resets the filters on the query
     *
     * ```
     * query.rewhere({projectId: 15})
     * ```
     */
    rewhere(filters: Partial<Filters>): this;
    /**
     * Adds a criteria for ordering. Will be added to the end of the order list.
     *
     * ```
     * query.order({createdAt: 'ASC'});
     * ```
     */
    order<F extends M['order']>(
      criteria: Record<F, Aha.OrderDirection['values']>
    ): this;
    /**
     * Resets all criteria for ordering.
     *
     * ```
     * query.reorder({createdAt: 'ASC'});
     * ```
     *
     * @param criteria A one-key object where the key is an order attribute name and the value is a direction
     */
    reorder<F extends M['order']>(
      criteria: Record<F, Aha.OrderDirection['values']>
    ): this;
    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * query.select(['id', 'name']);
     * ```
     *
     * @param names
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof NonRelations<M>>(names: F[]): this;
    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * query.select('id', 'name');
     * ```
     *
     * @param names
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof NonRelations<M>>(...names: F[]): this;
    /**
     * Adds `attrs` to the attributes selected by the query, with arguments
     *
     * ```
     * query.select({ avatarUrl: { size: "SIZE_16" }});
     * ```
     *
     * @param selections
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof NonRelations<M>>(selections: {
      [P in keyof M['attributes']]?: any;
    }): this;
    /**
     * Adds all non-relationship attributes to the query selection
     *
     * Example: query.selectAll().find(1)
     */
    selectAll(): this;
    /**
     * When paginating, adds `stats` to the page attributes selected by
     * the query.
     *
     * ```
     * query.stats(['isLastPage']);
     * ```
     */
    stats(attrs: string[]): this;
    /**
     * When paginating, selects page `pageNumber`
     *
     * ```
     * query.page(2)
     * ```
     */
    page(pageNumber: number): this;
    /**
     * When paginating, sets the number of results per page
     *
     * ```
     * query.per(50)
     * ```
     */
    per(perPage: number): this;
    /**
     * Adds bare, top-level arguments to the query
     *
     * ```
     * query.argument({timeout: 1000})
     * ```
     */
    argument(args: Record<string, any>): this;
    /**
     * When called, the query will select a single object instead of multiple.
     *
     * ```
     * query.first();
     * ```
     */
    first(): SingleQuery<M, Filters>;

    readonly model: Aha.ApplicationModelConstructor<M, Filters, this>;
    /**
     * Returns the name for the query based on the model used to construct it.
     */
    readonly queryName: string;
    /**
     * Returns the plain string version of the GraphQL query corresponding to this object.
     */
    readonly queryString: string;
    /**
     * Returns the variables to send with the graphql query
     */
    readonly queryVariables: Record<string, any>;
    readonly subqueries: Record<string, Query<any>>;
    readonly attrs: Set<string>;
    readonly arguments: Record<string, any>;
    readonly filters: Record<string, any>;
    readonly sort: Record<string, 'ASC' | 'DESC'>;
    readonly single: boolean;
    readonly unions: Record<string, Query<any>>;
  }

  interface SingleQuery<T extends ApplicationModel, Filters = never>
    extends Omit<Query<T, Filters>, 'all'> {
    all(): Promise<T>;
  }

  /**
   * Functions for getting and setting extension data for a particular model
   */
  interface HasExtensionFields {
    getExtensionFields(identifier: string): Promise<any>;

    /**
     * Get the value of an extension field on this record. This will return
     * null if the value has never been set
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    getExtensionField<T>(
      identifier: string,
      fieldName: string
    ): Promise<T | null>;

    /**
     * Set the value of an extension field for this record
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    setExtensionField(
      identifier: string,
      fieldName: string,
      value: any
    ): Promise<void>;

    /**
     * Clear the value from an extension field for this record
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    clearExtensionField(identifier: string, fieldName: string): Promise<void>;
  }

  /**
   * Options for model constructors
   */
  interface NewModelOptions<
    Model extends ApplicationModel,
    ModelQuery extends Query<Model, any> = Query<Model, any>
  > {
    /**
     * A query object used to reselect attributes after saving
     */
    query?: ModelQuery;
    /**
     * The parent of the model. This is set automatically by queries.
     */
    parent?: RelationshipAttribute<any>;
  }

  /**
   * @hidden
   */
  interface ApplicationModelConstructor<
    Model extends ApplicationModel,
    Filters extends {} = never,
    ModelQuery extends Query<Model, Filters> = Query<Model, Filters>,
    Attributes = Model['attributes']
  > {
    readonly typename: Model['typename'];

    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * Feature.select(['id', 'name']);
     * ```
     *
     * @param arguments
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof NonRelations<Model>>(names: F[]): ModelQuery;
    select<F extends keyof NonRelations<Model>>(...names: F[]): ModelQuery;
    /**
     * Adds all non-relationship attributes to the query selection
     *
     * ```
     * Feature.selectAll()
     * ```
     */
    selectAll(): ModelQuery;
    /**
     * Adds all non-relationship attributes to the query selection
     *
     * ```
     * Feature.selectAll()
     * ```
     */
    selectAll(): ModelQuery;
    /**
     * Adds filters to the query
     *
     * ```
     * Feature.where({projectId: 15})
     * ```
     */
    where(filters: Partial<Filters>): ModelQuery;
    /**
     * Creates a copy of a model that can be used as a "blank" object. A
     * "blank" object, when assigned to an assocation, will null out the
     * association.
     */
    blank(attrs?: Partial<Attributes>): Model;
    /**
     * Adds a subquery to select deeply nested records.
     *
     * ```
     * Workflow.merge({
     *   workflowStatuses: WorkflowStatus.select([
     *     'id',
     *     'name',
     *     'color',
     *     'position',
     *   ]),
     * });
     * ```
     *
     * @param subqueries The subqueries to merge into this query, where the key is an attribute name and the value is a Query object.
     */
    merge(subqueries: Subquery<Model>): ModelQuery;
    /**
     * Build a new model from the given attributes
     */
    new (attrs?: Partial<Attributes>, options?: NewModelOptions<Model>): Model;

    /**
     * @hidden
     */
    idFromReactivePattern(pattern: string): string;

    /**
     * Turn the given fragment into a mutation query, add standard error
     * attributes and send to the API
     */
    mutate<T extends Record<string, any>>(
      fragment: Aha.Fragment
    ): Promise<Record<string, GetRecordType<T> & RecordErrors>>;
  }

  type RelationshipAttribute<T extends ApplicationModel> = T & {
    attribute: string;
  };

  interface ReactiveOptions<T extends ApplicationModel> {
    reload?: boolean;
    priority?: 'high' | 'low';
    query?: Aha.Query<T> | ((model: T) => Aha.Query<T>);
    onUpdate?: (
      model: T,
      options: Parameters<T['reload']>[0]
    ) => void | Promise<void>;
    onDestroy?: (model: T) => void | Promise<void>;
    childTypes?: Aha.ApplicationModelConstructor[];
    onChildCreate?: (
      model: Aha.ModelUnion,
      options: Parameters<Aha.ApplicationModel['reload']>[0]
    ) => void | Promise<void>;
    onChildUpdate?: (
      model: Aha.ModelUnion,
      options: Parameters<Aha.ApplicationModel['reload']>[0]
    ) => void | Promise<void>;
  }

  interface ApplicationModel {
    readonly typename: string;
    /**
     * `true` if the object is an existing record, `false` otherwise.
     */
    readonly persisted: boolean;
    /**
     * A guaranteed unique identifier for the record. Returns internalObjectId if id is falsy (unsaved).
     */
    readonly uniqueId: string;
    /**
     * ```
     * const feature = await Feature.select('id').merge({'requirements': ['id']}).find('FEAT-1');
     * feature.parent // undefined, this was the root model
     * feature.requirements[0].parent === feature
     * // Get the attribute that loaded the requirement
     * feature.requirements[0].parent.attribute === 'requirements'
     * ```
     *
     * @return The model that loaded this model. This will be undefined for the root model of the query.
     */
    readonly parent?: RelationshipAttribute<any>;

    attributes: {};
    order: string;

    /**
     * `true` if the object's attributes have been modified, `false` otherwise.
     */
    isDirty(): boolean;
    /**
     * Updates or creates this record using a GraphQL mutation. Will use
     * the `update{ModelName}` or `create{ModelName}` mutations,
     * respectively. Sends all changed attributes and relationships as
     * arguments, and, by default, updates attributes using the query used to
     * construct this object.
     *
     * @param options Data used to modify the mutation query.
     *
     * `options`:
     *   - args: Bare, top-level (non-attribute) arguments passed along with the mutation. These will be at the same level as `id`, for example.
     *   - query: A Query object used to override the default query.
     *
     * @returns `true` if the mutation ran without errors, `false` otherwise.
     */
    save(options?: Partial<{ args: any; query: any }>): Promise<boolean>;

    reload<T extends this>(options?: {
      query?: Query<T>;
      batcher?: Batcher;
      findBy?: boolean;
    }): Promise<void>;

    /**
     * Load additional attributes from the API:
     *
     * ```
     * const record = await Feature.select('referenceNum').find('REF-123');
     * record.name => null
     * await record.loadAttributes('name');
     * record.name => 'Record 123'
     * ```
     */
    loadAttributes<F extends keyof NonRelations<this>>(
      ...attributes: F[]
    ): Promise<void>;

    /**
     * Destroys this record.
     *
     * @returns `true` if the mutation ran without errors, `false` otherwise.
     */
    destroy(): Promise<boolean>;

    /**
     * Sets the attribute `name` to `value`. This function can be used
     * even if this object didn't declare a setter for the attribute
     * `name`.
     */
    setAttribute<K extends keyof this['attributes']>(
      name: K,
      value: this['attributes'][K],
      flagDirty?: boolean
    ): void;

    /**
     * Sends a GraphQL mutation request, updating the current object from the response.
     *
     * @param mutationName The name of the mutation to call
     * @param options All data passed along to generate the mutation query.
     *
     * `options`:
     *   - args: The arguments passed to the mutation
     *   - query: The Query object used to update data from the mutation response
     *   - stringify: When true, will stringify args using Query.stringifyValue
     *   - cacheId: The key that is expected to be used to cache the result
     *
     * @returns {Promise<boolean>} `true` if the mutation ran without errors, `false` otherwise.
     */
    mutate(
      mutationName: string,
      options?: Partial<{
        args: any;
        query: any;
        stringify: boolean;
        cacheId: string;
      }>
    ): Promise<boolean>;

    /**
     * Returns a shallow duplicate of this record.
     */
    dup(): this;

    /**
     * @hidden
     */
    readonly reactiveId: string;

    /**
     * Make model reactive
     */
    reactive(options?: ReactiveOptions<this>): void;

    /**
     * Stop a model being reactive
     */
    unreactive(): void;
  }

  /**
   * @deprecated
   * @hidden
   */
  interface RecordStub extends ApplicationModel {
    id: string;
    referenceNum: string;
    type: string;
  }

  interface EnumValue<T extends string = string, V extends string = string> {
    type: T;
    value: V;
  }

  interface Pagination<T extends ApplicationModel> {
    currentPage: number;
    isLastPage: boolean;
    nodes: Array<T>;
    totalCount: number;
    totalPages: number;
  }

  /**
   * Access the current settings for an extension
   *
   * @category Extensions
   */
  interface Settings {
    get(name: string): Settings | unknown;
    [index: string]: unknown;
  }

  /**
   * The context for an extension callback
   *
   * @category Extensions
   */
  interface Context {
    settings: Settings;
    identifier: string;
  }

  /**
   * @category Extensions
   */
  interface UpdateCallback {
    (newState: any): Promise<void>;
  }

  /**
   * @category Extensions
   */
  interface RenderExtensionProps {
    isUpdate: boolean;
    onUnmounted: (callback: () => void) => void;
    record?: RecordStub;
    fields?: { [index: string]: unknown };
    update?: UpdateCallback;
    state?: any;
  }

  /**
   * @category Extensions
   */
  interface RenderExtension {
    (props: Aha.RenderExtensionProps, context: Context): void | React.ReactNode;
  }

  /**
   * @category Extensions
   */
  interface CommandExtension<Param> {
    (param: Param & { record?: Aha.ApplicationModel }, context: Context): void;
  }

  /**
   * @category Extensions
   */
  interface CommandPromptOptions {
    placeholder?: string;
    default?: string;
  }

  /**
   * @category Extensions
   */
  interface AuthOptions {
    reAuth?: boolean;
    useCachedRetry?: boolean;
    parameters?: unknown;
  }

  /**
   * @category Extensions
   */
  interface AuthData {
    token: string;
  }

  /**
   * @category Extensions
   */
  interface AuthCallback {
    (authData: AuthData): void;
  }

  /**
   * @category Extensions Importer
   */
  interface AuthEvent {
    action: 'auth';
  }

  /**
   * @category Extensions Importer
   */
  interface AuthEventCallback {
    (): Promise<void>;
  }

  /**
   * @category Extensions Importer
   */
  interface ListFiltersEvent {
    action: 'listFilters';
  }

  /**
   * @category Extensions Importer
   */
  interface ListFilter {
    title: string;
    required: boolean;
    type: 'autocomplete' | 'text' | 'select';
  }

  /**
   * @category Extensions Importer
   */
  interface ListFilters {
    [filterName: string]: ListFilter;
  }

  /**
   * @category Extensions Importer
   */
  interface ListFiltersCallback {
    /**
     * Return a list of available filters
     */
    (): ListFilters | Promise<ListFilters>;
  }

  /**
   * @category Extensions Importer
   */
  interface FilterValuesEvent {
    action: 'filterValues';
  }

  /**
   * Some filters will require information from the external server. For
   * example, when filtering to an assigned user, you may want to fetch the
   * list of users from the system you are importing from. filterValues
   * returns the list of possible values for a filter field.
   *
   * @category Extensions Importer
   */
  type FilterValuesCallback = (props: {
    filterName: string;
    filters: { [index: string]: any };
  }) => Promise<FilterValue[]>;

  /**
   * @category Extensions Importer
   */
  interface FilterValue {
    text?: string;
    value: any;
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidatesEvent {
    action: 'listCandidates';
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidatesCallback<T extends ImportRecord> {
    (props: { filters: { [index: string]: any }; nextPage?: any }): Promise<
      ListCandidate<T>
    >;
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidate<T extends ImportRecord> {
    records: T[];
    nextPage?: any;
  }

  /**
   * @category Extensions Importer
   */
  interface RenderRecordEvent {
    action: 'renderRecord';
  }

  /**
   * @category Extensions Importer
   */
  interface RenderRecordCallback<T extends ImportRecord> {
    (props: { record: T; onUnmounted: () => any }): void;
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecordEvent {
    action: 'importRecord';
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecordCallback<T extends ImportRecord> {
    (props: { importRecord: T; ahaRecord: Feature }): Promise<void>;
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecord {
    uniqueId: string;
    name: string;
    identifier?: string;
    url?: string;
  }

  type ImporterEvent =
    | AuthEvent
    | ListFiltersEvent
    | FilterValuesEvent
    | ListCandidatesEvent
    | RenderRecordEvent
    | ImportRecordEvent;

  /**
   * @category Extensions Importer
   */
  interface Importer<T extends ImportRecord> {
    on(event: AuthEvent, callback: AuthEventCallback): void;
    on(event: ListFiltersEvent, callback: ListFiltersCallback): void;
    on(event: FilterValuesEvent, callback: FilterValuesCallback): void;
    on(event: ListCandidatesEvent, callback: ListCandidatesCallback<T>): void;
    on(event: RenderRecordEvent, callback: RenderRecordCallback<T>): void;
    on(event: ImportRecordEvent, callback: ImportRecordCallback<T>): void;

    hasHandler(event: ImporterEvent): boolean;
    trigger(event: ImporterEvent, args: any): any;
  }

  interface PanelOptions {
    name?: string;
  }

  interface PanelSettingsCallback {
    (context: Context): PanelSetting[];
  }

  type PanelSetting =
    | PanelSelectSetting
    | PanelTextSetting
    | PanelCheckboxSetting;

  interface PanelSelectSetting {
    key: string;
    title: string;
    type: 'Select';
    updateTitle?: boolean;
    options(): Promise<{ value: any; text: string }[]>;
  }

  interface PanelTextSetting {
    key: string;
    title: string;
    type: 'Text';
  }

  interface PanelCheckboxSetting {
    key: string;
    title: string;
    type: 'Checkbox';
  }

  interface RenderPanelProps extends RenderExtensionProps {
    props: {
      panel: { settings: { [index: string]: unknown } };
    };
  }

  interface RenderPanel {
    (props: Aha.RenderPanelProps, context: Context): void | React.ReactNode;
  }

  interface Panel {
    readonly id: string;
    readonly name: string;

    /**
     * Render the panel
     */
    on(event: 'render', callback: Aha.RenderPanel): void;
    /**
     * Fetch available settings for the panel
     */
    on(
      event: { action: 'settings' },
      callback: Aha.PanelSettingsCallback
    ): void;

    trigger<T>(event: string, args: any): T;

    findHandler(event: string): Aha.CommandExtension<any> | undefined;
  }

  interface Drawer {
    /**
     * Get the props for the currently open drawer
     */
    getProps(): unknown;
    /**
     * Show an Aha! record in the drawer
     */
    showRecord(record: ReferenceInterface): Promise<void>;
    /**
     * Show an extension contribution in the drawer
     */
    showExtension(
      identifier: string,
      contribution: string,
      props: object
    ): Promise<void>;
    /**
     * Hide the drawer
     */
    hide(): void;
  }

  interface GraphqlQueryOptions {
    variables: Record<string, any>;
  }

  interface RecordAttributeError {
    name: string;
    messages: string[];
    fullMessages: string[];
    codes: string[];
  }

  interface RecordErrors {
    errors: {
      attributes: RecordAttributeError[];
    };
  }

  class ConfigError extends Error {}

  class AuthError extends Error {
    constructor(message: string, service: string, options?: {});
    service: string;
    options?: {};
  }

  class NotFoundError extends Error {}

  class Fragment {
    constructor(name?: string, type?: string);
    alias(name: string, type?: string): Fragment;
    attr(...names: string[]): Fragment;
    argument(name: string, value: unknown, type: string): Fragment;
    fragment(fragment: Fragment): Fragment;
    variable(variable: {
      key: string;
      name: string;
      value: unknown;
      type?: string;
    }): Fragment;
    toDocument(
      name?: string,
      operation?: 'query' | 'mutation'
    ): import('graphql').DocumentNode;
    toVariables(): unknown;
    resolve(): Fragment;
    union(): Fragment;
  }

  interface BatcherOptions {
    timeout: number;
    limit?: number;
  }

  class Batcher {
    constructor(options: BatcherOptions);
    find<Q extends Query<any, any>>(
      query: Q,
      id: string
    ): Promise<QueryModel<Q>>;
    findBy<Q extends Query<any, any>>(
      query: QueryModel<Q>,
      filters: Filters<Q>
    ): Promise<QueryModel<Q> | null>;
    all<Q extends Query<any, any>>(query: Q): Promise<QueryModel<Q>[]>;
  }
}

declare class Aha {
  /**
   * The current account
   */
  readonly account: Aha.Account;

  /**
   * The current User
   */
  readonly user: Aha.User;

  /**
   * The current project
   */
  readonly project: Aha.Project;

  /**
   * Access the drawer
   */
  readonly drawer: Aha.Drawer;

  /**
   * Register an extension function
   *
   * @param name
   * @param extension
   */
  on<T = Aha.RenderExtension>(name: string, extension: T): void;
  on<Param, T = Aha.CommandExtension<Param>>(name: string, extension: T): void;
  on<Param, T = Aha.CommandExtension<Param>>(
    name: { event: string },
    extension: T
  ): void;

  /**
   * Request user input in the command screen when running a command in Aha!
   *
   * @example
   *
   *   aha.on('addLink', async ({ record, context }) => {
   *     const url = await aha.commandPrompt('Link URL', placeholder: 'Enter a URL');
   *   });
   *
   * @param prompt The prompt text
   * @param options
   */
  commandPrompt(
    prompt: string,
    options?: Aha.CommandPromptOptions
  ): Promise<any>;
  /**
   * Output a message to the command screen when running a command in Aha!
   */
  commandOutput(output: string): void;
  /**
   * Call a registered extension command
   *
   * @param name
   * @param args
   */
  command<T>(name: string, args?: T): void;

  getImporter<T extends Aha.ImportRecord>(identifier: string): Aha.Importer<T>;

  getPanel(
    identifier: string,
    name: string,
    options: Aha.PanelOptions
  ): Aha.Panel;

  /**
   * True if there is auth data available. Does not check that the auth data is
   * valid or expired.
   */
  hasAuth(service: string): boolean;

  /**
   * Fetch authentication credentials for a service.
   *
   * @param {string} service The name of service, like github
   * @param {Object} options
   * @param {boolean=} options.reAuth Force reauthentication if no credentials
   * are available. Defaults to true.
   * @param {boolean=} options.useCachedRetry Seek cached credentials from
   * session storage before taking the user to the external service.
   * @param {any=} options.parameters Additional parameters to pass to the service.
   */
  auth(service: string, options: Aha.AuthOptions): Promise<Aha.AuthData>;
  auth(
    service: string,
    options: Aha.AuthOptions,
    callback?: Aha.AuthCallback
  ): void;

  triggerBrowser(event: string, args: any): void;
  triggerServer(event: string, args: any): void;

  contextForIdentifier(identifier: string): Aha.Context;
  executeExtension(
    identifier: string,
    code: (context: Aha.Context) => void
  ): void;
  getEndpoints(identifier: string): Function[];

  /**
   * Trigger an automation extension contribution
   *
   * @param record The record to trigger the event on. This should be an application model from Aha! or a minimal object with `id` and `typename`.
   * @param identifier The full identifier of the trigger. Ex. `aha-develop.github.merged`.
   * @param value A value for the trigger. Pass null if no value is available.
   */
  triggerAutomationOn(
    record: {
      id: string;
      typename: Aha.ExtensionAutomationRecordEnum['values'];
    },
    identifier: string,
    value: any
  ): Promise<void>;

  render(
    elements: React.ReactNode,
    node: HTMLElement,
    onUnmounted?: (callback: Function) => void
  ): void;

  /**
   * Sanitize a url. This will remove any embedded javascript and only allow
   * certain data types. Any link that comes from outside of Aha! or from user
   * input should be sanitized:
   *
   * ```
   * return <a href={aha.sanitizeUrl(linkHref)}>Link to record</a>;
   * ```
   */
  sanitizeUrl(url: string | undefined): string;

  /**
   * Perform a graphql query directly against the Aha! API
   */
  graphQuery<T>(
    queryString: Aha.Fragment,
    options?: Aha.GraphqlQueryOptions
  ): Promise<T>;
  graphQuery<T>(
    queryString: string,
    options?: Aha.GraphqlQueryOptions
  ): Promise<T>;

  /**
   * Perform a graphql mutation directly against the Aha! API
   */
  graphMutate<T>(
    mutationString: string,
    options: Aha.GraphqlQueryOptions
  ): Promise<T>;

  /**
   * All active extension settings.
   *
   * ```
   * const mySettings = aha.settings.get('my.extension');
   * const setting = mySettings.aSetting;
   * ```
   */
  settings: Aha.Settings;

  /**
   * Errors
   */

  /**
   * Throw this error to report configuration issues. For example, an importer
   * would throw this if invalid filter values caused an error when querying for
   * records.
   */
  ConfigError: typeof Aha.ConfigError;

  /**
   * Throw this error to manually report authentication errors. This error type
   * is usually thrown automatically during service auth.
   */
  AuthError: typeof Aha.AuthError;

  /**
   * This error is thrown if a record is not found by a `.find` call
   */
  NotFoundError: typeof Aha.NotFoundError;

  Fragment: typeof Aha.Fragment;

  Batcher: typeof Aha.Batcher;

  /**
   * Returns the icon name for an extension. If an icon exists, you can pass the icon to `<aha-icon icon="name">`.
   *
   * @param {string} identifier The identifier of the extension
   * @returns {string?} The icon name to be used with `<aha-icon>`
   */
  iconForExtensionIdentifier(identifier: string): string | undefined;

  /**
   * Returns the number of active GQL queries/mutations.
   */
  active: number;
}

declare const aha: Aha;
declare const csrfToken: () => string;
declare const Env: { [index: string]: string };
