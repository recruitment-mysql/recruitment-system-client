// src/lib/queries.js
import { gql } from '@apollo/client';

export const GET_USER = gql`
    query {
        getUser {
            user_id
            email
            avatar
            full_name
            number_phone
            role
            created_at
            updated_at
        }
    }
`;