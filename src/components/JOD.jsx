import useFetch from "../hooks/useFetch";

export default function JOD() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch(
    "https://www.junglesofdorado.com/api/v2/pages/?type=blog.BlogPage&fields=title,description,main_image&limit=3&order=-date"
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
      <div className="text-white w-100 text-3xl">
        Jungles of Dorado's latest Posts
      </div>
      <div className="border flex row w-100 mx-10 justify-evenly my-20">
        {posts &&
          posts.map((post) => (
            <div className="text-white font-bold w-1/4 border" key={post.id}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`http://www.junglesofdorado.com/blog/${post.meta.slug}`}
              >
                <p className="text-2xl">{post.title}</p>
                <div className="h-60 w-60 overflow-hidden">
                <p className="text-sm">{post.description}</p>
                  <img
                    className="rounded-md"
                    src={post.main_image.meta.download_url}
                    alt="Post"
                  />
                </div>
              </a>
            </div>
          ))}
      </div>
    </>
  );
}
