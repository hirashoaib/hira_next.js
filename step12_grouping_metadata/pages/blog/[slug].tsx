import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../data/posts";
import posts from "../../data/posts";
import PostHead from "../../components/PostHead";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  const post: Post = posts.find((post) => post.slug === slug)!;

  return {
    props: { post },
  };
};
interface Props {
  post: Post;
}
const MyPost: NextPage<Props> = (props: Props) => {
  const post: Post = props.post;
  return (
    <div>
        <PostHead {...post}/>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
};
export default MyPost;
