import { useQuery } from '@apollo/client';
import { GET_USER_PROFILE } from '@/graphql/queries_user/getUserProfile';

type UserProfile = {
    user: {
        user_id: number;
        email: string;
        role: string;
        full_name: string;
        avatar?: string;
    };
    employerProfile?: {
        employer_id: number;
        name_employer: string;
        city_address: {
            city_address: string;
            specific_address: string;
        };
        description?: string;
        number_of_employees?: number;
        social_links?: {
            website?: string;
            facebook?: string;
            linkedin?: string;
        };
    };
};

export function useUserProfile(user_id: number | null | undefined) {
    const { data, loading, error, refetch } = useQuery<{ getUserProfile: UserProfile }>(GET_USER_PROFILE, {
        variables: { user_id: user_id || 0 },
        skip: !user_id,
    });

    return {
        userProfile: data?.getUserProfile,
        loading,
        error,
        refetch,
    };
}
