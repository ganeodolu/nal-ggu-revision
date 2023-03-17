import useMap from "@/hooks/useMap";
import { HandleClickEvent } from "@/lib/types";
import React from 'react';

interface Props {
  address: string;
  handleListClick: HandleClickEvent;
}

const AddressResults = ({ address, handleListClick }: Props) => {
  const resultArray = useMap({ address });

  if (!resultArray) {
    return <div>다시 검색해주세요</div>;
  }
  if (address.length === 0) {
    return <div>결과가 없습니다.</div>;
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
