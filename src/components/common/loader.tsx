import { Spinner, Text } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';

export function Loader(): JSX.Element {
    const isFetching = useIsFetching();

    const display = isFetching ? 'inherit' : 'none';

    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            size="xl"
            emptyColor="gray.200"
            colorScheme="teal"
            role="status"
            position="fixed"
            zIndex="9999"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display={display}
        >
            <Text display="none">Loading...</Text>
        </Spinner>
    );
}
