import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import { FaChevronRight } from "react-icons/fa";
import Markdown from 'markdown-to-jsx';

const GenericCard = ({ result }: CardProps) => {
  const { name, richTextDescription, primaryPhoto, slug } = result.rawData;


  return (
    <div className="card p-5 border-2 rounded-xl space-y-5 flex flex-col sm:flex-row space-between">
        <div className="space-y-3">
          {name && <h2 className="name py-2 text-2xl font-bold">{name}</h2>}
          {richTextDescription && (
            <p className="text-gray-500">
              <Markdown>{richTextDescription}</Markdown>
            </p>
          )}
          {/* <a href={result.rawData.slug as string} className=" mt-2 flex items-center gap-1">
            View Details
            <FaChevronRight />
          </a> */}
        </div>
        <div>
          {primaryPhoto && (
          <div className="">
            <img className="rounded-lg hover:scale-105" src={primaryPhoto.image.url} width={300}></img>
        </div>
        )}
      </div>
    </div>
  );
};

export default GenericCard;