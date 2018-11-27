import React, { Component } from "react";
import { IProject } from "../../lib/types";
import { Link } from "react-router-dom";

interface IProjectCardFooterProps {
  listing: IProject;
}

class ProjectCardFooter extends Component<IProjectCardFooterProps, {}> {
  render() {
    const { listing } = this.props;
    return (
      <footer className="card-footer">
        <a href={listing.url} className="card-footer-item">
          Webpage
        </a>
        {listing.social && listing.social.github && (
          <a href={listing.social.github} className="card-footer-item">
            GitHub
          </a>
        )}
      </footer>
    );
  }
}

export default ProjectCardFooter;
