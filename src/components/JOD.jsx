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
      <div
        id="JOD"
        className="px-4 pb-3 text-center md:text-left md:text-3xl w-full text-secondary font-bold text-xl"
      >
        Jungles of Dorado's Latest Posts
      </div>
      <div className=" flex flex-col items-center md:flex-row w-100 justify-evenly my-5">
        {posts &&
          posts.map((post) => (
            <a
              key={post.id}
              className="flex flex-col justify-between font-bold md:w-1/4 w-2/3 transition duration-500 rounded-lg hover:shadow-smallDark p-2 mb-10"
              target="_blank"
              rel="noreferrer"
              href={`http://www.junglesofdorado.com/blog/${post.meta.slug}`}
            >
              <p className="text-2xl text-primary">{post.title}</p>
              <p className="text-sm leading-relaxed text-white">
                {post.description}
              </p>
              <img
                className="h-100 w-100 rounded-lg"
                src={post.main_image.meta.download_url}
                alt="Post"
              />
            </a>
          ))}
      </div>
    </>
  );
}
