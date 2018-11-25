import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">About lightning.rocks</h1>
          <p>
            lightning.rocks is a collection of{" "}
            <Link to="/type/projects">Projects</Link>,{" "}
            <Link to="/type/events">Events</Link>, and{" "}
            <Link to="/type/people">People</Link> within the Lightning
            ecosystem. This <i>curated</i> list of items attempts to represent
            the current state of the Lightning ecosystem as a whole and attempts
            to not focus on any blockchain specifically. This site can be used
            as a stepping stone into the network and to see what else is
            happening.
          </p>
          <h2 className="subtitle is-size-4">
            What does <i>curated</i> mean?
          </h2>
          In this case curated means that the list of things present on the site
          will change over time. As new projects build momentum, as events are
          announced and people build new things, they will be added once they've
          reached an arbitrary level of quality. In the same sense as projects
          slow, and events pass they will be removed. People will likely not be
          removed unless they request to be removed.
          <h2 className="subtitle is-size-4">
            How do I get my _____ listed here?
          </h2>
          This page is{" "}
          <a href="https://github.com/chpwssn/lightning.rocks">
            open source on GitHub
          </a>{" "}
          and is open for pull requests, in the future there may be a form for
          those without GitHub accounts. There's no formal requirement to be
          listed but there's a minimal sniff test.
        </div>
      </section>
    );
  }
}

export default Card;
