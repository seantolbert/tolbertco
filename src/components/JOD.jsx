import useFetch from "../hooks/useFetch";

export default function JOD() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch(
    "https://www.junglesofdorado.com/api/v2/pages/?type=blog.BlogPage&fields=title,description,main_image&limit=3"
  );

  if (isLoading) {
    return (
      <div className="text-white w-100 flex justify-center my-8">Loading</div>
    );
  }

  if (error) {
    return (
      <div className="text-white w-100 flex justify-center my-8">
        Whoops! working on it
      </div>
    );
  }

  return (
    <>
      <div className="text-white w-100 flex justify-center f">JOD</div>
      <div>
        {posts &&
          posts.map((post) => (
            <div className="posts" key={post.id}>
              <p className="post-title">
                <a
                  href={`http://www.junglesofdorado.com/blog/${post.meta.slug}`}
                >
                  {post.title}
                </a>
              </p>
              <p className="post-description">{post.description}</p>
              <img
                className="post-image"
                // src={`http://www.junglesofdorado.com/${post.main_image.meta.download_url}`}
                src={post.main_image.meta.download_url}
                alt="Post"
              />
            </div>
          ))}
      </div>
    </>
  );
}
