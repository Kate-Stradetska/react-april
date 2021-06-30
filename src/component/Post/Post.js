export default Post;

const Post = ({id, title, body}) => {
    return(
        <div>
            <h3>{id}. {title}</h3>
            { <p>{body}</p> }
            <hr/>



        </div>
    )
}
