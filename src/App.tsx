import { Flex } from '@chakra-ui/react';
import { Cities } from './components/cities/cities';
import { InfoModal } from './components/common/info-modal';
import { Loader } from './components/common/loader';
import { Navbar } from './components/common/navbar';
import { Countries } from './components/countries/countries';
import { States } from './components/states/states';
import { useAppDispatch, useAppSelector } from './dux/hooks';
import { toggleInfoModal } from './dux/reducer';

const App = (): JSX.Element => {
    // selector
    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountryCode
    );
    const isModalOpen = useAppSelector((state) => state.isInfoModalOpen);
    const selectedStateCode = useAppSelector(
        (state) => state.selectedStateCode
    );

    // dispacther
    const dispatch = useAppDispatch();

    return (
        <>
            <InfoModal
                isOpen={isModalOpen}
                onClose={() => dispatch(toggleInfoModal())}
            />
            <Navbar />
            <Loader />
            <Flex alignItems="center" justifyContent="center">
                <Countries />
                {selectedCountryCode && <States />}
                {selectedCountryCode && selectedStateCode && <Cities />}
            </Flex>
        </>
    );
};

export default App;
