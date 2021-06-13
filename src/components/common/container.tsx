import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    InputGroup,
    InputLeftElement,
    Input,
    useColorModeValue,
    Stack,
    Text,
    Tag,
    TagLabel,
    TagCloseButton
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    title: string;
    tagLabel?: string;
    setInputValue?: (name: string) => void;
    onRemoveTag?: () => void;
    inputValue: string;
    searchPlaceHolder?: string;
    disableSearch?: boolean;
};

function Container({
    children,
    title,
    disableSearch,
    tagLabel,
    onRemoveTag,
    setInputValue,
    searchPlaceHolder,
    inputValue
}: ContainerProps): JSX.Element {
    const formBackground = useColorModeValue('gray.100', 'gray.700');

    return (
        <Flex
            minH={654}
            maxW={352}
            direction="column"
            background={formBackground}
            p={12}
            m={8}
            rounded={6}
        >
            <Text p={2} align="center" fontSize="xl">
                {title}
            </Text>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        disabled={disableSearch}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={searchPlaceHolder}
                        variant="filled"
                    />
                </InputGroup>
                {tagLabel && (
                    <Tag
                        size="md"
                        maxW={70}
                        justifyContent="space-between"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="teal"
                    >
                        <TagLabel>{tagLabel}</TagLabel>
                        <TagCloseButton onClick={onRemoveTag} />
                    </Tag>
                )}
                {children}
            </Stack>
        </Flex>
    );
}

export { Container };
