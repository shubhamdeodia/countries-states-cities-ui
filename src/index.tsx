import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import store from './dux/store';
import theme from './theme/theme';

const queryClient = new QueryClient();

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
