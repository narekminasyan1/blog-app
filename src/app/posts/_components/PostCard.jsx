'use client'
import { usePathname } from "next/navigation";
import Button from "../../_components/Button";
import { BASE_URL } from "../../_constant";

const PostCard = ({ id, description, title }) => {
    const pathname = usePathname();

    
    const deletePost = async () => {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });  
    
      if (!response.ok) {
        throw new Error('Failed to update post');
      }
     location.reload(true)
      return await response.json(); // or just return response if you want
    };
    

    return <div className="p-4 border rounded shadow">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-gray-700">{description}</p>
        {
            pathname.endsWith('/my') && <div className="mt-2 flex gap-2">
                <Button component="link" href={`/posts/edit/${id}`} variant="primary">Edit</Button>
                <button onClick={() => deletePost(id)} className="text-red-500">Delete</button>
            </div>
        }

    </div>
}

export default PostCard;


