import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: () => ({
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  }),
  tab: () => ({
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  }),
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Information assurance?
                    </h2>
                    <p className="landing-page__p">
                      Information assurance is the leading team for ensuring
                      security and safety for IBMs customers
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={'${process.env.PUBLIC_URL}/tab-illo.png'}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    The Information Assurance team ... insert more info here,
                    this is just a placeholder
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    More filler text regarding the awesome information assurance
                    team at IBM, blah blah blah
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="bx--row landing-page__r3">
          <div className="bx--col-md-4 bx--col-lg-4">
            <h3 className="landing-page__label">The Principles</h3>
          </div>
          <div className="bx--col-md-4 bx--col-lg-4">IA is open</div>
          <div className="bx--col-md-4 bx--col-lg-4">IA is modular</div>
          <div className="bx--col-md-4 bx--col-lg-4">IA is consistent</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
