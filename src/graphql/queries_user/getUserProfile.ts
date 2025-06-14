import { gql } from '@apollo/client';
export const GET_USER_PROFILE = gql`
    query GetUserProfile($user_id: Int!) {
        getUserProfile(user_id: $user_id) {
            user {
                user_id
                email
                role
                full_name
                avatar
            }
            candidateProfile {
                candidate_id
                cv_url
                job_selection_criteria{
                    salary
                    city_address
                    degree
                    job_categories{
                        category_id
                        name
                    }
                }
                experience{
                    company
                    industry{
                        industry_id
                        name
                    }
                    role
                    years
                }
                skills{
                    name
                    skill_id
                }
                status
                total_experience_years
                updated_at
                user_id
            }
            employerProfile {
                employer_id
                branches {
                    name
                    specific_address
                }
                city_address{
                    city_address
                    specific_address
                }
                description
                employer_id
                industry{
                    industry_id
                    name
                }
                interest {
                    salary
                    insurance
                    award
                }
                name_employer
                number_of_employees
                social_links {
                    website
                    facebook
                    linkedin
                }
                status
                updated_at
                user_id
            }
        }
    }
`;
