/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require('path');
// //const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2')

// // This onCreateNode Gatsby API call creates a new 'node' or a thing to be able to
// // manipulate as needed for the project. This particular piece of code will gather the
// // 'slug' data information from each episode ( markdown file as currently implemented)
// // so that we can use this to create a new page/ URL name based on the slug. This is
// // the first step in an effort to build auto-generation of a new podcast episode capibility.
// // ex. episode1.md -> episode1 -> our-page-url/episodes/episode1

// module.exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     fmImagesToRelative(node) // convert image paths for gatsby images

//     if (node.internal.type === 'MarkdownRemark') {

//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         //const value = createFilePath({ node, getNode })
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// }