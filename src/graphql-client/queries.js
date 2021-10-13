import { gql } from '@apollo/client'

const getUser = gql`
    query ExampleQuery {
        countries {
        code
        name
        }
    }
`

// const getSingleBook = gql`
// 	query getSingleBookQuery($id: ID!) {
// 		book(id: $id) {
// 			id
// 			name
// 			genre
// 			author {
// 				id
// 				name
// 				age
// 				books {
// 					id
// 					name
// 				}
// 			}
// 		}
// 	}
// `

// const getAuthors = gql`
// 	query getAuthorsQuery {
// 		authors {
// 			id
// 			name
// 		}
// 	}
// `

export { getUser };
