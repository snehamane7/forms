// import { Component } from 'react';
// import { Post } from '../Post/Post';
// import axios  from 'axios';
// // import axios from './../../axiosinstance';
// // import { FunctionalSinglePostDetails } from '../FunctionalSinglePostDetails/FunctionalSinglePostDetails';
// // import { AddPost } from '../AddPost/AddPost';

// export default class Posts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//             selectedPostId: null,
//         //     isAddPost: false,
//         };
//     }
//     componentDidMount(){
//         axios
//         .get(`http://127.0.0.1:5000/home`,)
//         .then((response)=>{
//             console.log(response);
//             // axios.get(`/posts.json`).then((response) => {
//                 const posts = [];
//                 for (let key in response.data) {
//                     posts.push({ ...response.data[key], id: key });
//                 }
//                 this.setState({
//                     posts: posts,
//                 });
//         });
//     }

//     // componentDidMount() {
//     //     this.getPosts();
//     // }

//     // getPosts = () => {
//     //     this.setState({
//     //         isAddPost: false,
//     //     });
//         // axios.get(`/posts.json`).then((response) => {
//         //     const posts = [];
//         //     for (let key in response.data) {
//         //         posts.push({ ...response.data[key], id: key });
//         //     }

//             // this.setState({
//             //     posts: posts,
//             // });
//     //     });
//     // };

//     onPostClickHandler = (id) => {
//         console.log(id);
        
//         this.setState({
//             selectedPostId: id,
//         });
//     };

//     // onAddPostHandler = () => {
//     //     this.setState({
//     //         isAddPost: true,
//     //     });
//     // };

//     // onPostDeleteHandler = (id, e) => {
//     //     e.stopPropagation();

//     //     if (window.confirm('Are you sure you want to delete')) {
//     //         axios.delete(`/posts/${id}.json`).then((response) => {
//     //             this.getPosts();
//     //         });
//     //     }
//     // };

//     render() {
//         const posts = this.state.posts.map((post) => {
//             return (
//                 <Post
//                     key={post.id}
//                     post={post}
                    
//                     postclicked={this.onPostClickHandler.bind(
//                         this,
//                         post.id,
                        
//                     )}
//                     // postDeleted={this.onPostDeleteHandler.bind(
//                     //     this,
//                     //     post.id,
//                     // )}
                    
//                 />
//             );
//         });

//         return (
//             <div>
//                 <div className='flex'>
//                     <div className='w-3/4 mr-4'></div>
//                 <h1 className='font-bold text-xl my-3'>
//                                 Cards
//                 </h1>
//                 <div>{posts}</div>
//                 </div>
//             </div>

//         // return (
//         //     <div>
//                 // <div className='flex'>
//                 //     <div className='w-3/4 mr-4'>
//         //                 <div className='flex items-center justify-between'>
//                             // <h1 className='font-bold text-xl my-3'>
//                             //     Posts Data
//                             // </h1>
//         //                     <a
//         //                         href='#'
//         //                         onClick={this.onAddPostHandler}
//         //                         className='bg-blue-600 px-2 py-1 text-white'
//         //                     >
//         //                         Create Post
//         //                     </a>
//         //                 </div>
//         //                 <div className='flex flex-wrap mx-2'>{posts}</div>
//         //             </div>
//         //             {this.state.selectedPostId && (
//         //                 <div className='w-1/4'>
//         //                     <h2 className='font-bold text-2xl'>
//         //                         Post details
//         //                     </h2>
//         //                     <FunctionalSinglePostDetails
//         //                         id={this.state.selectedPostId}
//         //                     />
//         //                 </div>
//         //             )}
//         //         </div>
//         //         {this.state.isAddPost && (
//         //             <div className='my-3'>
//         //                 <AddPost onPostAdded={this.getPosts} />
//         //             </div>
//         //         )}
//         //     </div>
//         );
//     }
// }




// //===================
// // import React, { Component } from 'react';
// // import axios from 'axios';
// // import { Post } from '../Post/Post';

// // class Posts extends Component {
// //     state = {
// //         posts: [] // Initialize posts as an empty array
// //     };

// //     componentDidMount() {
// //         axios.get('http://127.0.0.1:5000/home')
// //             .then((response) => {
// //                 this.setState({ posts: response.data });
// //             })
// //             .catch((error) => {
// //                 console.error('Error fetching posts:', error);
// //                 this.setState({ posts: [] }); // Set posts to an empty array if fetching fails
// //             });
// //     }

// //     render() {
// //         const { posts } = this.state; // Destructure posts from state
// //         return (
// //             <div>
// //                 <h1>Cards</h1>
// //                 {Array.isArray(posts) && posts.map(post => (
// //                     <Post key={post.id} post={post} />
// //                 ))}
// //             </div>
// //         );
// //     }
// // }

// // export default Posts;
