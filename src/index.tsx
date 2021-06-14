import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { queryClient } from './react-query/queryClient';
import App from './App';
import store from './dux/store';
import theme from './theme/theme';

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
);
