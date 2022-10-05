import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import { FaChevronRight } from "react-icons/fa";

const LocationCard = ({ result }: CardProps) => {
  const { name, address, mainPhone, slug, landingPageUrl } = result.rawData;


  return (
    <div className="card p-5 border-2 rounded-xl space-y-5">
        <div className="space-y-3 flex flex-col sm:flex-row justify-between">
            <div>
                {name && <h2 className="name py-2 text-2xl font-bold">{name}</h2>}
                <div className="flex-cols">
                    <p>{address.line1}</p>
                    <p>{address.postalCode} <strong>{address.city}</strong></p>
                </div>
            </div>
            <div className="space-y-3">
                <a href={slug as string} className="cta1 border-2 rounded-md p-2 text-center flex items-center justify-center gap-1">
                    Visa detaljer
                    <FaChevronRight />
                </a>
                <a href="#" className="cta2 border-2 rounded-md p-2 text-center flex items-center justify-center gap-1">
                    Button 2
                    <FaChevronRight />
                </a>
            </div>
        </div>
    </div>
  );
};

export default LocationCard;