import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { Type } from "../lib/enums";
import classNames from "classnames";

interface INavBarState {
  active: boolean;
}

class NavBar extends Component<{}, INavBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <span className="logo-text">&#9889;&#129304;</span>
          </Link>

          <a
            role="button"
            className={classNames(
              "navbar-burger burger",
              this.state.active ? "is-active" : ""
            )}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={classNames(
            "navbar-menu",
            this.state.active ? "is-active" : ""
          )}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                {Object.keys(Type).map((e: any, i: number) => {
                  if (isNaN(e)) {
                    return (
                      <Link
                        className="navbar-item"
                        to={`/type/${e.toLowerCase()}`}
                        key={i}
                      >
                        {e}
                      </Link>
                    );
                  }
                })}
                <hr className="navbar-divider" />
                <a
                  href="https://github.com/chpwssn/lightning.rocks/issues"
                  className="navbar-item"
                >
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
