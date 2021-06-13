import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import { setSelectedDetails, toggleInfoModal } from '../../dux/reducer';
import { SelectedDetails } from '../../models/store';
import { Container } from '../common/container';
import useDebounce from '../common/hooks/useDebounce';
import { ListItem } from '../common/list-item';
import { useCities } from './hooks/useCities';

function Cities(): JSX.Element {
    const [cityQ, setCityQ] = useState('');

    const selectedStateCode = useAppSelector((state) => state.selectedState);

    const { data, isFetching } = useCities({
        selectedStateCode,
        pageNumber: 1,
        searchQuery: useDebounce(cityQ, 600)
    });

    const dispatch = useAppDispatch();

    const onOpenModal = (countryDetails: SelectedDetails) => {
        dispatch(setSelectedDetails({ selectedDetails: countryDetails }));
        dispatch(toggleInfoModal());
    };

    return (
        <>
            <Container
                title="Cities"
                searchPlaceHolder="ex: Pune"
                setInputValue={setCityQ}
                inputValue={cityQ}
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
                            infoIconTooltip="show more info"
                            key={city.id}
                            name={city.name}
                            onClickInfo={() =>
                                onOpenModal({
                                    country_code: city.country_code,
                                    latitude: city.latitude,
                                    longitude: city.longitude,
                                    name: city.name
                                })
                            }
                        />
                    ))}
            </Container>
        </>
    );
}

export { Cities };
