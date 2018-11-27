import React, { Component } from "react";
import { match } from "react-router";
import { IGenericListing, IProject, IEvent } from "../lib/types";
import data from "../data";
import Card from "../components/Card";
import classNames from "classnames";
import "./ListDisplay.scss";
import { Type } from "../lib/enums";

interface IListDisplayProps {
  match: match;
}

interface IListDisplayState {
  elements: IGenericListing[];
  searchTerm: string;
}

class ListDisplay extends Component<IListDisplayProps, IListDisplayState> {
  tagFilter: (match: match) => ((e: IGenericListing) => boolean) = (
    match: match
  ) => {
    if ("type" in match.params) {
      console.log(match);
      let type: Type | undefined = undefined;
      switch ((match.params as any).type) {
        case "people":
          type = Type.Person;
          break;
        case "events":
          type = Type.Event;
          break;
        case "project":
          type = Type.Project;
          break;
      }
      return (element: IGenericListing) => type === element.type;
    } else if ("tag" in match.params) {
      let tag = (match.params as any).tag;
      return (element: IGenericListing) => {
        return element.tags !== undefined && element.tags.indexOf(tag) >= 0;
      };
    }
    return (element: IGenericListing) => true;
  };

  stringContains: (needle: string, haystack: string) => boolean = (
    needle: string,
    haystack: string
  ) => {
    return haystack.indexOf(needle) !== -1;
  };

  searchFilter: () => ((e: IGenericListing) => boolean) = () => {
    if (this.state && this.state.searchTerm) {
      const { searchTerm } = this.state;
      return (element: IGenericListing) => {
        return (
          this.stringContains(searchTerm, element.description) ||
          this.stringContains(searchTerm, element.title) ||
          this.stringContains(searchTerm, element.url)
        );
      };
    }
    return (element: IGenericListing) => true;
  };

  listingNumberToClass: (i: number) => string = (i: number) => {
    const classes = [
      "first-listing",
      "second-listing",
      "third-listing",
      "fourth-listing"
    ];
    return classes[i % 4];
  };

  render() {
    const { match } = this.props;
    const elements = data
      .filter(this.tagFilter(match))
      .filter(this.searchFilter())
      .sort((a: IGenericListing, b: IGenericListing) =>
        a.title.localeCompare(b.title)
      );
    return (
      <section className="section">
        <input
          type="text"
          className="input search-input"
          placeholder="Search"
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
        <div className="listings">
          {elements.map((e: IGenericListing, i: number) => {
            return (
              <div
                className={classNames("listing", this.listingNumberToClass(i))}
                key={i}
              >
                <Card type={e.type} listing={e} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ListDisplay;
