// graphql/queries_employer/GetFeaturedEmployers.ts
import { gql } from '@apollo/client';

export const GET_FEATURED_EMPLOYERS = gql`
    query GetFeaturedEmployers($input: pagination!) {
        getFeaturedEmployers(input: $input) {
            employerResult {
                user {
                    user_id
                    email
                    role
                    full_name
                    avatar
                }
                employer {
                    employer_id
                    user_id
                    name_employer
                    description
                    number_of_employees
                    city_address{
                        city_address
                        specific_address
                    }
                    status
                    updated_at
                    social_links {
                        website
                        facebook
                        linkedin
                    }
                    branches {
                        id
                        name
                        city
                        specific_address
                    }
                    industry {
                        industry_id
                        name
                    }
                    interest {
                        salary
                        insurance
                        award
                    }
                }

            }
            pagination {
                page
                limit
                total
                totalPages
            }
            pagination {
                page
                limit
                total
                totalPages
            }
        }
    }
`;
