import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppSelector } from '../../dux/hooks';
import { Container } from '../common/container';
import { ListItem } from '../common/list-item';
import { useCities } from './hooks/useCities';

function Cities(): JSX.Element {
    const [stateQ, setStateQ] = useState('');

    const selectedStateCode = useAppSelector((state) => state.selectedState);

    const { data, isFetching } = useCities({
        selectedStateCode,
        pageNumber: 1
    });

    return (
        <>
            <Container
                title="Cities"
                searchPlaceHolder="ex: Pune"
                setInputValue={setStateQ}
                inputValue={stateQ}
                disableSearch={data.length <= 0}
            >
                {isFetching && <Text fontSize="2xl">Fetching ...</Text>}
                {!isFetching && data.length <= 0 && (
                    <Text fontSize="3xl">
                        Sorry we dont have sufficient data for this state
                    </Text>
                )}
                {!isFetching &&
                    data?.map((city) => (
                        <ListItem
                            key={city.id}
                            name={city.name}
                            onClickInfo={() => null}
                        />
                    ))}
            </Container>
        </>
    );
}

export { Cities };
