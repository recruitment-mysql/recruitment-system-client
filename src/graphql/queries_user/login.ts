import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
    query Query($input: UserLoginInput!) {
        login(input: $input) {
            token
            user {
                user_id
                full_name
                email
                role
                avatar
            }
        }
    }
`;
