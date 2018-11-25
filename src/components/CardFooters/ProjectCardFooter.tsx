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
      </footer>
    );
  }
}

export default ProjectCardFooter;
