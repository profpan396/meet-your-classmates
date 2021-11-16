import React from "react";
import { Card, Loader, Dimmer, Segment, Image, Grid } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostFeed({
  posts,
  numPhotosCol,
  isProfile,
//   loading,
  user,
//   addLike,
//   removeLike
}) {
    return (
        
        <Card.Group itemsPerRow={numPhotosCol} stackable>
          {posts.map((post) => {
            return (
              <PostCard
                post={post}
                key={post._id}
                isProfile={isProfile}
                user={user}
                // removeLike={removeLike}
                // addLike={addLike}
              />
            );
          })}
        </Card.Group>
      );
    }
    