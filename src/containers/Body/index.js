import React from "react";
import Screen from "./Screen";
import * as Styled from "./styled";
import Sidebar from "./Sidebar";
import EmptySidebar from "./EmptySidebar";

export const Body = React.memo((props) => {
  return (
    <Styled.Body>
      <EmptySidebar />
      <Screen />
      <Sidebar />
    </Styled.Body>
  );
});
