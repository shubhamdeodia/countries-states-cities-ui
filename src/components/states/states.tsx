import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../dux/hooks';
import {
    clearSelectedState,
    setSelectedDetails,
    setSelectedState,
    toggleInfoModal
} from '../../dux/reducer';
import { SelectedDetails } from '../../models/store';
import { Container } from '../common/container';
import useDebounce from '../common/hooks/useDebounce';
import { useUnmountEffect } from '../common/hooks/useUnmountEffect';
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

    const onOpenModal = (countryDetails: SelectedDetails) => {
        dispatch(setSelectedDetails({ selectedDetails: countryDetails }));
        dispatch(toggleInfoModal());
    };

    useUnmountEffect(clearSelectedStateCode);

    const { data, isFetching } = useStates({
        selectedCountryCode,
        pageNumber: 1,
        searchQuery: useDebounce(stateQ, 600)
    });

    return (
        <>
            <Container
                isFetching={isFetching}
                dataLength={data.length}
                title="States"
                searchPlaceHolder="ex: Maharashtra"
                setInputValue={setStateQ}
                inputValue={stateQ}
                tagLabel={selectedStateCode}
                onRemoveTag={clearSelectedStateCode}
            >
                {data?.map((state) => (
                    <ListItem
                        key={state.id}
                        arrowIconTooltip="show cities"
                        infoIconTooltip="show more info"
                        name={state.name}
                        emoji={state.state_code}
                        onClickInfo={() =>
                            onOpenModal({
                                country_code: state.country_code,
                                latitude: state.latitude,
                                longitude: state.longitude,
                                name: state.name
                            })
                        }
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
