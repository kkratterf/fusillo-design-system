import { tremorTwMerge } from "../../lib";
import React from "react";
import { Flex } from "../flex";
import { Text } from "../text";

interface NoDataProps {
  noDataText?: string;
}
const NoData = ({ noDataText = "No data" }: NoDataProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={tremorTwMerge(
        // common
        "w-full h-full border border-dashed rounded-tremor-default",
        // light
        "border-tremor-border",
        // dark
        "dark:border-dark-tremor-border",
      )}
    >
      <Text
        className={tremorTwMerge(
          // light
          "text-tremor-content",
          // dark
          "dark:text-dark-tremor-content",
        )}
      >
        {noDataText}
      </Text>
    </Flex>
  );
};

export default NoData;
