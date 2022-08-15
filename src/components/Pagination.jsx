import React, { useState } from "react";
import { PaginationStyles, PageIndex } from "../styles";

export function Pagination({ pages, getUrl }) {
  const [Index, setIndex] = useState(1);

  const handlePage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > pages.length) pageNumber = pages.length;
    getUrl(`?_page=${pageNumber}&_limit=10`);
    setIndex(pageNumber);
    console.log(pages.length);
  };

  return (
    <PaginationStyles>
      <button onClick={() => handlePage(Index + 1)}>بعدی</button>
      <div>
        {[...pages].map((item, index) => (
          <PageIndex isActive={Index === index + 1 ? true : false} onClick={() => handlePage(index + 1)}>
            {index + 1}
          </PageIndex>
        ))}
      </div>
      <button onClick={() => handlePage(Index - 1)}>قبلی</button>
    </PaginationStyles>
  );
}
