import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import {
    clearSelectedCountry,
    setSelectedCountry,
    setSelectedDetails,
    toggleInfoModal
} from '../../dux/reducer';
import useDebounce from '../common/hooks/useDebounce';
import { useCountries } from './hooks/useCountries';
import { Container } from '../common/container';
import { ListItem } from '../common/list-item';
import { useUnmountEffect } from '../common/hooks/useUnmountEffect';
import { SelectedDetails } from '../../models/store';

function Countries(): JSX.Element {
    // for query param
    const [countryQ, setCountryQ] = useState('');

    const { data, isFetching } = useCountries({
        pageNumber: 1,
        searchQuery: useDebounce(countryQ, 600)
    });

    const dispatch = useAppDispatch();

    // for sharing country name across component
    const setSelectedCountryCode = (countryCode: string) =>
        dispatch(setSelectedCountry(countryCode));

    const onOpenModal = (countryDetails: SelectedDetails) => {
        dispatch(setSelectedDetails({ selectedDetails: countryDetails }));
        dispatch(toggleInfoModal());
    };

    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountry
    );
    const clearSelectedCountryCode = () => dispatch(clearSelectedCountry());

    useUnmountEffect(clearSelectedCountryCode);

    return (
        <>
            <Container
                title="Countries"
                isFetching={isFetching}
                dataLength={data.length}
                searchPlaceHolder="ex: India"
                setInputValue={setCountryQ}
                inputValue={countryQ}
                tagLabel={selectedCountryCode}
                onRemoveTag={clearSelectedCountryCode}
            >
                {data?.map((country) => (
                    <ListItem
                        arrowIconTooltip="show states"
                        infoIconTooltip="show more info"
                        key={country.id}
                        countryCode={country.iso2}
                        name={country.name}
                        emoji={country.emoji}
                        onClickInfo={() =>
                            onOpenModal({
                                country_code: country.iso3,
                                latitude: country.latitude,
                                longitude: country.longitude,
                                name: country.name,
                                capital: country.capital
                            })
                        }
                        onClickArrow={() =>
                            setSelectedCountryCode(country.iso2)
                        }
                    />
                ))}
            </Container>
        </>
    );
}

export { Countries };
