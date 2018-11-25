import React, { Component } from "react";
import { IPerson } from "../../lib/types";
import { Link } from "react-router-dom";

interface IPersonCardFooterProps {
  listing: IPerson;
}

class PersonCardFooter extends Component<IPersonCardFooterProps, {}> {
  render() {
    const { listing } = this.props;
    return (
      <footer className="card-footer">
        <a href={listing.url} className="card-footer-item">
          Webpage
        </a>
        <a href="#" className="card-footer-item">
          Edit
        </a>
        <a href="#" className="card-footer-item">
          Delete
        </a>
      </footer>
    );
  }
}

export default PersonCardFooter;
