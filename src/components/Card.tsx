import React, { Component } from "react";
import { IGenericListing, IProject, IEvent, IPerson } from "../lib/types";
import { Type } from "../lib/enums";
import { Link } from "react-router-dom";
import ProjectCardFooter from "./CardFooters/ProjectCardFooter";
import EventCardFooter from "./CardFooters/EventCardFooter";
import PersonCardFooter from "./CardFooters/PersonCardFooter";
import "./Card.scss";

interface ICardProps {
  listing: IGenericListing | IProject | IEvent;
  type: Type;
}

class Card extends Component<ICardProps, {}> {
  symbol = () => {
    const { type } = this.props;
    switch (type) {
      case Type.Event:
        return (
          <Link className="card-header-icon" to="/type/event">
            Event
          </Link>
        );
        break;
      case Type.Project:
        return (
          <Link className="card-header-icon" to="/type/project">
            Project
          </Link>
        );
        break;
      case Type.Person:
        return (
          <Link className="card-header-icon" to="/type/person">
            Person
          </Link>
        );
        break;
    }
  };

  footer = () => {
    const { type, listing } = this.props;
    switch (type) {
      case Type.Event:
        return <EventCardFooter listing={listing as IEvent} />;
        break;
      case Type.Project:
        return <ProjectCardFooter listing={listing as IProject} />;
        break;
      case Type.Person:
        return <PersonCardFooter listing={listing as IPerson} />;
        break;
    }
  };

  render() {
    const { type } = this.props;
    let listing = this.props.listing;
    switch (type) {
      case Type.Event:
        listing = this.props.listing as IEvent;
        break;
      case Type.Project:
        listing = this.props.listing as IProject;
        break;
      case Type.Person:
        listing = this.props.listing as IPerson;
        break;
    }
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <a href={listing.url}>{listing.title}</a>
          </p>
          {this.symbol()}
        </header>
        <div className="card-content">
          <div className="content">
            {listing.description}
            <br />
            {listing.tags && (
              <div className="tags">
                {listing.tags.map((tag: string) => (
                  <Link to={`/tag/${tag}`} className="tag is-info" key={tag}>
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {this.footer()}
      </div>
    );
  }
}

export default Card;
