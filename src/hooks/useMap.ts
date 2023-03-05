import { AddressItem } from "@/lib/types";
import { useEffect, useState } from "react";

const useMap = ({ address }: { address: string }) => {
  const [result, setResult] = useState<AddressItem[]>();

  useEffect(() => {
    const initMap = () => {
      naver.maps.Service.geocode(
        {
          query: address
        },
        (status, { v2: { addresses } }) => {
          console.log("address", addresses);
          if (status !== naver.maps.Service.Status.OK) {
            return alert("Something wrong!");
          }
          if (addresses) {
            setResult(addresses);
          }
        }
      );
    };
    initMap();
  }, [address]);

  return result;
};

export default useMap;
