'use client'

import Button from '../../../_components/Button';
import useLogutLogic from '../hooks/useLogutLogic'

const Buttons = () => {
    const handleLogout = useLogutLogic();

    return (
        <div className="flex items-center gap-4">
            <Button component='link' variant="default" href="/posts">All Posts</Button>
            <Button component='link' variant="default" href="/posts/my">My Posts</Button>
            <Button component='link' variant="primary" href='/posts/create' >Create Post</Button>
            <Button component='button' variant='secondary' onClick={handleLogout}>Log out</Button>
        </div>
    )
}

export default Buttons
