import React, {useContext} from 'react';
import PropTypes from "prop-types";
import Button from "./button";
import PostHeader from "./PostHeader";
import { ThemeContext } from './App';
export default function Post(props) {
  const {onToggleTheme}= useContext(ThemeContext)
  return (
    <div>
      <article>
        <PostHeader
          tittle={props.post.tittle}
          subtittle={props.post.subtittle}
        />
        {props.children}
        <p>Likes: {props.likes}</p>
      </article>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>

    </div>
  );
}
// Post.proTypes = {
//   likes: PropTypes.number.isRequired,
// };
