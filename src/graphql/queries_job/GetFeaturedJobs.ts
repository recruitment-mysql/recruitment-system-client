import { gql } from '@apollo/client';

export const GET_FEATURED_JOBS = gql`
    query GetFeaturedJobs($input: pagination!) {
        getFeaturedJobs(input: $input) {
            jobs {
                job_id
                title
                description
                Salary
                branches {
                    city
                }
                skills_required {
                    skill_id
                    name
                }
            }
        }
    }
`;
