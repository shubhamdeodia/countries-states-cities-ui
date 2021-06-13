import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import { clearSelectedCountry, setSelectedCountry } from '../../dux/reducer';
import useDebounce from '../common/hooks/useDebounce';
import { useCountries } from './hooks/useCountries';
import { Container } from '../common/container';
import { ListItem } from '../common/list-item';

function Countries(): JSX.Element {
    // for query param
    const [countryQ, setCountryQ] = useState('');

    const { data } = useCountries({
        pageNumber: 1,
        searchQuery: useDebounce(countryQ, 600)
    });

    const dispatch = useAppDispatch();

    // for sharing country name across component
    const setSelectedCountryCode = (countryCode: string) =>
        dispatch(setSelectedCountry(countryCode));

    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountry
    );
    const clearSelectedCountryCode = () => dispatch(clearSelectedCountry());

    if (data.length <= 0) return null;
    return (
        <Container
            title="Countries"
            searchPlaceHolder="ex: India"
            setInputValue={setCountryQ}
            inputValue={countryQ}
            tagLabel={selectedCountryCode}
            onRemoveTag={clearSelectedCountryCode}
        >
            {data?.map((country) => (
                <ListItem
                    key={country.id}
                    countryCode={country.iso2}
                    name={country.name}
                    emoji={country.emoji}
                    onClickInfo={() => null}
                    onClickArrow={() => setSelectedCountryCode(country.iso2)}
                />
            ))}
        </Container>
    );
}

export { Countries };
