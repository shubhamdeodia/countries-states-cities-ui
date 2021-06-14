import {
    Flex,
    Box,
    useColorModeValue,
    HStack,
    Tooltip
} from '@chakra-ui/react';

import ReactCountryFlag from 'react-country-flag';
import { ArrowForwardIcon, InfoIcon } from '@chakra-ui/icons';

type ListItemProps = {
    // eslint-disable-next-line react/require-default-props
    countryCode?: string;
    emoji?: string;
    onClickInfo: () => void;
    onClickArrow?: () => void;
    name: string;
    arrowIconTooltip?: string;
    infoIconTooltip: string;
};

function ListItem({
    countryCode = null,
    emoji,
    name,
    onClickInfo,
    onClickArrow,
    arrowIconTooltip,
    infoIconTooltip
}: ListItemProps): JSX.Element {

    const listBackground = useColorModeValue('teal.400', 'teal.700');
    return (
        <Box
            as="div"
            mb={2}
            borderRadius="md"
            bg={listBackground}
            w="100%"
            color="white"
            p={2}
            h="auto"
        >
            <Flex
                justifyContent="space-between"
                p={2}
                flex="1 0 auto"
                w={240}
                alignItems="center"
            >
                <HStack alignItems="center" spacing="2">
                    {countryCode && (
                        <ReactCountryFlag
                            countryCode={countryCode}
                            svg
                            style={{
                                fontSize: '1.2em',
                                lineHeight: '1.2em'
                            }}
                        />
                    )}
                    <span>{emoji}</span>
                    <span>{name}</span>
                </HStack>
                <HStack spacing="2">
                    <Tooltip
                        hasArrow
                        label={infoIconTooltip}
                        bg="gray.300"
                        color="black"
                    >
                        <InfoIcon
                            onClick={onClickInfo}
                            sx={{
                                cursor: 'pointer'
                            }}
                        />
                    </Tooltip>

                    {typeof onClickArrow === 'function' && (
                        <Tooltip
                            hasArrow
                            label={arrowIconTooltip}
                            bg="gray.300"
                            color="black"
                        >
                            <ArrowForwardIcon
                                onClick={onClickArrow}
                                sx={{
                                    cursor: 'pointer'
                                }}
                            />
                        </Tooltip>
                    )}
                </HStack>
            </Flex>
        </Box>
    );
}

export { ListItem };
