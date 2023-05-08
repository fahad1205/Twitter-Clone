import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        {" "}
        <Avatar src="https://pbs.twimg.com/media/FvgX7Z7aMAEbcy3?format=jpg&name=small" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              fahad ansari
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @fahad1205
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>hey there i am making twitter clone</p>
          </div>
        </div>
        <img
          // style={{ borderRadius: "20px" }}
          src="https://pbs.twimg.com/media/FvgX7Z7aMAEbcy3?format=jpg&name=small"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
