import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import PostHeader from "./PostHeader";
export default function Post(props) {
  return (
    <div>
      <article>
        <PostHeader
          tittle={props.post.tittle}
          subtittle={props.post.subtittle}
          theme={props.theme}
        />
        <p>{props.children}</p>
        <p>Likes: {props.likes}</p>
      </article>
      <Button theme={props.theme} onClick={props.onToggleTheme}>
        Mudar Tema
      </Button>

    </div>
  );
}
// Post.proTypes = {
//   likes: PropTypes.number.isRequired,
// };
