export default function Example({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative rounded-lg border border-gray-300 bg-white px-12 py-10 shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <a href={`/posts/${post.slug}`} className="focus:outline-none">
            <div className="min-w-0 min-h-max text-center">
                <p className="text-sm font-medium text-gray-900">{post.title}</p>
                <p className="text-sm text-gray-500">{post.summary}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}