import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/utils/Link';
import * as actions from '../src/store/actions/index.actions';

import {useSelector, useDispatch} from "react-redux";
import {Button} from "@material-ui/core";

export default function Index() {

    const dispatch = useDispatch();
    const counter = useSelector(state => {
        return state.counter;
    })

    const addHandler = () => {
        dispatch(actions.incrementCount());
    }

    const subHandler = () => {
        dispatch(actions.decrementCount());
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <p>counter: {counter}</p>
                <Button onClick={addHandler}>Add One</Button>
                <Button onClick={subHandler}>Remove One</Button>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
            </Box>
        </Container>
    );
}
