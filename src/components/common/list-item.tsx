import { Flex, Box, useColorModeValue, HStack } from '@chakra-ui/react';
import Flag from 'react-flagkit';
import { ArrowForwardIcon, InfoIcon } from '@chakra-ui/icons';

type ListItemProps = {
    // eslint-disable-next-line react/require-default-props
    countryCode?: string;
    emoji?: string;
    onClickInfo: () => void;
    onClickArrow?: () => void;
    name: string;
};

function ListItem({
    countryCode = null,
    emoji,
    name,
    onClickInfo,
    onClickArrow
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
                <HStack spacing="2">
                    {countryCode && <Flag country={countryCode} />}
                    <span>{emoji}</span>
                    <span>{name}</span>
                </HStack>
                <HStack spacing="2">
                    <InfoIcon
                        onClick={onClickInfo}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                    {typeof onClickArrow === 'function' && (
                        <ArrowForwardIcon
                            onClick={onClickArrow}
                            sx={{
                                cursor: 'pointer'
                            }}
                        />
                    )}
                </HStack>
            </Flex>
        </Box>
    );
}

export { ListItem };
