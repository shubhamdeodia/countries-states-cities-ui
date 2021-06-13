import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import { clearSelectedState, setSelectedState } from '../../dux/reducer';
import { Container } from '../common/container';
import { ListItem } from '../common/list-item';
import { useStates } from './hooks/useStates';

function States(): JSX.Element {
    const [stateQ, setStateQ] = useState('');

    const selectedStateCode = useAppSelector((state) => state.selectedState);
    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountry
    );
    const dispatch = useAppDispatch();

    const setSelectedStateCode = (stateCode: string) =>
        dispatch(setSelectedState(stateCode));

    const clearSelectedStateCode = () => dispatch(clearSelectedState());

    const { data, isFetching } = useStates({
        selectedCountryCode,
        pageNumber: 1
    });

    return (
        <>
            <Container
                title="States"
                searchPlaceHolder="ex: Maharashtra"
                setInputValue={setStateQ}
                inputValue={stateQ}
                disableSearch={data.length <= 0}
                tagLabel={selectedStateCode}
                onRemoveTag={clearSelectedStateCode}
            >
                {isFetching && <Text fontSize="2xl">Fetching ...</Text>}
                {!isFetching && data.length <= 0 && (
                    <Text fontSize="3xl">
                        Sorry we dont have sufficient data for this country
                    </Text>
                )}
                {!isFetching &&
                    data?.map((state) => (
                        <ListItem
                            key={state.id}
                            name={state.name}
                            emoji={state.state_code}
                            onClickInfo={() => null}
                            onClickArrow={() =>
                                setSelectedStateCode(state.state_code)
                            }
                        />
                    ))}
            </Container>
        </>
    );
}

export { States };
