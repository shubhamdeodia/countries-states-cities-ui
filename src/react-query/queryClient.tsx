/* eslint-disable react-hooks/rules-of-hooks */
import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';
import theme from '../theme/theme';

const toast = createStandaloneToast({ theme, colorMode: 'dark' });

export function queryErrorHandler(error: unknown): void {
    const id = 'react-query-error';
    const title =
        error instanceof Error
            ? error.toString().replace(/^Error:\s*/, '')
            : 'error connecting to server';

    // prevent duplicate toasts
    toast.closeAll();
    toast({
        id,
        title,
        status: 'error',
        variant: 'subtle',
        isClosable: true
    });
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler,
            retry: false
        }
    }
});
