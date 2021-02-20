import Container from '@material-ui/core/Container';
import {selectPosts} from "../src/store/posts/posts.selectors";
import {fetchPostsStart} from "../src/store/posts/posts.actions";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";


export default function Index() {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPostsStart());
    }, [])


    return (
        <Container maxWidth="sm">
            <h1>hello i'm learning this</h1>
        </Container>
    );
}
