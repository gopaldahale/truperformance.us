import { getBlogs } from "@/services/blog.service";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  // console.log(blogs);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      {blogs.map((blog: any) => (
        <div key={blog.sys.id}>
          <h2>{blog.fields.title}</h2>
          <p>{blog.fields.excerpt}</p>
        </div>
      ))}
    </div>
  );
}