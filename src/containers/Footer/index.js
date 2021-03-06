import React from "react";
import Player from "./Player";
import * as Styled from "./styled";

export const Footer = React.memo(() => {
  return (
    <Styled.Footer>
      <Styled.FooterContent>
        <Player />
      </Styled.FooterContent>
    </Styled.Footer>
  );
});
