import { useRouter } from "next/navigation";
import { BASE_URL } from "../../../_constant";

const useLogutLogic = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch(`${BASE_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include'
            });

            if (!response.ok) throw new Error('Logout failed');

            // Clear client-side state
            // localStorage.removeItem('user');
            router.push('/');
            router.refresh(); // Refresh to update server-side state
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return handleLogout
}

export default useLogutLogic
