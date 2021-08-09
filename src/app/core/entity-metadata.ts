import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Posts: {},
};

const pluralNames = { Posts: "Posts" };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
