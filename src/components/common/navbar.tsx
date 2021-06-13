import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['Cities'];

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded="md"
        color="olive.200"
        _hover={{
            textDecoration: 'none',
            color: 'olive.500'
        }}
        to={to}
    >
        {children}
    </Link>
);

export function Navbar(): JSX.Element  {
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
