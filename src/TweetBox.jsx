import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox" >
      <form>
      {/* style={{borderBottom: "8px solid var(--twitter-background)"}} */}
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/media/FvgX7Z7aMAEbcy3?format=jpg&name=small" />
          <input placeholder="whattt uppp ?" type="text"/>

        </div>
        <input className="tweetBox__input__url" placeholder="Another url input !!" type="text"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
