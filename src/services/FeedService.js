import axios from "axios";

export class FeedService {
  connection = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
  });

  getPostsByUserId(userId, { page, size }) {
    return this.connection.get(`posts?userId=${userId}&size=${size}&page=${page}`);
  }

  getPostById(postId) {
    return this.connection.get(`posts/${postId}`);
  }

  createPost(user_id, { text }) {
    return this.connection.post("posts", { text, user_id });
  }

  updatePost(post) {
    return this.connection.put(`posts/${post.id}`, post);
  }

  deletePost(postId) {
    return this.connection.delete(`posts/${postId}`);
  }
}
