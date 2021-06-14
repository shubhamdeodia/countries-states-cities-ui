import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function Navbar(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box as="nav" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems="center" justify="space-between">
                <HStack spacing={8} alignItems="center">
                    <IconButton
                        colorScheme="teal"
                        onClick={toggleColorMode}
                        w={8}
                        h={8}
                        aria-label="toggle color mode"
                        icon={
                            colorMode === 'light' ? <MoonIcon /> : <SunIcon />
                        }
                    />
                </HStack>
                <HStack />
            </Flex>
        </Box>
    );
}
