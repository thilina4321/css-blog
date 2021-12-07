import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllData } from "../data/data";
import SyntaxHighlighter from 'react-syntax-highlighter';

const SpecificPost = () => {
  const [id, setId] = useState(null);
  const [item, setItem] = useState();
  const { query } = useRouter();

  useEffect(() => {
    if (query) {
      setId(query.id);
    }
  }, [query]);

  useEffect(() => {
    if (id) {
      const allItems = getAllData();
      const findItem = allItems.find((item) => item.id === +id);
      setItem(findItem);
    }
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1> {item.name} </h1>
     
      <SyntaxHighlighter language="javascript">
      {item.code}
    </SyntaxHighlighter>
    </div>
  );
};

export default SpecificPost;
