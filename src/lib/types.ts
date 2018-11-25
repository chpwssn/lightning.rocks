import { Type, ProjectType } from "./enums";

export interface ISocial {
  github?: string;
  medium?: string;
  twitter?: string;
  devTo?: string;
  website?: string;
  slack?: string;
}

export interface IGenericListing {
  title: string;
  description: string;
  url: string;
  type: Type;
  social?: ISocial;
  tags?: string[];
}

export interface IProject extends IGenericListing {
  openSource: boolean;
  projectType: ProjectType;
}

export interface IEvent extends IGenericListing {}

export interface IPerson extends IGenericListing {}
