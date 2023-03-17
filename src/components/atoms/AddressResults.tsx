import useMap from "@/hooks/useMap";
import { HandleClickEvent } from "@/lib/types";
import React from 'react';

interface Props {
  address: string;
  handleListClick: HandleClickEvent;
}

const AddressResults = ({ address, handleListClick }: Props) => {
  const resultArray = useMap({ address });
  if (!resultArray || resultArray.length === 0) {
    return <div className="result_empty">검색 결과가 없습니다</div>;
  }

  return (
    <section className="result_container" onClick={handleListClick}>
      {resultArray.map((result) => {
        return (
          <div key={result.roadAddress} data-x={result.x} data-y={result.y}>
            {result.roadAddress}
          </div>
        );
      })}
    </section>
  );
};

export default AddressResults
