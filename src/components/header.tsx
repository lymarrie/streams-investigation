import * as React from "react";
import Cta from "../components/cta";
import searchConfig from "../search.config";
import {
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from '@yext/search-headless-react';
import {
  SearchBar,
  SearchBarCssClasses,
  UniversalResults,
  VerticalConfigMap,
} from '@yext/search-ui-react';

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  const config = {
    experienceKey: 'enirosearch',
    apiKey: 'f55a415c3daa5fb1b65d779ab15be495',
    locale: 'sv',
    endpoints: SandboxEndpoints,
  }
  
  const searcher = provideHeadless(config)


  return (
    <>
      <div className="bg-gray-600">
        <nav className="centered-container py-6 flex items-center justify-between">
          <img
            src="https://static.eniro.com/img/profiles/se/eniro_logo_white.svg"
            width="100"
            height="100"
          ></img>
          <SearchHeadlessProvider searcher={searcher}>
            <SearchBar 
              placeholder='Search...'
              customCssClasses={{
                searchBarContainer: "my-auto",
              }} />
          </SearchHeadlessProvider>
        </nav>
      </div>
    </>
  );
};

export default Header;
