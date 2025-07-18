import PostCard from './PostCard';

const PostList = ({ data }) => {
    return (
        <div className="space-y-4">
            {
                data.map((item) => <PostCard key={item.id} {...item} />)
            }
        </div>
    )
}

export default PostList
