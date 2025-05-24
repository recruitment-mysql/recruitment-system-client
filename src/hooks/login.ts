import { useLazyQuery } from '@apollo/client';
import { LOGIN_QUERY } from '@/graphql/queries_user/login';

export const useLogin = () => {
    const [login, { data, loading, error }] = useLazyQuery(LOGIN_QUERY);

    return {
        login,
        data,
        loading,
        error,
    };
};
