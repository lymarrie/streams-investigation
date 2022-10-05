import {
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from '@yext/pages'
import {
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from '@yext/search-headless-react'
import {
  SearchBarCssClasses,
  UniversalResults,
  StandardCard,
  VerticalConfigMap,
  VerticalResults
} from '@yext/search-ui-react'

import GenericCard from "../components/search/cards/GenericCard";
import LocationCard from "../components/search/cards/LocationCard";

import * as React from 'react'
import PageLayout from '../components/page-layout'
import '../index.css'

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `index.html`
}

const config = {
  experienceKey: 'enirosearch',
  apiKey: 'f55a415c3daa5fb1b65d779ab15be495',
  locale: 'sv',
  endpoints: SandboxEndpoints,
}

const searcher = provideHeadless(config)

// searcher.setSessionTrackingEnabled(true)
// let sessionId = window.sessionStorage.getItem('sessionId')
// if (!sessionId) {
//   sessionId = uuid()
//   window.sessionStorage.setItem('sessionId', sessionId)
// }
// searcher.setSessionId(sessionId)


const customCss: SearchBarCssClasses = {
  inputElement: 'border rounded-3xl border-gray-200 flex',
}

const Search: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { _site } = document
  return (
    <>
      <PageLayout _site={_site}>
        <SearchHeadlessProvider searcher={searcher}>
          <UniversalResults 
              customCssClasses={{
                universalResultsContainer: "py-10 pb-10 centered-container",
              }}
              verticalConfigMap={{
                companies: {
                  label: "Companies",
                  CardComponent: StandardCard
                },
                locations: {
                  label: "Locations",
                  CardComponent: LocationCard
                },
                products: {
                  label: "Products",
                  CardComponent: GenericCard,
                },
              }}
            />
        </SearchHeadlessProvider>
      </PageLayout>
    </>
  )
}

export default Search
