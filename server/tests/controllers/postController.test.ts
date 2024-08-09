import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../src/app";
import Post from "../../src/models/postModel";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Post.deleteMany({});
});

afterEach(() => {
  jest.restoreAllMocks();
});


describe("PostController", () => {
  describe("GET /posts", () => {
    it("should return all posts", async () => {
      const post1 = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      const post2 = new Post({
        title: "Post 2",
        content: "Content 2",
        author: "Author 2",
      });

      await post1.save();
      await post2.save();

      const response = await request(app).get("/posts");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0].title).toBe(post1.title);
      expect(response.body[1].title).toBe(post2.title);
    });

    it("should return an error if fetching posts fails", async () => {
      jest.spyOn(Post, "find").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const response = await request(app).get("/posts");

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error fetching posts");
    });
  });

  describe("GET /posts/:id", () => {
    it("should return a specific post by ID", async () => {
      const post = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      await post.save();

      const response = await request(app).get(`/posts/${post._id}`);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(post.title);
    });

    it("should return an error if the post is not found", async () => {
      const response = await request(app).get(
        "/posts/507f1f77bcf86cd799439011"
      ); // Invalid ID

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Post not found");
    });

    it("should return an error if fetching post by ID fails", async () => {
      jest.spyOn(Post, "findById").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const response = await request(app).get(
        "/posts/507f1f77bcf86cd799439011"
      );

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error fetching post");
    });
  });

  describe("POST /posts", () => {
    it("should create a new post", async () => {
      const postData = {
        title: "New Post",
        content: "New Content",
        author: "New Author",
      };

      const response = await request(app).post("/posts").send(postData);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Post created successfully");
      expect(response.body.post.title).toBe(postData.title);
    });

    it("should return an error if creating post fails", async () => {
      jest.spyOn(Post.prototype, "save").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const postData = {
        title: "New Post",
        content: "New Content",
        author: "New Author",
      };

      const response = await request(app).post("/posts").send(postData);

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error creating post");
    });
  });

  describe("PUT /posts/:id", () => {
    it("should update an existing post", async () => {
      const post = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      await post.save();

      const updatedData = {
        title: "Updated Post",
        content: "Updated Content",
        author: "Updated Author",
      };

      const response = await request(app)
        .put(`/posts/${post._id}`)
        .send(updatedData);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Post updated successfully");
      expect(response.body.post.title).toBe(updatedData.title);
    });

    it("should return an error if the post is not found", async () => {
      const response = await request(app)
        .put("/posts/507f1f77bcf86cd799439011")
        .send({ title: "Updated Post" });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Post not found");
    });

    it("should return an error if updating post fails", async () => {
      const post = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      await post.save();

      jest.spyOn(Post, "findByIdAndUpdate").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const response = await request(app)
        .put(`/posts/${post._id}`)
        .send({ title: "Updated Post" });

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error updating post");
    });
  });

  describe("DELETE /posts/:id", () => {
    it("should delete an existing post", async () => {
      const post = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      await post.save();

      const response = await request(app).delete(`/posts/${post._id}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Post deleted successfully");

      const deletedPost = await Post.findById(post._id);
      expect(deletedPost).toBeNull();
    });

    it("should return an error if the post is not found", async () => {
      const response = await request(app).delete(
        "/posts/507f1f77bcf86cd799439011"
      ); // Invalid ID

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Post not found");
    });

    it("should return an error if deleting post fails", async () => {
      jest.spyOn(Post, "findByIdAndDelete").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const post = new Post({
        title: "Post 1",
        content: "Content 1",
        author: "Author 1",
      });
      await post.save();

      const response = await request(app).delete(`/posts/${post._id}`);

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error deleting post");
    });
  });
});
