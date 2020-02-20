//Server - REST (queries)
export function searchPosts(searchTitle) {
    return {
      type: GET_POSTS_BY_TITLE,
      payload: Axios.get(`/api/posts/userposts?title=${searchTitle}`)
    };
  }

  async function getPostsByTitle(req, res) {
    const db = req.app.get("db");
    const { title } = req.query;
  
    const posts = await db.posts.getPostsByTitle(`${title}%`);
    res.status(200).json(posts);
  }





//Server - Auth (sessions)
app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    })
  );

  async function getUser(req, res) {
    if (req.session.user) {
      res.status(200).json(req.session.user);
    }
  }

const GET_SESSION = "GET_SESSION";

export function getSession() {
  return {
    type: GET_SESSION,
    payload: Axios.get("/auth/user")
  };
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case `${GET_SESSION}_FULFILLED`: {
        return {
          ...state,
          user_id: payload.data.user_id,
          username: payload.data.username
        };
      }




//React - Routing (match object)
class Post extends Component {
    componentDidMount() {
      this.props.getPost(this.props.match.params.post_id);
    }
  
    render() {
      const { post } = this.props;
  
      return (
        <div>
          <h1>{this.props.params.post_id}</h1>
          <h2>{post.title}</h2>
        </div>
      );
    }
  }}}