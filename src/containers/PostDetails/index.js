import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import PostEdit from "../../components/PostEdit";
import Loader from "../../components/Loader";
import localization from "./localization";
import { fetchPost, deletePost, cleanUp, updatePost } from "../../store/postSlice";
import { useParams } from "react-router-dom";
import {
  FeedWrapper,
  PostsLane,
  MessagesLane,
  Messages,
  BackArrow,
  BackText,
  BackRow,
  LoaderWrapper,
} from "./PostDetailsStyled";

const PostDetails = ({ post, isLoading, hasError }) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [allowInteraction, setAllowInteraction] = useState(true);

  useEffect(() => {
    dispatch(fetchPost(id));
    dispatch(cleanUp());
  }, [dispatch, id]);

  const onDeletePost = (postId) => {
    setAllowInteraction(false);
    dispatch(
      deletePost({
        postId,
        successMessage: formatMessage(localization.deletePostSuccess),
        errorMessage: formatMessage(localization.deletePostError),
      }),
    );
  };

  const submitNewPost = (text) => {
    dispatch(
      updatePost({
        id,
        text,
        successMessage: formatMessage(localization.updatePostSuccess),
        errorMessage: formatMessage(localization.updatePostError),
      }),
    );
  };

  return (
    <FeedWrapper>
      <PostsLane>
        {!isLoading && (
          <BackRow onClick={() => history.push("/")}>
            <BackArrow />
            <BackText>{formatMessage(localization.back)}</BackText>
          </BackRow>
        )}
        {!!post && !isLoading && (
          <PostEdit
            id={post.id}
            name={`${post.user.firstName} ${post.user.lastName}`}
            username={post.user.username}
            residence={post.user.residence}
            date={post.created_at}
            likes={[]}
            onDelete={onDeletePost}
            allowInteraction={allowInteraction}
            onSubmit={submitNewPost}
            comments={[]}>
            {post.text}
          </PostEdit>
        )}
        <LoaderWrapper>
          <Loader isLoading={isLoading} />
        </LoaderWrapper>
      </PostsLane>
      <MessagesLane>
        <Messages>
          <Message name="John Doe" username="@jdoe" residence="1201A" isOnline />
          <Message name="Maxine Lacroux" username="@maxlacroux" residence="201A" isOnline />
          <Message name="Dio Maxe" username="@dmaxe" residence="1501B" />
        </Messages>
      </MessagesLane>
    </FeedWrapper>
  );
};

const mapStateToProps = (state) => ({
  post: state.posts.selectedPost,
  isLoading: state.posts.isLoading,
  hasError: state.posts.hasError,
});

export default connect(mapStateToProps)(PostDetails);
