import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import { setSelectedEntityData, toggleInfoModal } from '../../dux/reducer';
import { ISelectedEntityData } from '../../models/store';
import { Container } from '../common/container';
import useDebounce from '../common/hooks/useDebounce';
import { ListItem } from '../common/list-item';
import { useCities } from './hooks/useCities';

function Cities(): JSX.Element {
    const [cityQ, setCityQ] = useState('');

    const selectedStateCode = useAppSelector(
        (state) => state.selectedStateCode
    );

    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountryCode
    );

    const { data, isFetching } = useCities({
        selectedStateCode,
        selectedCountryCode,
        pageNumber: 1,
        searchQuery: useDebounce(cityQ, 600)
    });

    const dispatch = useAppDispatch();

    const onOpenModal = (countryData: ISelectedEntityData) => {
        dispatch(setSelectedEntityData({ selectedEntityData: countryData }));
        dispatch(toggleInfoModal());
    };

    return (
        <>
            <Container
                title="Cities"
                isFetching={isFetching}
                dataLength={data.length}
                searchPlaceHolder="ex: Pune"
                setInputValue={setCityQ}
                inputValue={cityQ}
            >
                {data?.map((city) => (
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
