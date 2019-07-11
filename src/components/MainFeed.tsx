import * as React from "react";
import { Post } from "./Post";
export const MainFeed = () => {
  return (
    <div>
      <div id="mainSection">
        <Post
          date="2019-07-08"
          headline="A day to remember"
          category="sport"
          readingLength={20}
          subheadline="A tale of a tough swim race in the north"
          content="Eiusmod dolor mollit elit deserunt voluptate qui ullamco aliqua in reprehenderit eiusmod culpa. Sit excepteur consectetur dolore nulla Lorem sint pariatur. Cillum pariatur culpa est do ad eiusmod culpa. Esse ullamco dolor est pariatur aliquip laboris non adipisicing laborum. Non laborum ea ipsum tempor."
        />
        <Post
          date="2019-07-09"
          headline="A weekday of coding"
          category="coding"
          readingLength={5}
          subheadline="Just another Tuesday"
          content="Eiusmod dolor mollit elit deserunt voluptate qui ullamco aliqua in reprehenderit eiusmod culpa. Sit excepteur consectetur dolore nulla Lorem sint pariatur. Cillum pariatur culpa est do ad eiusmod culpa. Esse ullamco dolor est pariatur aliquip laboris non adipisicing laborum. Non laborum ea ipsum tempor."
        />
      </div>
    </div>
  );
};
