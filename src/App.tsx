import { Flex } from '@chakra-ui/react';
import { Cities } from './components/cities/cities';
import { Loader } from './components/common/loader';
import { Navbar } from './components/common/navbar';
import { Countries } from './components/countries/countries';
import { States } from './components/states/states';
import { useAppSelector } from './dux/hooks';

const App = (): JSX.Element => {
    const selectedCountryCode = useAppSelector(
        (state) => state.selectedCountry
    );

    const selectedStateCode = useAppSelector((state) => state.selectedState);

    return (
        <>
            <Navbar />
            <Loader />
            <Flex alignItems="center" justifyContent="center">
                <Countries />
                {selectedCountryCode && <States />}
                {selectedStateCode && <Cities />}
            </Flex>
        </>
    );
};

export default App;
