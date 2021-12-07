import { Fragment, useEffect, useState } from "react";
import { getAllData } from "../data/data";
import Link from "next/link";

const HomePage = (props) => {
  const { posts } = props;
  const [posts2, setPosts2] = useState([]);

  useEffect(() => {
    setPosts2((_) => [...posts]);
  }, []);

  const searchHandler = (e) => {
    const value = e.target.value;

    const searchPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(value.toLowerCase())
    );

    if (value === "") {
      setPosts2((_) => [...posts]);
    } else {
      setPosts2((_) => [...searchPosts]);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "80%", margin: "10px auto" }}>
        <input
          style={{ height: "30px", width: "100%" }}
          className="input"
          type="search"
          placeholder="Enter Name"
          onChange={searchHandler}
        />
      </div>
      <div className="section">
        {posts2.map((post) => (
          <Link key={post.id} href={`/${post.id}`}>
            <div className="item">{post.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllData();
  return {
    props: {
      posts: posts,
    },
  };
};

export default HomePage;
